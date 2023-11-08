const connection = require("../database/connection");
const express = require("express");
//Controllers
const CategoryController = require("../controllers/categoryController");

const router = express.Router();

//Categories
router.post("/newCategory", CategoryController.newCategory);
router.get("/categories", CategoryController.allCategories);
router.get("/category/:id", CategoryController.listCategory);
router.put("/update/category/:id", CategoryController.updateCategory);
router.delete("/delete/category/:id", CategoryController.deleteCategory);


module.exports = router;