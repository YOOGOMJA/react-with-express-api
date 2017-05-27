"use strict";

var express = require('express');
var router = express.Router();

var Board = require('../../db/models/board');

router.get("/" , function(req , res , next){
    console.log('API CALLED')
    Board.findAll()
    .then(function(data){
        console.log(data)
        //res.json({success : true , data : data});
        res.json({'success' : true , data : data});
    }, function(){
        res.json({success : false});
    })
})

router.get('/list', function(req, res, next){
    var _state = {};
    
    var _offset = 0 ;
    var _limit = 20;
    var _attr = [];
    
    if(Object.keys(req.query).indexOf('PAGE') >= 0 ){
        var _tmp = parseInt(req.query['PAGE']);
        _offset = isNaN(_tmp) ? 0 : (_tmp - 1) * _limit;
    }
    
    if(req.query['TYPE'] === "LIST"){
        _attr.push('Seq');
        _attr.push('Title');
        _attr.push('Writer');
        _attr.push('Date');
        _attr.push('View_count');
        _state['attributes'] = _attr;
    }
    
    if(req.query['SEARCH_KEYWORD'] && req.query['SEARCH_TYPE']){
        switch(req.query['SEARCH_TYPE'])
        {
            case 'TITLE' :
                _state['where'] = {
                    Title : {
                        $like : '%'+ req.query['SEARCH_KEYWORD'] +'%'
                    }
                } 
                break;
            case 'CONTENT' :
                _state['where'] = {
                    Content : {
                        $like : '%'+ req.query['SEARCH_KEYWORD'] +'%'
                    }
                } 
                break;
            case 'WRITER' : 
                _state['where'] = {
                    Writer : req.query['SEARCH_KEYWORD']
                } 
                break;
        }
        
    }
    
    _state['offset'] = _offset;
    _state['limit'] = _limit;

    Board.findAndCountAll(_state).then(function(result){
        result['limit'] = _limit;
        result['page'] = req.query['PAGE'];
        res.json(result);
    }, function(err){
        res.json(err);
    })
});

module.exports = router;