var mustache = require('mustache');
var schema = require('./models/director.json')

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


var props = Object.keys(schema.properties);      //["name", "age", "country", "sex"];

var classConstructor = [];
props.forEach(function (el) {
    classConstructor.push({name: el});
})

var view = {
    classTitle: schema.title,  //"Director",
    constructorArguments: props.join(),
    classConstructor: classConstructor,
    classEnumerables:[{name: "country"}, {name: "sex"}]
};

var output = mustache.render(template, view);

console.log(output);