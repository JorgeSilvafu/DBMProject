var fs = require('fs');
var mustache = require('mustache');

fs.readFile('./server/server.mustache', function (err, data) {
    var view = {
        port: 8081
    };
    var output = mustache.render(data.toString(), view);
    console.log(output);
    fs.writeFile('./server/server.js', output);
});