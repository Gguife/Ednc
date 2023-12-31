const express = require("express");
const router = express.Router();
//Controllers
const ClientController = require("../controllers/clientController")
const CategoryController = require("../controllers/categoryController");
const ProductController = require("../controllers/productController");

//Client
router.post("/newClient", ClientController.newClient);
router.get("/clients", ClientController.allClientsList);
router.get("/client/:id", ClientController.clientList);
router.put("/update/client/:id", ClientController.updateClient);
router.delete("/delete/client/:id", ClientController.deleteClient);

//Categories
router.post("/newCategory", CategoryController.newCategory);
router.get("/categories", CategoryController.allCategories);
router.get("/category/:id", CategoryController.listCategory);
router.put("/update/category/:id", CategoryController.updateCategory);
router.delete("/delete/category/:id", CategoryController.deleteCategory);

//Products
router.post("/newProduct", ProductController.newProduct);
router.get("/products", ProductController.allProductsList);
router.get("/product/:id", ProductController.productList);
router.put("/update/product/:id", ProductController.updateProduct);
router.delete("/delete/product/:id", ProductController.deleteProduct);


module.exports = router;