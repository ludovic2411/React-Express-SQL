var express=require('express');
var router=express.Router();

router.get('/',(req,res)=>res.send('get all orders'));
router.get('/:id',(req,res)=>res.send(req.params));

module.exports=router;
