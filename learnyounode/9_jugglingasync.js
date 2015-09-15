var bl = require('bl'),
  http = require('http'),
  results = new Array(),
  cont = 0;

http.get(process.argv[2], function print(response){
  response.pipe(bl(function(err, data){
    if(err)
      console.error(err);
    results[0] = data.toString();
    printIfIsTheMoment(results);
  }));
});

http.get(process.argv[3], function print(response){
  response.pipe(bl(function(err, data){
    if(err)
      console.error(err);
    results[1] = data.toString();
    printIfIsTheMoment(results);
  }));
});

http.get(process.argv[4], function print(response){
  response.pipe(bl(function(err, data){
    if(err)
      console.error(err);
    results[2] = data.toString();
    printIfIsTheMoment(results);
  }));
});

function printIfIsTheMoment(results, pos){
  cont++;
  if(cont == 3)
    printAll(results);
}

function printAll(results, pos){
  results.forEach(function(result){
    console.log(result);
  });
}
