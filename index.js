const express=require("express")
require('dotenv').config()

const app=express()

app.use("/blogs",(req,res)=>{
    res.send(`blogs of ${process.env.NAME}`)
})
app.use("/",(req,res)=>{
    res.send("Basic end point")
})

app.listen(process.env.PORT,()=>{
console.log(`listening on ${process.env.PORT}`)
})