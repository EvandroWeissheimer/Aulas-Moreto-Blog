const db = require('../../../../config/databases');

module.exports = { /// quais vão ser os ambientes que o sequelizer usaria esse informação vai ser referenciado no .venv
    development : {
        ...db.blog // traz o objeto para o mesmo nivel sem estar comprimido ele vai estar dentro da estrutura do database do config trazendo as informações como se foose dele 
    },
    homolog : {
        ...db.blog
    },
    production : {
        ...db.blog
    }
}