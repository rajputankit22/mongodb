var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/input', function(req, res, next) {
var data = {
            title:	'Form'
            };
  res.render('index',data);
});
router.post('/handle', function(req, res, next) {
  var name = req.body.name;
  res.send(name)
  //res.render('index',data);
});

module.exports = router;
