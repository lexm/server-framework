'use strict';

var fs = require('fs');
// var http = require('http');
// var router = require('../lib/router');
// var mainRouter = router.mainRouter;
var mainRouter = require('../server').mainRouter;
var resource = 'test';

var nextId = 0;

var writeLog = function(id, chunk) {
  var padId = ('000000' + id).substr(-6);
  console.log(padId);
  var newFilename = __dirname + '/../data/' + padId + resource + '.json';
  fs.writeFile(newFilename, chunk.toString(), () => {
    console.log(newFilename + ' finished writing');
  });
};

mainRouter.post('/' + resource + '/', (req, res) => {
  console.log(resource + ' POST hit');
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

mainRouter.get('/' + resource + '/', (req, res) => {
  console.log(resource + ' GET hit');
  res.end();
});

mainRouter.put('/'+ resource + '/', (req, res) => {
  console.log(resource + ' PUT hit');
  res.end();
});

mainRouter.delete('/' + resource + '/', (req, res) => {
  console.log(resource + ' DELETE hit');
  res.end();
});

// exports.mainRouter = mainRouter;
