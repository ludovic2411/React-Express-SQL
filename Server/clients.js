const express=require('express');
var router=express.Router();
var data=[];
var cors = require('cors')
var mysql=require('mysql');
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

var indexProducts=connection.query("SELECT NCLI as id, NOM as nom, CAT as cat from CLIENT",(err,rows,fields)=>{
  if(err) throw err;
  for(i=0;i<rows.length;i++){
    var row=rows[i];
    data.push(row);
  }
});

connection.end()

router.get('/',cors(),(req,res)=>res.send(data));
router.get('/:id',(req,res)=>res.send(req.params));

module.exports=router
