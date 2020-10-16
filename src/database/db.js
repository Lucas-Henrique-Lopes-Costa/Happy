const Database = require('sqlite-async'); // importando o qlite-async

function execute(db) { // abrindo uma tabela se não existir
    // console.log('Entrei nessa Função')

    // abrindo uma tabela se não existir
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)

    // Dentro do parênteses tem cada colula da tabela
    // id INTEGER PRIMARY KEY AUTO_INCREMENT =>  "id INTEGER" cria um número inteiro | "PRIMARY KEY" será a chave daquela tabela | quando começar a rodar o código ele cria um novo número "AUTOINCREMENT" (1, 2, 3...)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
// indo para o diretório do banco de dados => db