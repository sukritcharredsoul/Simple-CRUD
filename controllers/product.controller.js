const product = require('../models/product.model')

const getProducts =  async (req,res) => {
    try {
        const Products = await product.find({}) ;
        res.status(200).json(Products) ;
    } catch (error) {
        res.status(500).json({message : "Error Message "})
    }
} ;

const getProduct = async (req,res) => {
    try {
        const { id } = req.params ;
        const Product = await product.findById(id) ;
        res.status(200).json(Product) ;
    } catch (error) {
        res.status(500).json({message : "Error no fetching data. "})
    }
};

const sendProduct = async(req,res) => {
    try {
        const newProduct = await product.create(req.body)
        res.status(200).json(newProduct) ;
    } catch (error) { 
        
        console.log("Error Detected") ;
        res.status(500).json({"message": "Error detected"}) ;

    }
};

const updateProduct = async (req,res) => {
    try {
        const { id } = req.params ;
        const Product = await product.findByIdAndUpdate(id,req.body)    ;
        
        if(!Product){
            return res.status(404).json({"Error": "NO update FOund"})
        } ;

        const updatedProuct = await product.findById(id) ;
        res.sendStatus(200).json(updatedProuct) ;

    } catch (error) {
        res.sendStatus(500).json({"Error":"Error in the data updation ."})
    }
};


const deleteProduct = async (req,res) => {
    try {
        const {id} = req.params ;
        const deleted = await product.findByIdAndDelete(id) ;

        if(!deleted){
            res.sendStatus(404).json({"Error": "Didn't Find Any Product with the specificed ID"}) ;
        }

        res.sendStatus(200).json({"Success": `Deleted Product ${id} Successfully`}) ;
    } catch (error) {
        res.sendStatus(500).json({"Error": "Couldn't Delete the Product"}) ;
    }
};



module.exports = {
    getProducts ,
    getProduct ,
    sendProduct,
    updateProduct,
    deleteProduct
} ;