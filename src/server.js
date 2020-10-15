// console.log('Oi') // aparece no terminal

// "npm init -y" para criar o "package.json"

// "npm install" para adicionar as dependências

// IMPORTANDO DEPENDÊNCIAS

const express =  require('express') // chama as dependências
const path = require('path');

const server = express() // se torna uma função => inicia o express

// CRIANDO UMA ROTA
server.get('/', (request, response) => {
    // return response.send('Oi')
    console.log(path.join(__dirname, 'views'))
    return response.sendFile(__dirname)
})

// LIGAR O SERVIDOR
server.listen(5500)

    // abre o terminal
    // digita: "npm install -g npm"
    // mas para salvar as alterações precisa de reniciar o servidor => intale o "npm install nodemon"
    // altere no "packge.json" a linha do "test" para "start": "nodemon src/server.js" (não pode ter comentários)
