const { createServer } = require('http');
const express = require('express'); // responsavel get, post delete
const dotenv = require('dotenv'); // responsavel por carregar as variaveis de ambiente
const bodyParser = require('body-parser'); // responsavel por pegar os dados do corpo da requisicao

dotenv.config(); // carrega as variaveis de ambiente
// let app = express(); // criacao de servidor express
// const http = createServer(app); // criacao de servidor http

// //toda vez que o servidor receber uma requisicao, para json
// app.use(bodyParser.json()); // para pegar os dados do corpo da requisicao

const app = require('./config/router-factory');
const app = createServer(app);



// call back é uma funcao que executa após um determinado evendo acontecer ( se tiver algum erro apresenta no console o erro)
process.on('SIGINT', () => http.close((error => {
    if(error){
        console.log(`${error.name}: ${error.message}`);
    }
    process.exit(error ? 1 : 0);
})));


http.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`)); // servidor ouvindo na porta 3000
