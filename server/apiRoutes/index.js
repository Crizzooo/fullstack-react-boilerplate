const router = require('express').Router();


//delegate to further api routes
router.use('/sample', require('./sample'));


router.use( (req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
})

module.exports = router;
