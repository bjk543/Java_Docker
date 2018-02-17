const express = require('express')
const app = express()

var fetch = require('node-fetch');

// if you are on node v0.10, set a Promise library first, eg.
// fetch.Promise = require('bluebird');

// plain text or html




app.get('/', function (req, res) {
  fetch('http://192.168.0.102:8083/')
  .then(function(res1) {
      return res1.text();
  }).then(function(body) {
      console.log(body);
      res.json(body+"asd")
  }).catch(err=>
  {
    console.log(err);
    res.json(err);
  });
  
})

app.listen(8084, function () {
  console.log('Example app listening on port 8084!')
})