var http = require('http');
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);

var request = chai.request;
var expect = chai.expect;
var Router = require(__dirname + '/../lib/router');
// var server = require(__dirname + '/../server');
var newRouter = new Router;
// require('../server');

http.createServer(newRouter.route()).listen(3000, function() {
  console.log('server up on 3000');
});

describe('testing POST route creation', () => {
  it('should have an object as the POST property of newRouter.routes', (done) => {
    expect(newRouter.routes.POST).to.eql({});
    done();
  });
  it('should assign a function when newRouter.post() is called', (done) => {
    newRouter.post('testing', function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('POST hit');
      res.end();
    });
    expect(newRouter.routes.POST.testing).to.be.a('function');
    done();
  });
  it('should call that function on hitting /testing POST route', (done) => {
    request('localhost:3000')
    .post('/testing')
    .end(function(err, res) {
      expect(err).to.eql(null);
      if(err) {
        console.error(err);
      } else {
        expect(res.text).to.eql('POST hit');
        done();
      }
    });
  });
});

describe('testing GET route creation', () => {
  it('should have an object as the GET property of newRouter.routes', (done) => {
    expect(newRouter.routes.GET).to.eql({});
    done();
  });
  it('should assign a function when newRouter.post() is called', (done) => {
    newRouter.get('testing', function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('GET hit');
      res.end();
    });
    expect(newRouter.routes.GET.testing).to.be.a('function');
    done();
  });
  it('should call that function on hitting /testing GET route', (done) => {
    request('localhost:3000')
    .get('/testing')
    .end(function(err, res) {
      expect(err).to.eql(null);
      if(err) {
        console.error(err);
      } else {
        expect(res.text).to.eql('GET hit');
        done();
      }
    });
  });
});

describe('testing PUT route creation', () => {
  it('should have an object as the PUT property of newRouter.routes', (done) => {
    expect(newRouter.routes.PUT).to.eql({});
    done();
  });
  it('should assign a function when newRouter.post() is called', (done) => {
    newRouter.put('testing', function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('PUT hit');
      res.end();
    });
    expect(newRouter.routes.PUT.testing).to.be.a('function');
    done();
  });
  it('should call that function on hitting /testing PUT route', (done) => {
    request('localhost:3000')
    .put('/testing')
    .end(function(err, res) {
      expect(err).to.eql(null);
      if(err) {
        console.error(err);
      } else {
        expect(res.text).to.eql('PUT hit');
        done();
      }
    });
  });
});

describe('testing DELETE route creation', () => {
  it('should have an object as the DELETE property of newRouter.routes', (done) => {
    expect(newRouter.routes.DELETE).to.eql({});
    done();
  });
  it('should assign a function when newRouter.post() is called', (done) => {
    newRouter.delete('testing', function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('DELETE hit');
      res.end();
    });
    expect(newRouter.routes.DELETE.testing).to.be.a('function');
    done();
  });
  it('should call that function on hitting /testing DELETE route', (done) => {
    request('localhost:3000')
    .delete('/testing')
    .end(function(err, res) {
      expect(err).to.eql(null);
      if(err) {
        console.error(err);
      } else {
        expect(res.text).to.eql('DELETE hit');
        done();
      }
    });
  });
});
