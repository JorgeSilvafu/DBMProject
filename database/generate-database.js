var mustache = require('mustache');
const sqlite3 = require('sqlite3').verbose();
const schemaDirector = require('../.vscode/Schema-Director.json');
const schemaActor = require('../.vscode/Schema-Actor.json');
const schemaMovie = require('../.vscode/Schema-Movie.json');
const schemaGenre = require('../.vscode/Schema-Genre.json');

//Criação do template
let template = `
CREATE TABLE IF NOT EXISTS {{tableName}} (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    {{#tableColumns}}
    {{name}} {{type}} {{required}} {{unique}} {{constraint}}{{#needComma}},{{/needComma}}
    {{/tableColumns}}
)
`;

//Conversão de tipos
let types = {
    integer: "INTEGER",
    number: "REAL",
    string: "TEXT"
};

//Director
let columnsDirector = [];
Object.keys(schemaDirector.properties).forEach((element, i, aux) => {
    columnsDirector.push({
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
    tableColumns: columnsDirector
};
let outputDirector = mustache.render(template, viewDirector);

//Actor
let columnsActor = [];
Object.keys(schemaActor.properties).forEach((element, i, aux) => {
    columnsActor.push({
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
    tableColumns: columnsActor
};
let outputActor = mustache.render(template, viewActor);

//Filme
let columnsMovie = [];
Object.keys(schemaMovie.properties).forEach((element, i, aux) => {
    columnsMovie.push({
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
    tableColumns: columnsMovie
};
let outputMovie = mustache.render(template, viewMovie);

//Género
let columnsGenre = [];
Object.keys(schemaGenre.properties).forEach((element, i, aux) => {
    columnsGenre.push({
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
    tableColumns: columnsGenre
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