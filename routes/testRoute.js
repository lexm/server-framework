'use strict';

// var fs = require('fs');
// var http = require('http');
// var router = require('../lib/router');
// var mainRouter = router.mainRouter;
var mainRouter = require('../server').mainRouter;

mainRouter.post('/test/', (req, res) => {
  console.log('test POST hit');
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
