var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var goods = require('../models/goods');

// mongoose.connect('mongodb://localhost/shop');
mongoose.connect('mongodb://47.93.231.75/shop');

mongoose.connection.on('connected',function(){
  console.log("mongodb connected sucssess");
})

mongoose.connection.on('error',function(){
  console.log("mongodb connected error");
})

mongoose.connection.on('disconnected',function(){
  console.log("mongodb connected disconnected");
})


router.get('/list',function(req,res,next){
  goods.find({},function(err,doc){
    res.json({status:"1",msg:'',result:doc})
  })
})


module.exports = router;