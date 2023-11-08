const database = require("../database/connection");

class CategoryController {
  //POST
  newCategory(req, res){
    try{
      const name = req.body;

      console.log(name);

      database.insert(name).table("categories").then(data=>{
        console.log(data);
        res.json({message: "Categoria adicionada com sucesso!"});
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao criar categoria."})
    }
  }
  
  //GET
  allCategories(req, res){
    try{
      database.select("*").table("categories").then(category =>{
        console.log(category);
        res.json(category);
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao listar todas as categorias."})
    }
  }
  //Exibir categoria selecionada
  listCategory(req, res){
    try{
      const id = req.params.id;
 
      database.select("*").table("categories").where({id:id}).then(category =>{
        res.json(category);
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao listar a categoria pedida."})
    }
  }

  //PUT
  updateCategory(req, res){
    try{
      const id = req.params.id;
      const name = req.body.name;

      database.where({id:id}).update({name:name}).table("categories").then(data =>{
        res.json({message: "Nome alterado com sucesso!"});
      })
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao atualizar categoria."})
    }
  }
  //DELETE
  deleteCategory(req, res){
    try{
      const id = req.params.id; 

      database.where({id:id}).del().table("categories").then(data =>{
        res.json({message: "Categoria removida com sucesso!"});
      })

    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao remover categoria."})
    }
  }

}



module.exports = new CategoryController;