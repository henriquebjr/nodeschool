var http = require("http");

function printl(line){
  console.log(line);
}

function printLines(lines){
  lines.forEach(printl);
}

function print(response){
  response.setEncoding('utf8');

  response.on('data', function(data){
    printLines(data.split('\n'));
  });
}

http.get(process.argv[2], print);
