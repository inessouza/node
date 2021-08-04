var http = require("http");

http.createServer(function (requisicao, resposta) {
    resposta.end("<h1>Hello World!</h1>")
}).listen(8181);
console.log("Servidor Online!")