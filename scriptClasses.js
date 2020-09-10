var fs = require('fs');
var mustache = require('mustache');
var schemaDirector = require('./models/Schema-Director.json');
var schemaActor = require('./models/Schema-Actor.json');
var schemaMovie = require('./models/Schema-Movie.json');
var schemaGenre = require('./models/Schema-Genre.json');

var template =
    `
const database = require('./database/sqlite-wrapper.js')('./database/{{dbname}}');
const jsf = require('json-schema-faker')
const faker = require('faker');
const schema = require("./models/Schema-{{classTitle}}.json");
jsf.extend('faker', () => { return faker });

class {{classTitle}} {
    constructor ({{constructorArguments}}) { 
        {{#classConstructor}}
        this.{{name}} = {{name}}; 
        {{/classConstructor}} 
        {{#classEnumerables}} 
        Object.defineProperty(this,"{{name}}", { enumerable: false }); 
        {{/classEnumerables}}
        Object.defineProperty(this,"{{primaryKey}}", { enumerable: false, writable: true });
    }

    static create() {
        return Object.assign(new {{classTitle}}(), jsf.generate(schema));
    }

    static all(callback) {
        database.where("SELECT * FROM {{tableName}}", [], {{classTitle}}, callback);
    }

    static get(callback) {
        database.get("SELECT * FROM {{tableName}} WHERE {{primaryKey}} = ?", [{{primaryKey}}], {{tableName}}, callback);
    }

    static delete(callback) {
        database.run("DELETE FROM {{tableName}} WHERE {{primaryKey}} = ?", [{{primaryKey}}], callback));
    }

    save(callback) {
        if(this.{{primaryKey}})
            database.run("UPDATE {{tableName}} SET {{{valuesParams}}} WHERE {{primaryKey}} = ?", [{{thisPropreties}}], callback);
        else
            database.run("INSERT INTO {{tableName}} ({{columns}}) VALUES ({{valuesParams}})", [{{thisPropreties}}], callback);        
    }
}

module.exports = {{classTitle}};
`;


//Generate class Director
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
    dbname: 'cinema.db',
    primaryKey: 'id',
    tableName: schemaDirector.title,
    columns: Object.keys(schemaDirector.properties).join(),
    valuesParams: classConstructorDirector.map(obj => '?').join(),
    thisPropreties: classConstructorDirector.map(obj => 'this.' + obj.name).join()
};
var outputDirector = mustache.render(template, viewDirector);
fs.writeFileSync(`./${schemaDirector.title}.js`, outputDirector);


//Generate class Actor
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
    dbname: 'cinema.db',
    primaryKey: 'id',
    tableName: schemaActor.title,
    columns: Object.keys(schemaActor.properties).join(),
    valuesParams: classConstructorActor.map(obj => '?').join(),
    thisPropreties: classConstructorActor.map(obj => 'this.' + obj.name).join(),
};
var outputActor = mustache.render(template, viewActor);
fs.writeFileSync(`./${schemaActor.title}.js`, outputActor);


//Generate class Movie
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
    dbname: 'cinema.db',
    primaryKey: 'id',
    tableName: schemaMovie.title,
    columns: Object.keys(schemaMovie.properties).join(),
    valuesParams: classConstructorMovie.map(obj => '?').join(),
    thisPropreties: classConstructorMovie.map(obj => 'this.' + obj.name).join(),
};
var outputMovie = mustache.render(template, viewMovie);
fs.writeFileSync(`./${schemaMovie.title}.js`, outputMovie);


//Generate class Genre
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
    dbname: 'cinema.db',
    primaryKey: 'id',
    tableName: schemaGenre.title,
    columns: Object.keys(schemaGenre.properties).join(),
    valuesParams: classConstructorGenre.map(obj => '?').join(),
    thisPropreties: classConstructorGenre.map(obj => 'this.' + obj.name).join(),
};
var outputGenre = mustache.render(template, viewGenre);
fs.writeFileSync(`./${schemaGenre.title}.js`, outputGenre);