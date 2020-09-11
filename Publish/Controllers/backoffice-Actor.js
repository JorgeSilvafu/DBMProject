const express = require('express');
var router = express.Router();

var Actor = require('../models/Actor.js');

router.get('/Actor', (req,res) => {
    Actor.all((rows) => {
        res.render('list', {
            title : 'Actor',
            columns: Object.keys(new Actor()),
            rows: rows.map(obj => {
                return{
                    properties: Object.keys(obj).map(key => obj[key])
                }
                
            })
        })
    })
})

module.exports = router;