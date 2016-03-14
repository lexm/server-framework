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
  var newFilename = __dirname + '/../data/' + resource + '/' + padId + '.json';
  fs.writeFile(newFilename, chunk.toString(), (err) => {
    if(err) throw err;
    console.log(newFilename + ' finished writing');
  });
};

mainRouter.post(resource, (req, res, urlId) => {
  console.log(resource + ' POST hit');
  req.on('data', (data) => {
    if(nextId == 0) {
      fs.readdir('./data/' + resource, (err, files) => {
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

mainRouter.get(resource, (req, res, urlId) => {
  console.log(resource + ' GET hit');
  fs.readdir(__dirname + '/../data/' +resource , (err, files) => {
    if(err) {
      console.log(err);
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      debugger;
      files.forEach( (cur, idx) => {
        res.write(cur + '\n', function() {
          if(idx === files.length - 1) {
            res.end();
          }
        });
      });
    }
  });
});

mainRouter.put(resource, (req, res, urlId) => {
  console.log(resource + ' PUT hit');
  res.end();
});

mainRouter.delete(resource, (req, res, urlId) => {
  console.log(resource + ' DELETE hit');
  fs.unlink(__dirname + '/../data' + req.url + '.json');
  // fs.unlink(__dirname + req.url + '.json');
  res.end();
});

// exports.mainRouter = mainRouter;
