var net = require('net');

var server = net.createServer(function (socket) {
  var date = new Date();

  var month = Number(date.getMonth()) + 1;
  if(month < 10)
    month = '0' + month;

  var day = Number(date.getDate());
  if(day < 10)
    day = '0' + day;

  var dateTxt = date.getFullYear() + '-' + month + '-' + day + ' ' + date.getHours() + ':' + date.getMinutes();
  socket.write(dateTxt);
  socket.end();
})
server.listen(process.argv[2]);
