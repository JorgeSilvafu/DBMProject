var express = require('express');
var router = express.Router();

var Genre = require('../models/Genre.js');

router.post('/Genre', function (req, res) {
    let obj = Object.assign(new Genre(), req.body);
    obj.save(msg => res.json(msg));
});

router.get('/Genre', function (req, res) {
    Genre.all(rows => res.json(rows));
});

router.get('/Genre/:id', function (req, res) {
    var GenreAux = Genre.find(x => x.id === req.params.id); 
    if (GenreAux) {
        GenreAux.get(msg => res.json(msg));
    }
    else{
        res.status(400).send({
            message: "Não foi encontrado nenhum Genre com esse id"
        });
    }
});

router.put('/Genre/:id', function (req, res) {
    let obj = Object.assign(new Genre(), req.body);
    if (obj) {
        obj.save(msg => res.json(msg));
    }
    else {
        res.status(400).send({
            message: "O Genre não existe"
        });
    }
});

router.delete('/Genre/:id', function (req, res) {
    var GenreAux = Genre.findIndex(x => x.id === req.params.id);
    if (GenreAux === -1){
        res.status(400).send({
            message: "O Genre não existe"
        });
    }
    else {
        GenreAux.delete(msg => res.json(msg));
    }
});

module.exports = router;
