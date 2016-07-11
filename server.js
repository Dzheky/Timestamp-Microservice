var express = require('express');
var dateformat = require('dateformat');



var app = express();
app.use(express.static(__dirname+"/public"));
app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.sendFile('index.hmtl');
})
app.get('/:time', function(req, res, next) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  if(Date.parse(req.params.time)) {
    var date = new Date(req.params.time);
  } else if ((new Date(Number(req.params.time))).getTime() > 0) {
    var date = new Date(Number(req.params.time));
  } else {
    var date = null;
  }
  
  res.end(JSON.stringify({natural: date ? dateformat(date, 'longDate') : null, unix:  Date.parse(date)}));

  
})

var port = Number(process.env.PORT || 8080)

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});