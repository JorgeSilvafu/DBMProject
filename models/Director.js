const database = require('../database/sqlite-wrapper.js')('../database/cinema.db');
const schema = require("./Schema-Director.json");
const jsf = require('json-schema-faker');
const faker = require('faker');
jsf.extend('faker', () => { return faker });

class Director {
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
        return Object.assign(new Director(), jsf.generate(schema));
    }

    static all(callback) {
        database.where("SELECT * FROM Director", [], Director, callback);
    }

    static get(callback) {
        database.get("SELECT * FROM Director WHERE id = ?", [id], Director, callback);
    }

    static delete(callback) {
        database.run("DELETE FROM Director WHERE id = ?", [id], callback);
    }

    save(callback) {
        if(this.id)
            database.run("UPDATE Director SET name = ?,age = ?,country = ?,sex = ? WHERE id = ?", [this.name,this.age,this.country,this.sex], callback);
        else
            database.run("INSERT INTO Director (name,age,country,sex) VALUES (?,?,?,?)", [this.name,this.age,this.country,this.sex], callback);        
    }
}

module.exports = Director;