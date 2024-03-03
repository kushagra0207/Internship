

require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("../thapaApi/db/connect"); // it will return new promise
const PORT = process.env.PORT || 5000;
const product_routes = require("./routes/products");
//  routes ki file products ko require kra hai abh use ham product_routes se usee krwngw



app.get("/", (req, res) => {

    res.send("Ji, I am Kushagra and I am live");
});

app.use("/api/products", product_routes);



const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
         console.log(`${PORT} I am connected`);
        });

    }
    catch (error) {

        console.log(error);
    }
}

start();



