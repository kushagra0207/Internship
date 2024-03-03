const Product = require("../models/product");

const getAllProducts  = async (req,res)=>{
    const myData = await Product.find({});
    res.status(200).json({myData});
}

const getAllProductsTesting = async(req,res)=>{
    const mydatas = await Product.find(req.query) // used for get query in the url key value pair ( query sign ? ) Get request used for searching sorting and filteration with pagination

    // const mysecond = await Product.find({name : "iphone"});
    res.status(200).json({mydatas});
    // res.status(200).json({msg:"I am by controller and in getAllProducts testing"})
}




module.exports = { getAllProducts, getAllProductsTesting};