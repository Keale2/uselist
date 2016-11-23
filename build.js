var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');


Metalsmith(__dirname)
    .source('./src')
    .destination('./dest')
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        directory: 'templates'
    }))
    .build(function (err) {
        // For error handling
        if (err) {
            throw err;
        }
    });