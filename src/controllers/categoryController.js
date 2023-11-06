const knex = require("../database/connection");

class CategoryController {
  async newCategory(req, res){
    try{
      const categoryName  = req.body.categoryName;

      //Usando knex para inserir dados na tabela
      await knex("categories").insert({categoryName});

      res.json({message: "Categoria criada com sucesso!"});
    }
    catch(error){
      console.log(error);
      res.status(500).json({message: "Erro ao criar categoria"})
    }
  }
}

module.exports = new CategoryController;