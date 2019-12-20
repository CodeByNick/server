const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

// receives data in url encoded format
app.use(bodyParser.urlencoded({
    extended : false
})
);
//  receives data in json format
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if(req.method === 'OPTIONS')
        {
            res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,PATCH,DELETE');
            return res.status(200).json({});
        }
        next(error);
});

app.use((req,res,next)=>{
    const err = new Error('Page not found!');
    err.status = 404;
    next(err);
});

// app.use((error,req,res,next),()=>{
//     res.status(error.status || 500);
//     res.json({
//         error : {
//             message : error.message
//         }
//     });
// });
module.exports = app;