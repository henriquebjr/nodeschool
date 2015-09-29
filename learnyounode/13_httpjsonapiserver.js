var http = require('http'),
  url = require('url'),
  startsWith = require('string.prototype.startswith');

var server = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(req.method == 'GET' && req.url.startsWith('/api/')){
    if(req.url.startsWith('/api/parsetime?')){
      console.log("parsetime....");
    }
    if(req.url.startsWith('/api/unixtime?')){
      console.log("unixtime....");
    }
  }
});

server.listen(process.argv[2]);
