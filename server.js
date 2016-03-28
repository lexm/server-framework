var http = require('http');
var Router = require(__dirname + '/lib/router');
var mainRouter = new Router();
exports.mainRouter = mainRouter;
console.dir(mainRouter);
require(__dirname + '/routes/mainRoute');
require(__dirname + '/routes/albumRoute');
require(__dirname + '/routes/songRoute');



http.createServer(mainRouter.route()).listen(3000, function() {
  console.log('server up on 3000');
});
