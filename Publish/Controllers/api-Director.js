var express = require('express');
var router = express.Router();

var Director = require('../Models/Director.js');

router.post('/Director', function (req, res) {
    let obj = Object.assign(new Director(), req.body);
    obj.save(msg => res.json(msg));
});

router.get('/Director', function (req, res) {
    Director.all(rows => res.json(rows));
});

router.get('/Director/:id', function (req, res) {
    var DirectorAux = Director.find(x => x.id === req.params.id); 
    if (DirectorAux) {
        DirectorAux.get(msg => res.json(msg));
    }
    else{
        res.status(400).send({
            message: "Não foi encontrado nenhum Director com esse id"
        });
    }
});

router.put('/Director/:id', function (req, res) {
    let obj = Object.assign(new Director(), req.body);
    if (obj) {
        obj.save(msg => res.json(msg));
    }
    else {
        res.status(400).send({
            message: "O Director não existe"
        });
    }
});

router.delete('/Director/:id', function (req, res) {
    var DirectorAux = Director.findIndex(x => x.id === req.params.id);
    if (DirectorAux === -1){
        res.status(400).send({
            message: "O Director não existe"
        });
    }
    else {
        DirectorAux.delete(msg => res.json(msg));
    }
});

module.exports = router;
