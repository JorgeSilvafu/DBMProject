var mustache = require('mustache');
const schemaMovie = require('../schemas/Schema-Movie.json');
const schemaDirector = require('../schemas/Schema-Director.json');

let templateOneToMany = 
`
ALTER TABLE {{tableName}} ADD COLUMN {{relatedTableNameLowerCase}}_{{primaryKey}} INTEGER REFERENCES {{relatedTableName}}({{primaryKey}});
`

let templateManyToMany =
`
CREATE TABLE IF NOT EXISTS {{tableNameFirst}}_{{tableNameSecond}} (
    {{columnNameFirstLowerCase}}_{{primaryKey}} INTEGER PRIMARY KEY,
    {{columnNameSecondLowerCase}}_{{primaryKey}} INTEGER PRIMARY KEY,
    FOREIGN KEY {{tableNameFirstLowerCase}}_{{primaryKey}} REFERENCES {{tableNameFirst}}({{primaryKey}}),
    FOREIGN KEY {{tableNameSecondLowerCase}}_{{primaryKey}} REFERENCES {{tableNameSecond}}({{primaryKey}}),
)
`

let viewOneToMany = {
    tableName: schemaMovie.title,
    primaryKey: "id",
    relatedTableNameLowerCase: schemaMovie.references[0].model.toLowerCase(),
    relatedTableName: schemaMovie.references[0].model
}
let outputOneToMany = mustache.render(templateOneToMany, viewOneToMany);

let viewManyToMany = {
    tableNameFirst: schemaMovie.title,
    tableNameSecond: schemaDirector.title,
    tableNameFirstLowerCase: schemaMovie.title.toLowerCase(),
    tableNameSecondLowerCase: schemaDirector.title.toLowerCase(),
    primaryKey: "id"    
}
let outputManyToMany = mustache.render(templateManyToMany, viewManyToMany);