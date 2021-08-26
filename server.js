let http = require("http");
let fs   = require("fs");

function iniciar() {
  function onRequest(request, response) {
    console.log("Petición Recibida.");

    if(request.url == "/index"){

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Mundo");
        response.end();
    }else{
         fs.readFile("./404/no-found.html", function(error,html){
            response.write(html);
            response.end();
        })
    }
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
