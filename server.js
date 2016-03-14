var http = require('http');
var Router = require(__dirname + '/lib/router');
var mainRouter = new Router();
exports.mainRouter = mainRouter;
console.dir(mainRouter);
var mainRoute = require(__dirname + '/routes/mainRoute');
var testRoute = require(__dirname + '/routes/testRoute');
var albumRoute = require(__dirname + '/routes/albumRoute');
var songRoute = require(__dirname + '/routes/songRoute');
// var testRoute = require(__dirname + '/routes/testRoute')


http.createServer(mainRouter.route()).listen(3000, function() {
  console.log('server up on 3000');
});
