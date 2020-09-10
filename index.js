const express = require('express');
const bodyParser = require('body-parser');
const api = require('./controllers/api.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


var urls = [];

app.use(function (req, res, next) {
    if (urls[req.url]) {
        urls[req.url] += 1;
    } else {
        urls[req.url] = 1;
    }
    console.log(urls);
    next();
});


app.use('/api', api);

app.get('*', function (req, res) {
    res.send('Erro, URL inválido.');
});

var server = app.listen(8081, function () {
    var host = server.address().address === "::" ? "localhost" : server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
});