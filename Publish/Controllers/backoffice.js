const express = require('express');
var router = express.Router();

var Movie = require('../Models/Movie.js');

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
var Genre = require('../Models/Genre.js');

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
var Actor = require('../Models/Actor.js');

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
var Director = require('../Models/Director.js');

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