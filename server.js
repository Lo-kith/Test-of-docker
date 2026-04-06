const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.get("/get",(req,res)=>{
    res.send("Hello World");
})

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})