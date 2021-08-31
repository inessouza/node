const express = require("express"); // importando o express
const app = express(); // iniciando o express e passando a inicialização para a variável express

app.get("/", function(req, res) {
    res.send("Seja bem vindo!")
});

app.get("/blog", function(req, res) {
    res.send("<h1>Seja bem vindo ao Blog!</h1>")
});

app.get("/ola/:nome/:empresa", function(req, res) {
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>")

});

app.listen(4000, function(erro){
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})
