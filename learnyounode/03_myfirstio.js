var fs = require('fs');

var text = fs.readFileSync(process.argv[2]);
var lines = text.toString().split('\n');

console.log(lines.length - 1);
