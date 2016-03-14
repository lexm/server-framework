'use strict';

// var url = require('url');

var Router = module.exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'DELETE': {}
  };
};

Router.prototype.get = function(route, cb) {
  this.routes['GET'][route] = cb;
};

Router.prototype.post = function (route, cb) {
  this.routes['POST'][route] = cb;
};

Router.prototype.put = function (route, cb) {
  this.routes['PUT'][route] = cb;
};

Router.prototype.delete = function (route, cb) {
  this.routes['DELETE'][route] = cb;
};

Router.prototype.route = function () {
  return (req, res) => {
    var splitUrl = req.url.split('/');
    if(splitUrl[0] === '') {
      splitUrl.shift();
    }
    if (this.routes.hasOwnProperty(req.method) &&
    this.routes[req.method].hasOwnProperty(splitUrl[0])) {
      var routeFunction = this.routes[req.method][splitUrl[0]];
      routeFunction(req, res, splitUrl);
    } else {
      console.log('[' + req.method + '][/' + splitUrl[0] + '] not found');
      res.end();
    }
  };
};

module.exports = Router;
