var fs = require('fs');
var path = require('path');

function filterEntry(data) {
  if(path.extname(data) == '.' + process.argv[3])
    console.log(data);
}

function filterDir(err, data) {
  if(err)
    console.error(err);

  data.forEach(filterEntry);
}

fs.readdir(process.argv[2], filterDir);
