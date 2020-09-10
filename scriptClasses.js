var mustache = require('mustache');
var schemaDirector = require('./models/director.json')
var schemaActor = require('./models/actor.json')
var schemaMovie = require('./models/movie.json')
var schemaGenre = require('./models/genre.json')

var template = `class {{classTitle}} {
    constructor ({{constructorArguments}}) { 
        {{#classConstructor}}
        this.{{name}} = {{name}}; 
        {{/classConstructor}} 
        {{#classEnumerables}} 
        Object.defineProperty(this,"{{name}}", {enumerable: false}); 
        {{/classEnumerables}}
        }
        }`

var propsDirector = Object.keys(schemaDirector.properties); //["name", "age", "country", "sex"]
var propsActor = Object.keys(schemaActor.properties);      //["name", "age", "country", "sex"];
var propsMovie = Object.keys(schemaMovie.properties);      //["name", "age", "country", "sex"];
var propsGenre = Object.keys(schemaGenre.properties);      //["name", "age", "country", "sex"];

var classConstructorDirector = [];
propsDirector.forEach(function (el) {
    classConstructorDirector.push({name: el});
})
var classConstructorActor = [];
propsActor.forEach(function (el) {
    classConstructorActor.push({name: el});
})
var classConstructorMovie = [];
propsMovie.forEach(function (el) {
    classConstructorMovie.push({name: el});
})
var classConstructorGenre = [];
propsGenre.forEach(function (el) {
    classConstructorGenre.push({name: el});
})

var viewDirector = {
    classTitle: schemaDirector.title,
    constructorArguments: propsDirector.join(),
    classConstructor: classConstructorDirector,
    classEnumerables:[{name: "country"}, {name: "sex"}]
};
var outputDirector = mustache.render(template, viewDirector);

var viewActor = {
    classTitle: schemaActor.title,
    constructorArguments: propsActor.join(),
    classConstructor: classConstructorActor,
    classEnumerables:[{name: "country"}, {name: "sex"}]
};
var outputActor = mustache.render(template, viewActor);

var viewMovie = {
    classTitle: schemaMovie.title,
    constructorArguments: propsMovie.join(),
    classConstructor: classConstructorMovie,
    classEnumerables:[{name: "sum"}, {name: "genre"}, {name: "director"}]
};
var outputMovie = mustache.render(template, viewMovie);

var viewGenre = {
    classTitle: schemaGenre.title,
    constructorArguments: propsGenre.join(),
    classConstructor: classConstructorGenre,
    classEnumerables:[{name: "description"}]
};
var outputGenre = mustache.render(template, viewGenre);