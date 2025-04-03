const express = require('express');
const routes = require('./router-files.js');
const path = require('path');

let app = express()

/**
 * Define os cabeçalhos em comum em todos as requires, os quais impedem  erros relacionados aos CORS policy
 */

app.use((_, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', '*');
    res.setHeader('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Acess-Control-Allow-Headers', 'Content-Type');
    next();
})


app.use(express.json);
app.use(express.urlencoded({extend: tru}));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

routes.forEach(filename => app.use(require(filename)));

app.get('/',(_, res) => res.send('<h1>Resposta</h1>'));

app.set('view wngine', 'ejs');
app.set('views', '.');

module.exports = app;

