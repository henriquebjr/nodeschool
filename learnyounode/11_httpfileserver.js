var http = require('http'),
  fs = require('fs');

var server = http.createServer(function(req, res){
    var data = fs.createReadStream(process.argv[3]);
    data.pipe(res);
});

server.listen(process.argv[2]);
