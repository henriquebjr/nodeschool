var fs = require('fs');
var path = require('path');

var extname;
var callme;
var filtereds = new Array();

function filterDir(dir, ext, callback){
  extname = ext;
  callme = callback;
  fs.readdir(dir, filter);
}

function filterEntry(data) {
  if(path.extname(data) == '.' + extname)
    filtereds.push(data);
}

function filter(err, list){
  if(err)
    return callme(err);

  list.forEach(filterEntry);
  return callme(null, filtereds);
}

module.exports = filterDir;
