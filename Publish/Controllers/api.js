var express = require('express');
var router = express.Router();

var [object Object],[object Object],[object Object],[object Object] = require('../Models/[object Object],[object Object],[object Object],[object Object].js');

router.post('/[object Object],[object Object],[object Object],[object Object]', function (req, res) {
    let obj = Object.assign(new [object Object],[object Object],[object Object],[object Object](), req.body);
    obj.save(msg => res.json(msg));
});

router.get('/[object Object],[object Object],[object Object],[object Object]', function (req, res) {
    [object Object],[object Object],[object Object],[object Object].all(rows => res.json(rows));
});

router.get('/[object Object],[object Object],[object Object],[object Object]/:id', function (req, res) {
    var [object Object],[object Object],[object Object],[object Object]Aux = [object Object],[object Object],[object Object],[object Object].find(x => x.id === req.params.id); 
    if ([object Object],[object Object],[object Object],[object Object]Aux) {
        [object Object],[object Object],[object Object],[object Object]Aux.get(msg => res.json(msg));
    }
    else{
        res.status(400).send({
            message: "Não foi encontrado nenhum [object Object],[object Object],[object Object],[object Object] com esse id"
        });
    }
});

router.put('/[object Object],[object Object],[object Object],[object Object]/:id', function (req, res) {
    let obj = Object.assign(new [object Object],[object Object],[object Object],[object Object](), req.body);
    if (obj) {
        obj.save(msg => res.json(msg));
    }
    else {
        res.status(400).send({
            message: "O [object Object],[object Object],[object Object],[object Object] não existe"
        });
    }
});

router.delete('/[object Object],[object Object],[object Object],[object Object]/:id', function (req, res) {
    var [object Object],[object Object],[object Object],[object Object]Aux = [object Object],[object Object],[object Object],[object Object].findIndex(x => x.id === req.params.id);
    if ([object Object],[object Object],[object Object],[object Object]Aux === -1){
        res.status(400).send({
            message: "O [object Object],[object Object],[object Object],[object Object] não existe"
        });
    }
    else {
        [object Object],[object Object],[object Object],[object Object]Aux.delete(msg => res.json(msg));
    }
});

module.exports = router;
