const knex = require("knex")({
  client: "mysql",
  connection:{
    host: "localhost",
    user: "root",
    password: "7470",
    database: "Ednc"
  }
});

module.exports = knex;