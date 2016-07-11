var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World!</h1>');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});