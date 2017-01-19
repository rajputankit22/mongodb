var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //var myname= req.params.name;
  var obj = {
            "name":"ankit",
            "age":24
  };
  res.json(obj);
  //console.log("abc");
});

module.exports = router;
