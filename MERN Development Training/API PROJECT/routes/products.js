
const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductsTesting} = require("../controllers/products")

router.route("/").get(getAllProducts);  
// Yaha se ham controller ke pass jate hai aur controller is function ko sambhalega

router.route("/testing").get(getAllProductsTesting);  
// ager me testing per jaunga toh me getAllProductsTesting function per jaega control


module.exports = router;