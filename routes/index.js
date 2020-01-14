var express = require('express');
var router = express.Router();

var readXlsxFile = require('read-excel-file/node')






/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {}

  readXlsxFile('./config/data.xlsx').then((rows) =>{
    obj = {"data" : rows};

    res.render('index.ejs', obj);
  })

});

module.exports = router;
