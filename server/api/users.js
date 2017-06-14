/*eslint-disable new-cap*/
/*eslint-disable curly*/
const router = require('express').Router();

const User = require('../../db/models/user');

// log a user in
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

// log user out
router.get('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
