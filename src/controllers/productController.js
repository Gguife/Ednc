const database = require("../database/connection");

class ProductController {
  //POST
  newProduct(req, res){
    try{
      const {name, description, price} = req.body;
    
      console.log({name, description, price});

      database.insert({name, description, price}).table("products").then(data => {
        console.log(data);
        res.json({message: "Produto criado com sucesso!"});
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao criar um novo produto."})
    }
  } 

  //GET
  allProductsList(req, res){
    try{
      database.select("*").table("products").then(products => {
        console.log(products);
        res.json(products);
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao listar todos os produtos."})
    }
  }
  productList(req, res){
    try{
      const id = req.params.id;

      database.select("*").table("products").where({id:id}).then(product => {
        res.json(product);
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao exibir o produto."})
    }
  }

  //PUT
  updateProduct(){
    try{
      const id = req.params.id;
      const updates = {};

      if(req.body.name){
        updates.name = req.body.name;
      }
      if(req.body.description){
        updates.description = req.body.description;
      }
      if(req.body.price){
        updates.price = req.body.price;
      }
      if(Object.keys(updates) === 0){
        return res.status(400).json({message: "Nenhuma informação para atualizar."})
      }

      database.where({id:id}).update(updates).table("products").then(data =>{
        res.json({message: "Informações do cliente atualizadas com sucesso!"})
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao atualizar produto."})
    }
  }

  //DELETE  
  deleteProduct(){
    try{
      const id = req.params.id;

      database.where({id:id}).del().table("products").then(data => {
        res.json({message: "Produto removido com sucesso!"})
      })    
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao deletar produto."})
    }
  }
}

module.exports = new ProductController;



//name
//description
//price