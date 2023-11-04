const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(3000, () => {console.log(`Funcionando na porta ${PORT}`)});