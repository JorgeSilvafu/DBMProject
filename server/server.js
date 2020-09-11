var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const backoffice = require('./backoffice/backoffice.js');
var mustacheExpress = require('mustache-express');

//Faz o parse dos pedidos com content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

//Responder aos clientes para as rotas não previstas no servidor
app.get('*', function (req, res) {
    res.send('Erro, URL inválido.');
});

var server = app.listen(8081, function () {
    var host = server.address().address === "::" ? "localhost" : server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});