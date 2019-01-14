const express=require ('express');
const app=express();
const port=4000;
var clients=require('./clients');
var products=require('./products');
var orders=require('./orders');


//page principale
app.route('/').get((req,res)=>res.send('Main page'));

app.use('/clients',clients);
app.use('/products',products);
app.use('/orders',orders);

app.listen(port,()=>console.log('Server running on port'+port))
