var fs = require('fs');
var mustache = require('mustache');
var config = require('../../Server/config.json');

fs.readFile('./api.mustache', function (err, data) {
    config.schemas.forEach((element) => {
        let view = {
            schemas: [
                {
                    name: element.name
                }
            ]
        }
        let output = mustache.render(data.toString(), view);    
        
        fs.writeFileSync(`./api-${element.name}.js`, output);
    });
});