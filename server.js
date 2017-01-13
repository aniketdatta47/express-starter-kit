const PORT = 3000;
var express = require('express');
var app = express();
var http  = require('http');
var server = http.createServer(app);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/views/index.html')
});

app.post('/test', function (req, res) {
  res.send({'test': 'foo'});
});

app.use(express.static('public'));

server.listen(PORT, 'localhost');
server.on('listening', function () {
  console.log('Example app listening on port %s!', PORT)
});
