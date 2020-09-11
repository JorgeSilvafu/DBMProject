var fs = require('fs');
var mustache = require('mustache');

let templateBackOffice =
`const express = require('express');
var router = express.Router();

{{#schemas}}
var {{title}} = require('../models/{{title}}.js');

router.get('/{{title}}', (req,res) => {
    {{title}}.all((rows) => {
        res.render('list', {
            title : '{{title}}',
            columns: Object.keys(new {{title}}()),
            rows: rows.map(obj => {
                return{
                    properties: Object.keys(obj).map(key => obj[key])
                }
                
            })
        })
    })
})
{{/schemas}}

module.exports = router;
`

let view = {
    schemas: [
        {
            title: "Director"
        }
    ]
}

let output = mustache.render(templateBackOffice, view);
fs.writeFileSync('./backoffice.js', output);