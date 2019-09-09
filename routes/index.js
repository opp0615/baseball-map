var express = require('express');
var router = express.Router();

var readXlsxFile = require('read-excel-file/node')






/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = {}

  readXlsxFile('./data.xlsx').then((rows) =>{
    obj = {"data" : rows};
    for(var i in rows){
      if(rows[i][4]){
        console.log("구장명 : "+rows[i][3]);
        console.log("주소 : "+rows[i][4]);
      }
    }


    res.render('index.ejs', obj);
  })

});

module.exports = router;
