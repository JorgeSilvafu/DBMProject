const express = require('express');
var router = express.Router();

var Director = require('../models/Director.js');

router.get('/Director', (req,res) => {
    Director.all((rows) => {
        res.render('list', {
            title : 'Director',
            columns: Object.keys(new Director()),
            rows: rows.map(obj => {
                return{
                    properties: Object.keys(obj).map(key => obj[key])
                }
                
            })
        })
    })
})

module.exports = router;
