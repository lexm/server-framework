'use strict';

var Router = function() {
  this.routes = {
    'GET': {},
    'POST': {}
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
    var routeFunction = this.routes[req.method][req.url];
    if ((this.routes.indexOf(req.method) !== -1) &&
    (this.routes[req.method].indexOf(req.url) !== -1)) {
      routeFunction(req, res);
    } else {
      console.log('[' + req.method + '][' + req.url + '] not found');
    }
  };
};

var mainRouter = new Router();
exports.mainRouter = mainRouter;
