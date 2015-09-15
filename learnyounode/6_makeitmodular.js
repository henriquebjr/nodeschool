var mymodule = require('./6_module');

function print(err, list){
  list.forEach(function(item){
    console.log(item);
  });
}

var result = mymodule(process.argv[2], process.argv[3], print);
