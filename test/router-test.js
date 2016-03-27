var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
var Router = require(__dirname + '/../lib/router');
// var server = require(__dirname + '/../server');
var newRouter = new Router;

describe('testing POST route creation', () => {
  it('should have an object as the POST property of newRouter.routes', (done) => {
    expect(newRouter.routes.POST).to.eql({});
    done();
  });
  it('should assign a function when newRouter.post() is called', (done) => {
    newRouter.post('testing', function() {
      console.log('testing route POST hit');
    });
    done();
  });
});
