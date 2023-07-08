const express = require("express");

const routerLogin= express.Router();

routerLogin.post("/login",(req,res)=>{
  res.send("This is Login Page");
  console.log(req.body);
});

module.exports=routerLogin;