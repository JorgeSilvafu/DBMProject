var fs = require('fs');
var mustache = require('mustache');
var config = require('../Server/config.json');

let arr = [];

fs.readFile('./backoffice.mustache', function (err, data) {
    config.schemas.forEach((element) => {
        arr.push(element.name);
    });
    let view = {
        schemas: [
            {
                title: arr[0]
            },
            {
                title: arr[1]
            },
            {
                title: arr[2]
            },
            {
                title: arr[3]
            }
        ]
    }
    let output = mustache.render(data.toString(), view);

    fs.writeFileSync(`../Publish/Controllers/backoffice.js`, output);
});