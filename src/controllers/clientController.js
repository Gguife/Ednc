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
  allClientsList(req, res){
    try{
      database.select("*").table("clients").then(client => {
        console.log(client);
        res.json(client);
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao listar todos os clientes."})
    }
  }
  //Retonar um client específico
  clientList(req, res){
    try{
      const id = req.params.id;

      database.select("*").table("clients").where({id:id}).then(client =>{
        res.json(client);
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao exibir o cliente."})
    }
  }

  //PUT
  updateClient(req, res){
    try{
      const id = req.params.id;
      const updates = {};

      if(req.body.email){
        updates.email = req.body.email;
      }
      if(req.body.password){
        updates.password = req.body.password;
      }
      if(req.body.phoneNumber){
        updates.phoneNumber = req.body.phoneNumber;
      }
      if(Object.keys(updates) === 0){
        return res.status(400).json({message: "Nenhuma informação para atualizar."})
      }

      database.where({id:id}).update(updates).table("clients").then(data =>{
        res.json({message: "Informações do cliente atualizadas com sucesso!"})
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao atualizar cliente."})
    }
  }

  //DELETE
  deleteClient(req, res){
    try{
      const id = req.params.id;

      database.where({id:id}).del().table("clients").then(data =>{
        res.json({message: "Cliente removido com sucesso!"})
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao deletar cliente."})
    }
  }
}

module.exports = new ClientController;