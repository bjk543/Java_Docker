var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
//var ipAddress='192.168.0.102';
var url = process.env.MONGO_URL;
console.log("MONGO_URL is "+url);
var EXPRESS_PORT = process.env.EXPRESS_PORT;
console.log("EXPRESS_PORT is "+EXPRESS_PORT);
var port = process.env.EXPRESS_PORT;
console.log("port is "+port);

var ipAddress='localhost';
var nodeVersion = "1.5";


var express = require('express');
var app = express();

var bodyParser = require("body-parser");
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//CORS middleware
//https://enable-cors.org/server_expressjs.html
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
//


// app.listen(port,"192.168.11.140");
app.listen(port);

app.get('/', function (req, res) {
	console.log('/get');
	res.send('get node server http://'+ipAddress+':8096/ version' + nodeVersion + ' \n ');
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

//https://www.w3schools.com/nodejs/nodejs_mongodb_query.asp
var find = function (para, callback) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    db.collection(para.table).find(para.kv).toArray(function (err, result) {
      if (err) throw err;
      callback(result, db);      
    });
  });
}

//http://localhost:8083/find/Transactions/{"blockHash":{"$regex":"0x7.*"}}
app.get('/find/:table/:kv/', function (req, res) {
  var kv = req.params.kv;
  var kTable = req.params.table;
  try {
    var para = {
      table: kTable,
      kv: JSON.parse(kv),
    }
    find(para, function (doc, db) {
      db.close();
      res.status(200).json(
        doc
      ).end();
    });
  } catch (err) {
    console.log('find  err is ' + err);
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
          console.log('upsertDocument %j' , object.result);
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


var findOne2 = async function (para) {
  para.db.collection(para.table).findOne(para.kv, function (err, document) {
    return document;
  });
}

var findBlockNumber = function (para, callback) {
  para.db.collection(para.table).findOne(para.kv, function (err, document) {
    callback(document.blockNumber);
  });
}

/*

var findOne = function (db, table, key, value, callback) {
  db.collection(table).findOne({ [key]: value }, function (err, document) {
    callback(document);
  });
}

MongoClient.connect(url, function (err, db) {
  assert.equal(null, err);
  var para = {
    db: db,
    table: "MaxBlockSync",
    kv: { idx: 0 },
    data: { blockNumber: 5 }
  }
  upsertDocument(para, function () { db.close(); })
});
*/

module.exports = {
  connect: async function () {
    return await MongoClient.connect(url);
  },

  upsertDocument: function (para) {
    //console.log('upsertDocument %j', para);  
    MongoClient.connect(url, function (err, db) {
      para.db = db;
      upsertDocument(para, function (err, object) {
        //console.log('upsertDocument %j', para);  
        if (err) {
          //console.log('upsertDocument '+err);
        } else {
          //console.log('upsertDocument '+object);
        }
        db.close();

      })

    });
  },
  findOne1: async function (para) {


    var test = findOne(para, function (object) {
      callback(object);
      para.db.close();
    })

    console.log(test);


  },
  findOne: function (para, callback) {
    MongoClient.connect(url, function (err, db) {
      para.db = db;
      var test = findOne(para, function (object) {
        callback(object);
        db.close();
      })

      console.log(test);
    });

  },
  findBlockNumber: function (para, callback) {
    MongoClient.connect(url, function (err, db) {
      para.db = db;
      findBlockNumber(para, function (object) {
        callback(object);
        db.close();
        return object;
      })
    });
  },
}

//db.getCollection('Transactions').find({blockHash:{'$regex': '.*0x'}})