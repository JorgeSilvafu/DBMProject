var fs = require('fs');
var mustache = require('mustache');
var config = require('../../Server/config.json');
var schemaDirector = require('../../schemas/Schema-Director.json');
var schemaActor = require('../../schemas/Schema-Actor.json');
var schemaMovie = require('../../schemas/Schema-Movie.json');
var schemaGenre = require('../../schemas/Schema-Genre.json');

//Generate class Director
fs.readFile('./classes.mustache', function (err, data) {
    var classConstructorDirector = [];
    var classEnumerablesDirector = [];
    Object.keys(schemaDirector.properties).forEach((element, i, aux) => {
        classConstructorDirector.push({
            name: element
        });
        if (!schemaDirector.required.find((el) => el === element))
            classEnumerablesDirector.push({
                name: element
            });
    });
    var viewDirector = {
        classTitle: schemaDirector.title,
        constructorArguments: Object.keys(schemaDirector.properties).join(),
        classConstructor: classConstructorDirector,
        classEnumerables: classEnumerablesDirector,
        dbname: config.database.name,
        primaryKey: 'id',
        tableName: schemaDirector.title,
        columns: Object.keys(schemaDirector.properties).join(),
        valuesParams: classConstructorDirector.map(obj => '?').join(),
        thisPropreties: classConstructorDirector.map(obj => 'this.' + obj.name).join(),
        updateValuesParams: classConstructorDirector.map(obj => obj.name + ' = ?').join()
    };
    var outputDirector = mustache.render(data.toString(), viewDirector);
    fs.writeFileSync(`./${schemaDirector.title}.js`, outputDirector);
});


//Generate class Actor
fs.readFile('./classes.mustache', function (err, data) {
    var classConstructorActor = [];
    var classEnumerablesActor = [];
    Object.keys(schemaActor.properties).forEach((element, i, aux) => {
        classConstructorActor.push({
            name: element
        });
        if (!schemaActor.required.find((el) => el === element))
            classEnumerablesActor.push({
                name: element
            });
    });
    var viewActor = {
        classTitle: schemaActor.title,
        constructorArguments: Object.keys(schemaActor.properties).join(),
        classConstructor: classConstructorActor,
        classEnumerables: classEnumerablesActor,
        dbname: config.database.name,
        primaryKey: 'id',
        tableName: schemaActor.title,
        columns: Object.keys(schemaActor.properties).join(),
        valuesParams: classConstructorActor.map(obj => '?').join(),
        thisPropreties: classConstructorActor.map(obj => 'this.' + obj.name).join(),
        updateValuesParams: classConstructorActor.map(obj => obj.name + ' = ?').join()
    };
    var outputActor = mustache.render(data.toString(), viewActor);
    fs.writeFileSync(`./${schemaActor.title}.js`, outputActor);
});

//Generate class Movie
fs.readFile('./classes.mustache', function (err, data) {
    var classConstructorMovie = [];
    var classEnumerablesMovie = [];
    Object.keys(schemaMovie.properties).forEach((element, i, aux) => {
        classConstructorMovie.push({
            name: element
        });
        if (!schemaMovie.required.find((el) => el === element))
            classEnumerablesMovie.push({
                name: element
            });
    });
    var viewMovie = {
        classTitle: schemaMovie.title,
        constructorArguments: Object.keys(schemaMovie.properties).join(),
        classConstructor: classConstructorMovie,
        classEnumerables: classEnumerablesMovie,
        dbname: config.database.name,
        primaryKey: 'id',
        tableName: schemaMovie.title,
        columns: Object.keys(schemaMovie.properties).join(),
        valuesParams: classConstructorMovie.map(obj => '?').join(),
        thisPropreties: classConstructorMovie.map(obj => 'this.' + obj.name).join(),
        updateValuesParams: classConstructorMovie.map(obj => obj.name + ' = ?').join()
    };
    var outputMovie = mustache.render(data.toString(), viewMovie);
    fs.writeFileSync(`./${schemaMovie.title}.js`, outputMovie);
});

//Generate class Genre
fs.readFile('./classes.mustache', function (err, data) {
    var classConstructorGenre = [];
    var classEnumerablesGenre = [];
    Object.keys(schemaGenre.properties).forEach((element, i, aux) => {
        classConstructorGenre.push({
            name: element
        });
        if (!schemaGenre.required.find((el) => el === element))
            classEnumerablesGenre.push({
                name: element
            });
    });
    var viewGenre = {
        classTitle: schemaGenre.title,
        constructorArguments: Object.keys(schemaGenre.properties).join(),
        classConstructor: classConstructorGenre,
        classEnumerables: classEnumerablesGenre,
        dbname: config.database.name,
        primaryKey: 'id',
        tableName: schemaGenre.title,
        columns: Object.keys(schemaGenre.properties).join(),
        valuesParams: classConstructorGenre.map(obj => '?').join(),
        thisPropreties: classConstructorGenre.map(obj => 'this.' + obj.name).join(),
        updateValuesParams: classConstructorGenre.map(obj => obj.name + ' = ?').join()
    };
    var outputGenre = mustache.render(data.toString(), viewGenre);
    fs.writeFileSync(`./${schemaGenre.title}.js`, outputGenre);
});