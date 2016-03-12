var http = require('http');
var mainRouter = require(__dirname + '/../router').mainRouter;


http.createServer(mainRouter).listen(3000, function() {
  console.log('server up on 3000');
});
