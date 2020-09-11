var fs = require('fs');
var mustache = require('mustache');

var template =
`var express = require('express');
var router = express.Router();

{{#schemas}}
var {{name}} = require('../models/{{name}}.js');

router.post('/{{name}}', function (req, res) {
    let obj = Object.assign(new {{name}}(), req.body);
    obj.save(msg => res.json(msg));
});

router.get('/{{name}}', function (req, res) {
    {{name}}.all(rows => res.json(rows));
});

router.get('/{{name}}/:id', function (req, res) {
    var {{name}}Aux = {{name}}.find(x => x.id === req.params.id); 
    if ({{name}}Aux) {
        {{name}}Aux.get(msg => res.json(msg));
    }
    else{
        res.status(400).send({
            message: "Não foi encontrado nenhum {{name}} com esse id"
        });
    }
});

router.put('/{{name}}/:id', function (req, res) {
    let obj = Object.assign(new {{name}}(), req.body);
    if (obj) {
        obj.save(msg => res.json(msg));
    }
    else {
        res.status(400).send({
            message: "O {{name}} não existe"
        });
    }
});

router.delete('/{{name}}/:id', function (req, res) {
    var {{name}}Aux = {{name}}.findIndex(x => x.id === req.params.id);
    if ({{name}}Aux === -1){
        res.status(400).send({
            message: "O {{name}} não existe"
        });
    }
    else {
        {{name}}Aux.delete(msg => res.json(msg));
    }
});

module.exports = router;
{{/schemas}}`;

let arr = ["Director", "Actor", "Movie", "Genre"];

arr.forEach((element)  => {
    let view = {
        schemas: [
            {
                name: element //Tem de se ir buscar o name aos schemas do config.json
            }
        ]
    }
    let output = mustache.render(template, view);    
    
    fs.writeFileSync(`./api-${element}.js`, output);
});