const express=require('express');
var cors=require('cors');
var router=express.Router();
var data=[];
var singleProduct=['hello'];
var mysql=require('mysql');

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

var connection=mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'nodeSQL',
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect((err)=>{
  if(err) throw err;
  console.log('connected');
});

var indexProducts=connection.query("SELECT NPRO as id, LIBELLE as nom, QSTOCK as stock, PRIX as prix from PRODUIT",(err,rows,fields)=>{
  if(err) throw err;
  for(i=0;i<rows.length;i++){
    var row=rows[i];
    data.push(row);
  }
});

// function show(id){
//
//   connection.query("SELECT LIBELLE as nom, PRIX as prix, QSTOCK as stock from Produit where NPRO="+id,(err,rows,fields)=>{
//     if(err) throw err;
//      var row=rows[0];
//     singleProduct.push(row);
//      console.log(singleProduct[0]);
//   })
//
// }
//show(1);

router.get('/',cors(corsOptions),(req,res)=>res.send(data));
router.get('/:id',(req,res)=>{
  connection.query("SELECT LIBELLE as nom, PRIX as prix, QSTOCK as stock from Produit where NPRO="+req.params.id,(err,rows,fields)=>{
    if(err) throw err;
     var row=rows[0];
     console.log(row);
    singleProduct[0]=row;
    res.send(singleProduct);
  })
});

module.exports=router;
