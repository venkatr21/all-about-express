const express = require("express");
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));
app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.listen(5000,()=>{
    console.log("App running on port 5000")
})
app.get('*',(req,res)=>{
    res.send("Handle all the routes")
})