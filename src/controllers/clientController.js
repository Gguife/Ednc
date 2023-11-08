const database = require("../database/connection");

class ClientController {
  //POST
  newClient(req, res){
    try{
      const { name, email, password, phoneNumber, state, city, cpf } = req.body;

      console.log({name, email, password, phoneNumber, state, city, cpf});

      database.insert({name, email, password, phoneNumber, state, city, cpf}).table("clients").then(data =>{
        console.log(data);
        res.json({message: "Cliente criado com sucesso!"});
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao criar um novo cliente."})
    }
  }

  //GET
  allClientsList(){

  }
  //Retonar um client específico
  clientList(){

  }

}

module.exports = new ClientController;