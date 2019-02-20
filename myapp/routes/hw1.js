var express = require('express');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send({
  	router: 'hw1',
  	method: 'GET'});
});

router.post('/', function(req, res, next) {
  res.send({
  	string: req.query.string,
  	method: 'POST'});
});

module.exports = router;
