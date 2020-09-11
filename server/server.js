var express = require('express');
var bodyParser = require('body-parser');
var backoffice = require('../Publish/Controllers/backoffice.js');
var api = require('../Publish/Controllers/api.js');
var mustacheExpress = require('mustache-express');

//Faz o parse dos pedidos com content-type - application/json
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../Public' + '/public'));

//Utilização do módulo mustache-express
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', '../Publish/Views', '/Views');

//Responder aos clientes para as rotas não previstas no servidor
app.get('*', function (req, res) {
    res.send('Erro, URL inválido.');
});

//Responder aos clientes para as rotas previstas
app.use('/backoffice', backoffice);
app.use('/api', api);

//Inicialização do servidor na port 8081
var server = app.listen(8081, function () {
    var host = server.address().address === "::" ? "localhost" : server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});