var express = require('express');

var app = express();
var httpPort = 8080;

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: ['index.html'],
  maxAge: '1d',
  redirect: true,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};

// Simple logger
app.use(function(req, res, next) {
  console.log('%s | %s %s %s', (new Date()).toISOString(), req.method, req.url, req.path);
  next();
});


app.use(express.static(__dirname + '/simple', options));

console.log(`Start listening at port ${httpPort} on localhost`);
console.log(`Type http://localhost:${httpPort} in your browser`);
app.listen(httpPort);


