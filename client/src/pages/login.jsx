import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const  Container=styled.div`
background-color:  #007399;
margin:0;
border:0;
display: flex;
.container1{
    width: 400px;
    height:500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    margin-left: 420px;
    margin-top: 50px;
    margin-bottom: 50px
}
.heading{
    font-size: 25px;
    text-align: center;
    color: #585858;
}
.loginform{
    flex-wrap: wrap;
    margin-bottom: 10px;
    line-height: 40px;
    padding: 30px; 
    color: rgb(37, 49, 49);  
}
.button-secondary {
    background-color: #007399;
    text-align: center;
    color:white;
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border:none;
    
}
input{
    width: 100%;
    display:inline-block;
    height: 30px;    
}
input[type=checkbox]{
    float: left;
    margin: 5px;
    margin-top: 15px;
    width: 10px;
    height: 10px;
}
.footer h4{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
}
.footer a{
    color: #007399;
    text-decoration: none;   
}
.hover h4{
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.hover a{
    color: #007399;
    text-decoration: none;  
}
@media (max-width: 768px) {
    .container1 {
      width: 100%;
      margin-left: 10%;
      margin-right: 5%;
      margin-top: 50px;
    }

    .loginform {
      padding: 20px;
      line-height: 30px;
    }
  }
`;

const login = () => {
    const[value,setValue]=useState(0);
    useEffect(() => {
    console.log(value);},[value])
return (
    <Container>  
        <form action="" method="get">
    <div className="container1">

    <div className="heading"><h3>Login</h3></div>
        <div className="loginform">
                <label for="email"><b>Email : </b></label>
                <input type="email" onChange={(e)=>console.log(e.target.value)}name="" id="email" placeholder="Enter email" className="card-box" pattern="[a-zA-Z0-9\-]{4,10}[@][a-z]+[\.][a-z]{2,3}" 
                title="enter valid email format" required  /><br/>
                <label for="Pswd"><b>Password : </b></label>
                <input type="password" onChange={(e)=>console.log(e.target.value)} name="" id="Pswd" placeholder="Enter password" className="card-box"pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required /><br/>
                <input type="checkbox" id="showPassword" className="clear" />
                <label for="showPassword">Show password</label>
                <input type="submit"  value="SIGN IN" className="button-secondary" />
            <div className="footer">
                <h4>Forgot <a href="#"> Username / Password?</a></h4>
            </div>
            <div className="hover">
                <h4>Don't have an account?<a href="#">Sign Up</a></h4>
            </div>
        </div>
    </div>
</form></Container>
  )
}

export default login
