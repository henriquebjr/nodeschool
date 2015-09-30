var http = require('http'),
  url = require('url');

var server = http.createServer(function(req, res){
  var path = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if(req.method == 'GET'){
    if(path.pathname == '/api/parsetime'){
      var date = new Date(path.query.iso);
      var time = new Object();
      time.hour = date.getHours();
      time.minute = date.getMinutes();
      time.second = date.getSeconds();
      res.end(JSON.stringify(time));
    }
    if(path.pathname == '/api/unixtime'){
      var unix = new Date(path.query.iso);
      var unixTime = unix.getTime();
      var time = new Object();
      time.unixtime = unixTime;
      res.end(JSON.stringify(time));
    }
  }
});

server.listen(process.argv[2]);
