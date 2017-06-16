/*eslint-disable new-cap*/
/*eslint-disable curly*/
const passport = require('passport');
const router = require('express').Router();

const User = require('../../db/models/user');

// google OAuth2
router.get('/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login',
  	        'https://www.googleapis.com/auth/plus.profile.emails.read'],
    approvalPrompt: 'force'
  }
));

// in google API dashboard, configure your app's callback to match the
// first argument below ie http://localhost:3000/api/users/google/redirect
router.get('/google/redirect', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/'
}));

// log a user in to the session
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email }
  })
    .then(user => {
      if (!user) res.status(401).send('User not found');
      else return Promise.all([user.authenticate(password), user]);
    })
    .spread((success, user) => {
      if (success) {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});


// sign a user up which logs the user into the session
router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

// get the user that is logged in to the session
router.get('/me', (req, res, next) => {
  res.json(req.user);
});

// log user out of the session
router.get('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
