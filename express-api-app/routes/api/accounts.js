"use strict";

var express = require('express');
var router = express.Router();

var ACCOUNT = require('../../db/models/account');

router.get("/list" , function(req , res , next){
    ACCOUNT.findAll()
    .then(function(data){
        res.json({success : true , data : data});
    }, function(){
        res.json({success : false});
    })
})

module.exports = router;