var http = require('http');

http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/html'});
  response.end('<h1>hell</h1>');
}).listen(3333,function(){
  console.log("run");
})