const express = require('express');
var router = express.Router();

var Genre = require('../models/Genre.js');

router.get('/Genre', (req,res) => {
    Genre.all((rows) => {
        res.render('list', {
            title : 'Genre',
            columns: Object.keys(new Genre()),
            rows: rows.map(obj => {
                return{
                    properties: Object.keys(obj).map(key => obj[key])
                }
                
            })
        })
    })
})

module.exports = router;