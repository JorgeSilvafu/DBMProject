var fs = require('fs');

module.exports = JSON.parse(fs.readFileSync('./database/alunos.json'));

//Tem de mudar a diretoria