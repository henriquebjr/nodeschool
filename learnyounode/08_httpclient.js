var bl = require('bl'),
  http = require('http');

http.get(process.argv[2], function print(response){
  response.pipe(bl(function(err, data){
    if(err)
      console.error(err);
    console.log(data.toString().length)
    console.log(data.toString());
  }));
});
