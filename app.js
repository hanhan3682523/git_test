﻿var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
var pug = require("pug");

app.set("views", "./views");
app.set("view engine", "pug");

app.listen(port);

console.log('imooc started on port ' + port);

//index page
app.get('/', function (req,res) {
    res.render( 'index',{
        title:'韩学剑'
    })
});