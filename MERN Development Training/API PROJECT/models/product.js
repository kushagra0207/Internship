const mongoose = require("mongoose");

// Schema structure


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,

    },
    price: {
        type: Number,
        required: [true, " Price bharo"],


    },
    featured: {
        type: Boolean,
        default: false,

    },


    rating : {
        type: Number,
        default: 4.9,
    },


    // createdAt : {
    //     type: Date.now(),
    // },


    // company: {
    //     type: String,
    //     enum: {
    //         values: ["apple","samsung","dell","Kushagra"],
    //         message: `{VALUE} is not supported`,

    //     }

        company: {
            type: String,
            required : false,
    
        },
    },
);


module.exports = mongoose.model("Product", productSchema);

// 