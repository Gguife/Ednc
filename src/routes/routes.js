const express = require("express");
const router = express.Router();
//Controllers
const ClientController = require("../controllers/clientController")
const CategoryController = require("../controllers/categoryController");

//Client
router.post("/newClient", ClientController.newClient);


//Categories
router.post("/newCategory", CategoryController.newCategory);
router.get("/categories", CategoryController.allCategories);
router.get("/category/:id", CategoryController.listCategory);
router.put("/update/category/:id", CategoryController.updateCategory);
router.delete("/delete/category/:id", CategoryController.deleteCategory);



module.exports = router;