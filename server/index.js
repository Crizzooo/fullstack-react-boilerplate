/*eslint-disable camelcase*/
const path = require('path');
const express = require('express');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

if (process.env.NODE_ENV === 'development') {
  require('../secrets');
}

const db = require('../db');
const User = db.model('users');

// store session on the db so that if a server restart happens, logged in users won't be affected
const dbStore = new SequelizeStore({ db });
dbStore.sync();

const PORT = process.env.PORT || 3000;

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// session middleware
app.use(session({
  secret: process.env.LOCAL_SECRET || 'SUPER SECRET OMG!',
  store: dbStore,
  resave: false,
  saveUninitialized: false
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});


// register google strategy with passport
passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:${PORT}/api/users/google/redirect`,
    passReqToCallback: true
  },
  function (request, token, refreshToken, profile, done) {
    User.findOrCreate({
      where: {
        google_id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
      }
    })
      .spread((user) => done(null, user))
      .catch(done);
  }
));

// sync database, then start server
db.sync(/*{ force: true }*/) // uncomment force true to clear database with each sync
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server listening on Port: ', PORT);
    });
  })
  .catch(err => console.error(err));

//redirect api routes
app.use('/api', require('./api'));

app.use(express.static(path.join(__dirname, '..', 'client/src/public')));

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'client/src/public/index.html'));
});

//Error Handler
app.use('/', (err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server error.');
});
