/*eslint-disable new-cap*/
const router = require('express').Router();


//delegate to further api routes]
// '/api/sample'
router.use('/sample', require('./sampleAPIBranch/'))
      .use('/users', require('./users'));


router.use( (req, res, next) => {
  const err = new Error('API Route not found!');
  err.status = 404;
  next(err);
})

module.exports = router;
