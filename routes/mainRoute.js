'use strict';

// var fs = require('fs');
// var http = require('http');
// var router = require('../lib/router');
var mainRouter = require('../server').mainRouter;
// var mainRouter = router.mainRouter;

mainRouter.post('/', (req, res) => {
  console.log('main POST hit');
  res.end();
});

mainRouter.get('/', (req, res) => {
  console.log('main GET hit');
  res.end();
});

mainRouter.put('/', (req, res) => {
  console.log('main PUT hit');
  res.end();
});

mainRouter.delete('/', (req, res) => {
  console.log('main DELETE hit');
  res.end();
});
