// console.log('Oi') // aparece no terminal

// "npm init -y" para criar o "package.json"

// "npm install" para adicionar as dependências

// IMPORTANDO DEPENDÊNCIAS

const express = require('express') // chama as dependências
const path = require('path');
const pages = require('./pages.js') // chama o objeto para cá

// iniciando o express
const server = express() // se torna uma função

server
    // utilizar o body do req
    .use(express.urlencoded({ extended: true }))

    // utilizando os aquivos estátivos
    .use(express.static('public')) // cria todos as rotas para o "public". Mas precisamos alterar os caminho => tirar o public

    // confiugurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // CRIANDO UMA ROTA

    // antes de adicionar o templete engine
    /* .get('/', (req, res) => {
    return res.send('Oi') // => aparece no terminal
    return res.sendFile(path.join(__dirname, 'views', 'index.html')) // manda os aquivos o diretório para o server
    } */

    // com tamplate engine
    /* .get('/', (req, res) => {
            // // enviar variáveis para o html
            // const name = "Lucas"
            // return res.render('index', { name })
            // // para usar é só colocar => "{{ name }}"

            // para alterar o nome da cidade de maneira dinâmica
            const city = req.query.city
            return res.render('index', { city })
            // para adicionar o request => "/?city=Divinópolis" 
    }) */

    // com tamplate engine e modulos
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage) // não pode ter traçoes => use CamelCase
    .post('/save-orphanage', pages.saveOrphanage)

// LIGAR O SERVIDOR
server.listen(5500)

// abre o terminal
// digita: "npm install -g npm"
// mas para salvar as alterações precisa de reniciar o servidor => intale o "npm install nodemon"
// altere no "packge.json" a linha do "test" para "start": "nodemon src/server.js" (não pode ter comentários)