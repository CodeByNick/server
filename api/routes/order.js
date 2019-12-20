const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message : "Order Lists..."
    });
});

router.post('/',(req,res,next)=>{
    const orders= {
        orderID : req.body.orderID,
        loc : req.body.loc
    };
    res.status(201).json({
        message : "Order added...",
        orders : orders
    });
});

router.get('/:orderID',(req,res,next)=>{
    const id = req.params.orderID;
    res.status(200).json({
        message : `Order ID : ${id} added....`
    });
});


router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message : "Order deleted..."
    });
});

module.exports = router;