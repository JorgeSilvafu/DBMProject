var express = require('express');
var fs = require('fs');
var alunos = require('../database/database.js');
var router = express.Router();


//log api
router.use(function (req, res, next) {
    fs.appendFileSync("api-requests.txt", new Date().toLocaleString() + ' | ' + req.ip + ' : ' + req.url + " \n");
    next();
});

//rota get - Aluno por numero
router.get('/alunos/:numero([0-9]{8})', function (req, res) {
    var aluno = alunos.find(x => x.numero === req.params.numero);
    if (aluno)
        res.json(aluno);
    else
        res.status(400).send({
            message: "O Aluno não existe"
        });
});