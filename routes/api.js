var express = require('express');
var fs = require('fs');
var movies = require('../database/database.js');
var actors = require('../database/database.js');
var directors = require('../database/database.js');
var genres = require('../database/database.js');
var router = express.Router();

//log api
router.use(function (req, res, next) {
    fs.appendFileSync("api-requests.txt", new Date().toLocaleString() + ' | ' + req.ip + ' : ' + req.url + " \n");
    next();
});

//rota get - Todos os filmes
router.get('/movies', function (req, res) {
    res.json(movies);
});

//rota get - Filmes por nome
router.get('/movies/:name([a-zA-Z]{3})', function (req, res) {
    var moviesAux = movies.filter(x => x.name.toLowerCase().includes(req.params.name.toLowerCase())); //com este padrão posso apanhar vários filmes que contenham as 3 letras no nome, por isso devo utilizar o filter para retornar o array de filmes encontrados
    if (moviesAux.length > 0)
        res.json(moviesAux);
    else
        res.status(400).send({
            message: "Não foram encontrados filmes com esse nome"
        });
});

//rota post - Inserir Filme
router.post('/movies', function (req, res) {
    movies.push(req.body);
    res.json(movies); //deveria se retornar apenas mensagem de sucesso mas serve para verem que se inseriu
});

//rota put - Atualizar Filme
router.put('/movies/:name', function (req, res) {
    var movie = movies.find(x => x.name === req.params.name); //name é suposto ser único por isso utilizo o find porque assumo que irá ser retornado apenas 1 filme
    if (movie) {
        movie.name = req.body.name;
        movie.sum = req.body.sum;
        movie.date = req.body.date;
        movie.genre = req.body.genre;
        movie.director = req.body.director;
        res.json(movie);
    }
    else
        res.status(400).send({
            message: "O Filme não existe"
        });
});

//rota delete - Remover Filme
router.delete('/movies/:name', function (req, res) {
    var i = movies.findIndex(x => x.name === req.params.name);
    if (i === -1)
        res.status(400).send({
            message: "O Filme não existe"
        });
    else {
        movies.splice(i, 1);
        res.send({
            message: "Filme removido com sucesso"
        });
    }
});


//rota get - Todos os Géneros
router.get('/genres', function (req, res) {
    res.json(genres);
});

//rota get - Géneros por nome
router.get('/genres/:name([a-zA-Z]{3})', function (req, res) {
    var genresAux = genres.filter(x => x.name.toLowerCase().includes(req.params.name.toLowerCase())); //com este padrão posso apanhar vários géneros que contenham as 3 letras no nome, por isso devo utilizar o filter para retornar o array de filmes encontrados
    if (genresAux.length > 0)
        res.json(genresAux);
    else
        res.status(400).send({
            message: "Não foram encontrados géneros com esse nome"
        });
});

//rota post - Inserir Género
router.post('/genres', function (req, res) {
    genres.push(req.body);
    res.json(genres); //deveria se retornar apenas mensagem de sucesso mas serve para verem que se inseriu
});

//rota put - Atualizar Género
router.put('/genres/:name', function (req, res) {
    var genre = genres.find(x => x.name === req.params.name); //name é suposto ser único por isso utilizo o find porque assumo que irá ser retornado apenas 1 género
    if (genre) {
        genre.name = req.body.name;
        genre.description = req.body.description;
        res.json(genre);
    }
    else
        res.status(400).send({
            message: "O Género não existe"
        });
});

//rota delete - Remover Género
router.delete('/genres/:name', function (req, res) {
    var i = genres.findIndex(x => x.name === req.params.name);
    if (i === -1)
        res.status(400).send({
            message: "O Género não existe"
        });
    else {
        genres.splice(i, 1);
        res.send({
            message: "Género removido com sucesso"
        });
    }
});


//rota get - Todos os atores
router.get('/actors', function (req, res) {
    res.json(actors);
});

//rota get - Atores por nome
router.get('/actors/:name([a-zA-Z]{3})', function (req, res) {
    var actorsAux = actors.filter(x => x.name.toLowerCase().includes(req.params.name.toLowerCase())); //com este padrão posso apanhar vários atores que contenham as 3 letras no nome, por isso devo utilizar o filter para retornar o array de filmes encontrados
    if (actorsAux.length > 0)
        res.json(actorsAux);
    else
        res.status(400).send({
            message: "Não foram encontrados atores com esse nome"
        });
});

//rota post - Inserir Ator
router.post('/actors', function (req, res) {
    actors.push(req.body);
    res.json(actors); //deveria se retornar apenas mensagem de sucesso mas serve para verem que se inseriu
});

//rota put - Atualizar Ator
router.put('/actors/:name', function (req, res) {
    var actor = actors.find(x => x.name === req.params.name); //name é suposto ser único por isso utilizo o find porque assumo que irá ser retornado apenas 1 ator
    if (actor) {
        actor.name = req.body.name;
        actor.age = req.body.age;
        actor.country = req.body.country;
        actor.sex = req.body.sex;
        res.json(actor);
    }
    else
        res.status(400).send({
            message: "O ator não existe"
        });
});

//rota delete - Remover Ator
router.delete('/actors/:name', function (req, res) {
    var i = actors.findIndex(x => x.name === req.params.name);
    if (i === -1)
        res.status(400).send({
            message: "O Ator não existe"
        });
    else {
        actors.splice(i, 1);
        res.send({
            message: "Ator removido com sucesso"
        });
    }
});


//rota get - Todos os diretores
router.get('/directors', function (req, res) {
    res.json(directors);
});

//rota get - Diretores por nome
router.get('/directors/:name([a-zA-Z]{3})', function (req, res) {
    var directorsAux = directors.filter(x => x.name.toLowerCase().includes(req.params.name.toLowerCase())); //com este padrão posso apanhar vários diretores que contenham as 3 letras no nome, por isso devo utilizar o filter para retornar o array de filmes encontrados
    if (directorsAux.length > 0)
        res.json(directorsAux);
    else
        res.status(400).send({
            message: "Não foram encontrados diretores com esse nome"
        });
});

//rota post - Inserir Diretor
router.post('/directors', function (req, res) {
    directors.push(req.body);
    res.json(directors); //deveria se retornar apenas mensagem de sucesso mas serve para verem que se inseriu
});

//rota put - Atualizar Diretor
router.put('/directors/:name', function (req, res) {
    var director = directors.find(x => x.name === req.params.name); //name é suposto ser único por isso utilizo o find porque assumo que irá ser retornado apenas 1 diretor
    if (director) {
        director.name = req.body.name;
        director.age = req.body.age;
        director.country = req.body.country;
        director.sex = req.body.sex;
        res.json(director);
    }
    else
        res.status(400).send({
            message: "O diretor não existe"
        });
});

//rota delete - Remover Diretor
router.delete('/directors/:name', function (req, res) {
    var i = directors.findIndex(x => x.name === req.params.name);
    if (i === -1)
        res.status(400).send({
            message: "O diretor não existe"
        });
    else {
        directors.splice(i, 1);
        res.send({
            message: "Diretor removido com sucesso"
        });
    }
});
module.exports = router;