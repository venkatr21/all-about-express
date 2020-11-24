const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.static('public'))
app.use('/static', express.static('public'))
app.use('/user',require('./routes/user'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const conn = mongoose.connection;
conn.once('open',()=>{
    console.log("Connected to mongoDB!");
})
app.get('/',(req,res)=>{
    res.send("GET / Express powered github profile counter app")
})
app.listen(5000,()=>{
    console.log("App running on port 5000")
})