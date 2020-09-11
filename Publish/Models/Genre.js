const database = require('../../database/sqlite-wrapper.js')('../../Database/cinema.db');
const schema = require("../../schemas/Schema-Genre.json");
const jsf = require('json-schema-faker');
const faker = require('faker');
jsf.extend('faker', () => { return faker });

class Genre {
    constructor (name,description) { 
        this.name = name; 
        this.description = description; 
        Object.defineProperty(this,"description", { enumerable: false }); 
        Object.defineProperty(this,"id", { enumerable: false, writable: true });
    }

    static create() {
        return Object.assign(new Genre(), jsf.generate(schema));
    }

    static all(callback) {
        database.where("SELECT * FROM Genre", [], Genre, callback);
    }

    static get(callback) {
        database.get("SELECT * FROM Genre WHERE id = ?", [id], Genre, callback);
    }

    static delete(callback) {
        database.run("DELETE FROM Genre WHERE id = ?", [id], callback);
    }

    save(callback) {
        if(this.id)
            database.run("UPDATE Genre SET name = ?,description = ? WHERE id = ?", [this.name,this.description], callback);
        else
            database.run("INSERT INTO Genre (name,description) VALUES (?,?)", [this.name,this.description], callback);        
    }
}

module.exports = Genre;