"use strict";

var express = require('express');
var router = express.Router();

var ACCOUNT = require('../../db/models/account');

router.get("/list" , function(req , res , next){
    console.log('API CALLED')
    ACCOUNT.findAll()
    .then(function(data){
        console.log(data)
        //res.json({success : true , data : data});
        res.json({'success' : true , data : data});
    }, function(){
        res.json({success : false});
    })
})

module.exports = router;