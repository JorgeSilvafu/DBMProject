const database = require('../database/sqlite-wrapper.js')('../database/cinema.db');
const schema = require("../schemas/Schema-Actor.json");
const jsf = require('json-schema-faker');
const faker = require('faker');
jsf.extend('faker', () => { return faker });

class Actor {
    constructor (name,age,country,sex) { 
        this.name = name; 
        this.age = age; 
        this.country = country; 
        this.sex = sex; 
        Object.defineProperty(this,"country", { enumerable: false }); 
        Object.defineProperty(this,"sex", { enumerable: false }); 
        Object.defineProperty(this,"id", { enumerable: false, writable: true });
    }

    static create() {
        return Object.assign(new Actor(), jsf.generate(schema));
    }

    static all(callback) {
        database.where("SELECT * FROM Actor", [], Actor, callback);
    }

    static get(callback) {
        database.get("SELECT * FROM Actor WHERE id = ?", [id], Actor, callback);
    }

    static delete(callback) {
        database.run("DELETE FROM Actor WHERE id = ?", [id], callback);
    }

    save(callback) {
        if(this.id)
            database.run("UPDATE Actor SET name = ?,age = ?,country = ?,sex = ? WHERE id = ?", [this.name,this.age,this.country,this.sex], callback);
        else
            database.run("INSERT INTO Actor (name,age,country,sex) VALUES (?,?,?,?)", [this.name,this.age,this.country,this.sex], callback);        
    }
}

module.exports = Actor;