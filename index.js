var express = require("express")
const app = express()

app.get('/',(req,res)=>{
    res.send("Homepage!!")
})
app.listen(5000,()=>{
    console.log("App running on port 5000")
})
app.get('*',(req,res)=>{
    res.send("Handle all the routes")
})