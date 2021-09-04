// load the express module
let express = require('express');

// This is used to create the router reference which will help to route to controller function based upon the sub path. This router becomes a central hub for all the requests.
let router = express.Router();
let productController = require('../controller/product.controller');

// getAllProducts is a sub path
router.get("/getAllProducts", productController.getAllProductDetails); // This is used to get all the product details.

router.post("/storeProduct", productController.storedProductDetails); 
router.delete("/deleteProduct/:pid". productController.deleteProductDetails);
router.put("/updateProduct", productController.updateProductDetails);

// exporting the module 
module.exports = router;