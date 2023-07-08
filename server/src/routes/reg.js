const express = require("express");

const routerRegister= express.Router();

routerRegister.post("/register",(req,res)=>{
  res.send("This is Register Page");
  console.log(req.body);
});

module.exports=routerRegister;