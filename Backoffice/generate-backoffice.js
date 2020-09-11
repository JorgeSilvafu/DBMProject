var fs = require('fs');
var mustache = require('mustache');
var config = require('../Server/config.json');

fs.readFile('./backoffice.mustache', function (err, data) {
    config.schemas.forEach((element) => {
        let view = {
            schemas: [
                {
                    title: element.name
                }
            ]
        }
        let output = mustache.render(data.toString(), view);    
        
        fs.writeFileSync(`../Publish/Controllers/backoffice-${element.name}.js`, output);
    });
});