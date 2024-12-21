const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

        name : { 
            type : String,
            required : [true , "Please Enter a product name"]
        },

        quantity : {
            type : Number ,
            required : [true , 0 ]
        },
        price : {
            type : Number,
            required : [true , "Please Enter the Price"] 
        }
    
    },
    {
        timestaps : true  
    }
) ;

const product = mongoose.model("Product", productSchema );
module.exports = product ;
