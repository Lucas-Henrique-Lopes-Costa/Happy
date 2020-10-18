const Database = require("./db");

const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
  /* // inserir dados da tabela
  await saveOrphanage(db, {
    lat: "-20.1476988",
    lng: "-44.882739",
    name: "Lar das Meninas",
    about:
      "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "+553732211338",
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    images: [
      "https://i.ytimg.com/vi/--bvf6XGeA0/maxresdefault.jpg",

      "https://divinews.com/wp-content/uploads/2019/12/IMG_7550.jpg",

      "https://i.ytimg.com/vi/Kpgv4BXKEjU/maxresdefault.jpg"
    ].toString(),
    opening_hours: "Horário de visitas Das 18h até 8h",
    open_on_weekends: "1",
  }); */

  /* // deletar dado da tabelas
  console.log(await db.run('DELETE FROM orphanages WHERE id = "1"')); */

  /* //deletar tudo
  console.log(await db.run('DELETE FROM orphanages')); */

  // para zerar o número de ids você tem que deletar o "database.sqlite"

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages"); // seleciona todas as linhas e colunas da tabela orphanages
  console.log(selectedOrphanages);

  /* // consultar somente 1 orfanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages where id = "6"');
  console.log(orphanage); */
});