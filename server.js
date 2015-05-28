var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.end('OK');
}).listen(80);
