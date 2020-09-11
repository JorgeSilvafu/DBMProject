var express = require('express');
var router = express.Router();

var Movie = require('../models/Movie.js');

router.post('/Movie', function (req, res) {
    let obj = Object.assign(new Movie(), req.body);
    obj.save(msg => res.json(msg));
});

router.get('/Movie', function (req, res) {
    Movie.all(rows => res.json(rows));
});

router.get('/Movie/:id', function (req, res) {
    var MovieAux = Movie.find(x => x.id === req.params.id); 
    if (MovieAux) {
        MovieAux.get(msg => res.json(msg));
    }
    else{
        res.status(400).send({
            message: "Não foi encontrado nenhum Movie com esse id"
        });
    }
});

router.put('/Movie/:id', function (req, res) {
    let obj = Object.assign(new Movie(), req.body);
    if (obj) {
        obj.save(msg => res.json(msg));
    }
    else {
        res.status(400).send({
            message: "O Movie não existe"
        });
    }
});

router.delete('/Movie/:id', function (req, res) {
    var MovieAux = Movie.findIndex(x => x.id === req.params.id);
    if (MovieAux === -1){
        res.status(400).send({
            message: "O Movie não existe"
        });
    }
    else {
        MovieAux.delete(msg => res.json(msg));
    }
});

module.exports = router;
