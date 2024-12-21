const express = require('express') ;
const product = require('../models/product.model') ;
const router = express.Router() ;
const {
    getProducts,
    getProduct,
    sendProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller');

router.get('/', getProducts) ; 
router.get('/:id',getProduct) ;
router.post('/',sendProduct) ;
router.put('/:id', updateProduct) ;
router.delete('/:id',deleteProduct) ;


module.exports = router ;