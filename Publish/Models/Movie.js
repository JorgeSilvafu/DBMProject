const database = require('../../database/sqlite-wrapper.js')('../../Database/cinema.db');
const schema = require("../../schemas/Schema-Movie.json");
const jsf = require('json-schema-faker');
const faker = require('faker');
jsf.extend('faker', () => { return faker });

class Movie {
    constructor (name,sum,date,genre,director) { 
        this.name = name; 
        this.sum = sum; 
        this.date = date; 
        this.genre = genre; 
        this.director = director; 
        Object.defineProperty(this,"sum", { enumerable: false }); 
        Object.defineProperty(this,"genre", { enumerable: false }); 
        Object.defineProperty(this,"director", { enumerable: false }); 
        Object.defineProperty(this,"id", { enumerable: false, writable: true });
    }

    static create() {
        return Object.assign(new Movie(), jsf.generate(schema));
    }

    static all(callback) {
        database.where("SELECT * FROM Movie", [], Movie, callback);
    }

    static get(callback) {
        database.get("SELECT * FROM Movie WHERE id = ?", [id], Movie, callback);
    }

    static delete(callback) {
        database.run("DELETE FROM Movie WHERE id = ?", [id], callback);
    }

    save(callback) {
        if(this.id)
            database.run("UPDATE Movie SET name = ?,sum = ?,date = ?,genre = ?,director = ? WHERE id = ?", [this.name,this.sum,this.date,this.genre,this.director], callback);
        else
            database.run("INSERT INTO Movie (name,sum,date,genre,director) VALUES (?,?,?,?,?)", [this.name,this.sum,this.date,this.genre,this.director], callback);        
    }
}

module.exports = Movie;