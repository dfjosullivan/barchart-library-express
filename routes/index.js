var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('public/html/index.html', { root : __dirname});
});

module.exports = router;
