var express = require('express');
var router = express.Router();



var Movie = require('../Models/Movie.js');

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


var Genre = require('../Models/Genre.js');

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