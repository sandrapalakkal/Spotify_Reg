const express = require("express");
const app = express();
const AuthRoute=require("./routes/home.js");
const LoginRoute=require("./routes/login.js");
const RegisterRoute=require("./routes/reg.js")

app.use(express.json());
app.use("/",AuthRoute);
app.use("/home",LoginRoute);
app.use("/home",RegisterRoute);


//app.get("/",(req,res)=>{
 //   res.send("Ok");
//})
//app.post("/",(req,res)=>{
 //   res.send(req.body);
//})
//const AuthRoute=require("./routes/auth.js")
//app.use("/",AuthRoute);
app.listen(5000,()=>{
    console.log("Server running at port 5000");
})

