const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message : "Product Lists..."
    });
});

router.post('/',(req,res,next)=>{
    const product = {
        name : req.body.name,
        price : req.body.price
    }
    res.status(200).json({
        message : "Product added...",
        product : product
    });
});

router.get('/:productID',(req,res,next)=>{
    const id = req.params.productID;
    if(id == 'special'){
        res.status(200).json({
            message : `You choose special product`
        });
    }
    else{
        res.status(200).json({
            message : `You choose ${id} product `
        })
    }
});

router.put('/',(req,res,next)=>{
    res.status(200).json({
        message : "Product updated..."
    });
});

router.delete("/",(req,res,next)=>{
    res.status(200).json({
        message : "Product deleted..."
    })
})
module.exports = router;