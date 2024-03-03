const mongoose = require("mongoose");
// const uri = "mongodb+srv://kushagraguptafzd01:JOwW5D7d3ZW5cyRZ@cluster0.w7xmwm7.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = (uri)=>{

    console.log("Hi Kushagra please trust god, they will help u");
    return mongoose.connect(uri,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    });
}

module.exports = connectDB;