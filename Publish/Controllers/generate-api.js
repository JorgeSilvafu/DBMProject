var fs = require('fs');
var mustache = require('mustache');
var config = require('../../Server/config.json');

let arr = [];

fs.readFile('./api.mustache', function (err, data) {
    config.schemas.forEach((element) => {
        arr.push(element.name);
    });
    let view = {
        schemas: [
            {
                name: arr[0]
            },
            {
                name: arr[1]
            },
            {
                name: arr[2]
            },
            {
                name: arr[3]
            }
        ]
    }
    let output = mustache.render(data.toString(), view);

    fs.writeFileSync(`./api.js`, output);
});