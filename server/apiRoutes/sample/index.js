const router = require('express').Router();


router.get('/', (req, res, next) => {
  console.log('hi api/sample route!');
})

module.exports = router;
