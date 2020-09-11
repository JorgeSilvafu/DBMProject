const express = require('express');
var router = express.Router();

var Movie = require('../models/Movie.js');

router.get('/Movie', (req,res) => {
    Movie.all((rows) => {
        res.render('list', {
            title : 'Movie',
            columns: Object.keys(new Movie()),
            rows: rows.map(obj => {
                return{
                    properties: Object.keys(obj).map(key => obj[key])
                }
                
            })
        })
    })
})

module.exports = router;