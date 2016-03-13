'use strict';

var fs = require('fs');
// var http = require('http');
// var router = require('../lib/router');
// var mainRouter = router.mainRouter;
var mainRouter = require('../server').mainRouter;

var nextId = 0;

var writeLog = function(id, chunk) {
  var padId = ('000000' + id).substr(-6);
  console.log(padId);
  var newFilename = __dirname + '/../data/' + padId + 'test.json';
  fs.writeFile(newFilename, chunk.toString(), () => {
    console.log(newFilename + ' finished writing');
  });
};

mainRouter.post('/test/', (req, res) => {
  console.log('test POST hit');
  req.on('data', (data) => {
    if(nextId == 0) {
      fs.readdir('./data', (err, files) => {
        if(err) {
          console.error(err);
        } else {
          nextId = files.length + 1;
          console.log('new ID' + nextId);
        }
        writeLog(nextId, data);
        nextId++;
        res.end();
      });
    } else {
      writeLog(nextId, data);
      nextId++;
      res.end();
    }
  });
  res.end();
});

mainRouter.get('/test/', (req, res) => {
  console.log('test GET hit');
  res.end();
});

mainRouter.put('/test/', (req, res) => {
  console.log('test PUT hit');
  res.end();
});

mainRouter.delete('/test/', (req, res) => {
  console.log('test DELETE hit');
  res.end();
});

// exports.mainRouter = mainRouter;
