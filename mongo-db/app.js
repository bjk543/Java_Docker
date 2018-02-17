var express = require('express');
var app = express();
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
//DB setup
var url = process.env.MONGO_URL;
mongoose.connect(url);
console.log("MONGO_URL is "+url);
var EXPRESS_PORT = process.env.EXPRESS_PORT;
console.log("EXPRESS_PORT is "+EXPRESS_PORT);
var port = process.env.EXPRESS_PORT;
console.log("port is "+port);


app.get('/', function(req, res){
 res.send("Hello World-changed-1 ");
});
app.listen(8094, function(){
 console.log('Example app listening on port 8094!!');
});



var findOne = function (para, callback) {
  console.log('findOne para %j', para);
  MongoClient.connect(url, function (err, db) {
    db.collection(para.table)
      .findOne(para.kv, function (err, document) {
        callback(document, db);

      });
  });
}



app.get('/findOne/:table/:kv/', function (req, res) {
  var kv = req.params.kv;
  var kTable = req.params.table;
  try {
    var para = {
      table: kTable,
      kv: JSON.parse(kv),
    }
    findOne(para, function (doc, db) {
      console.log('findOne  doc is %j', doc);

      db.close();
      res.status(200).json(
        doc
      ).end();
    });
  } catch (err) {
    console.log('findOne  err is ' + err);
    // res.status(500).end(err+'\n'+err.stack);
    res.status(500).json({
      hash: err.stack
    }).end(err.stack);
  }
});


var upsertDocument = function (para, callback) {
  console.log('upsertDocument para %j', para);
  MongoClient.connect(url, function (err, db) {
    db.collection(para.table).update(
      para.kv, {
        $set: para.data
      }, {
        upsert: true
      },
      function (err, object) {
        if (err) {
          console.warn(err.message); // returns error if no matching object found
        } else {
          //console.dir(object);
          console.log('upsertDocument %j' + object.result);
        }
        callback(err, object, db);
      });
  })
}
app.get('/upsertDocument/:table/:kv/:update1/', function (req, res) {

  var kv = req.params.kv;
  var kTable = req.params.table;
  var kUpdate = req.params.update1;

  try {

    var para = {

      table: kTable,
      kv: JSON.parse(kv),
      data: JSON.parse(kUpdate)
    }
    upsertDocument(para, function (err, doc, db) {
      console.log('upsertDocument  doc is %j', doc);
      db.close();
      res.status(200).json(
        doc
      ).end();
    });
  } catch (err) {
    console.log('upsertDocument  err is ' + err);
    res.status(500).json({
      hash: err.stack
    }).end(err.stack);
  }

});