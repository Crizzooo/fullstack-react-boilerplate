/*eslint-disable new-cap*/
/*eslint-disable curly*/
const router = require('express').Router();

const db = require('../../db');
const User = db.model('users');

// log a user in
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  User.findOne({
    where: { email }
  })
    .then(user => {
      if (!user) res.status(401).send('User not found');
      else if (!user.authenticate(password)) res.status(401).send('Incorrect password');
      else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

// sign a user up
router.post('/signup', (req, res, next) => {
  console.log('express /signup hit', req.body);
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

// get a logged in user
router.get('/me', (req, res, next) => {
  res.json(req.user);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
