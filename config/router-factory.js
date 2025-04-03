const express = require('express');
const routes = require('./router-files.js');
const path = require('path');

let app = express();

/**
 * Define os cabeçalhos comuns para evitar erros de CORS
 */
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static(path.join(__dirname, 'public/images')));

routes.forEach(filename => app.use(require(filename)));

app.get('/', (_, res) => res.send('<h1>Resposta</h1>'));

app.set('view engine', 'ejs'); // Corrigido
app.set('views', '.');

module.exports = app;
