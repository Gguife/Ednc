const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(3000, () => {console.log(`Funcionando na porta ${PORT}`)});

app.get("/", (req, res) =>{
  res.send("Hellow world!");
})