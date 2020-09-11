var fs = require('fs');
var mustache = require('mustache');

fs.readFile('./Server/server.mustache', function (err, data) {
    var view = {
        port: 8081
    };
    
    var output = mustache.render(data.toString(), view);

    fs.writeFileSync('./Server/server.js', output);
});