var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function(err, text) {
  if(err)
    console.error(err);

  var lines = text.toString().split('\n');
  console.log(lines.length - 1);
});
