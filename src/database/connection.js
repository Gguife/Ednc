const knex = require("knex")({
  client: "mysql2",
  connection:{
    host: "localhost",
    user: "root",
    password: "7470",
    database: "Ednc"
  }
});

module.exports = knex;