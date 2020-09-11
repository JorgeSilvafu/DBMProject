var express = require('express');
var router = express.Router();

var Actor = require('../Models/Actor.js');

router.post('/Actor', function (req, res) {
    let obj = Object.assign(new Actor(), req.body);
    obj.save(msg => res.json(msg));
});

router.get('/Actor', function (req, res) {
    Actor.all(rows => res.json(rows));
});

router.get('/Actor/:id', function (req, res) {
    var ActorAux = Actor.find(x => x.id === req.params.id); 
    if (ActorAux) {
        ActorAux.get(msg => res.json(msg));
    }
    else{
        res.status(400).send({
            message: "Não foi encontrado nenhum Actor com esse id"
        });
    }
});

router.put('/Actor/:id', function (req, res) {
    let obj = Object.assign(new Actor(), req.body);
    if (obj) {
        obj.save(msg => res.json(msg));
    }
    else {
        res.status(400).send({
            message: "O Actor não existe"
        });
    }
});

router.delete('/Actor/:id', function (req, res) {
    var ActorAux = Actor.findIndex(x => x.id === req.params.id);
    if (ActorAux === -1){
        res.status(400).send({
            message: "O Actor não existe"
        });
    }
    else {
        ActorAux.delete(msg => res.json(msg));
    }
});

module.exports = router;
