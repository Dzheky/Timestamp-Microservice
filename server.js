var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World!</h1>');
});

var port = Number(process.env.PORT || 8080)

app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});