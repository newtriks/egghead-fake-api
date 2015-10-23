var Hapi = require('hapi');
var dummy = require('hapi-dummy-api');
var server = new Hapi.Server();

server.connection({
  port: 8000,
  routes: {
    cors: {
      additionalHeaders: ['Access-Control-Allow-Origin']
    }
  }
});

server.register(
  [{
    register: dummy,
    options: require('./options/superheroes')
  }],
  function (err) {
    if(err) throw err;

    server.start(function(err) {
      if(err) throw err;
      console.log('Server running on localhost');
    });
  }
);