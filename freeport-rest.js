var express = require('express');
var freeport = require('freeport');
var app = express();

app.get('/api/freeport', function(req, res) {
  freeport(function(err, port) {
    if (err) throw err
    console.log(port);
    res.json({freeport: port.toString()});
  });
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
