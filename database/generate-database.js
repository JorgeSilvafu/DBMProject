var mustache = require('mustache');
const sqlite3 = require('sqlite3').verbose();
const schemaDirector = require('../models/Director.json');
const schemaActor = require('../models/Actor.json');
const schemaMovie = require('../models/Movie.json');
const schemaGenre = require('../models/Genre.json');

//Criação do template
let template = `
CREATE TABLE IF NOT EXISTS {{tableName}} (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    {{#tableColumns}}
    {{name}} {{type}} {{required}} {{unique}} {{constraint}}{{#needComma}},{{/needComma}}
    {{/tableColumns}}
)
ALTER TABLE {{tableName}} ADD COLUMN {{relatedTableNameLowerCase}}_{{primaryKey}} INTEGER REFERENCES {{relatedTableName}}({{primaryKey}});
`;

//Conversão de tipos
let types = {
    integer: "INTEGER",
    number: "REAL",
    string: "TEXT"
};

//Director
let arrayDirector = [];
Object.keys(schemaDirector.properties).forEach((element, i, aux) => {
    arrayDirector.push({
        name: element,
        type: types[schemaDirector.properties[element].type],
        required: schemaDirector.required.find((el) => {
            return element === el;
        }) ? "NOT NULL" : "",
        unique: "", //Incompleto
        constraint: "", //Incompleto
        needComma: i !== aux.length - 1
    });
});
let viewDirector = {
    tableName: schemaDirector.title,
    tableColumns: arrayDirector
};
let outputDirector = mustache.render(template, viewDirector);

//Actor
let arrayActor = [];
Object.keys(schemaActor.properties).forEach((element, i, aux) => {
    arrayActor.push({
        name: element,
        type: types[schemaActor.properties[element].type],
        required: schemaActor.required.find((el) => {
            return element === el;
        }) ? "NOT NULL" : "",
        unique: "", //Incompleto
        constraint: "", //Incompleto
        needComma: i !== aux.length - 1
    });
});
let viewActor = {
    tableName: schemaActor.title,
    tableColumns: arrayActor
};
let outputActor = mustache.render(template, viewActor);

//Filme
let arrayMovie = [];
Object.keys(schemaMovie.properties).forEach((element, i, aux) => {
    arrayMovie.push({
        name: element,
        type: types[schemaMovie.properties[element].type],
        required: schemaMovie.required.find((el) => {
            return element === el;
        }) ? "NOT NULL" : "",
        unique: "", //Incompleto
        constraint: "", //Incompleto
        needComma: i !== aux.length - 1
    });
});
let viewMovie = {
    tableName: schemaMovie.title,
    tableColumns: arrayMovie,
    relatedTableNameLowerCase: schemaMovie.references.forEach().model,
    primaryKey: 'id',
    relatedTableName: 
};
let outputMovie = mustache.render(template, viewMovie);

//Género
let arrayGenre = [];
Object.keys(schemaGenre.properties).forEach((element, i, aux) => {
    arrayGenre.push({
        name: element,
        type: types[schemaGenre.properties[element].type],
        required: schemaGenre.required.find((el) => {
            return element === el;
        }) ? "NOT NULL" : "",
        unique: "", //Incompleto
        constraint: "", //Incompleto
        needComma: i !== aux.length - 1
    });
});
let viewGenre = {
    tableName: schemaGenre.title,
    tableColumns: arrayGenre
};
let outputGenre = mustache.render(template, viewGenre);


//Conexão à base de dados
let db = new sqlite3.Database('cinema.db', function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Conexão à base de dados realizada com sucesso.');
});

//Criação das tabelas da base de dados
db.serialize(() => {
    db.run(outputDirector);
    db.run(outputActor);
    db.run(outputMovie);
    db.run(outputGenre);
});

//Desconexão à base de dados
db.close(function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Encerrada a conexão à base de dados.')
});