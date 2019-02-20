var express = require('express');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send('GET');
});

router.post('/', function(req, res, next) {
  res.send('POST');
});

module.exports = router;
