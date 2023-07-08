import React from 'react'
import styled from "styled-components"
import img from '../assets/arrow.png'
const  Container=styled.div`
    background-image: linear-gradient(to right,#ff5722,#ff9800);
    margin-top: 150px;
    display:flex;
    height: 100vh;
    margin: auto;
    flex-direction:column;
.container1{
    text-align: center;
    color:#fff;
    padding: 30px;
    margin-right: 600px;
    margin-top:70px;
}
.container1 p{
    padding: 20px 20px 0;
}
.container1 h2{
    color: white;
    text-align: center;
}
.container1 img{
    margin-top: 50px;
    margin-bottom: 18px;
    width:50px;
}
.container2{
    border:none;
    background-color: #f8f8f8;
    display:flex;
    flex-direction:column;
    width:400px;
    height: 300px;
    padding: 20px;
    border-bottom-left-radius: 10% 50%;
    border-top-left-radius: 10% 50%;
    position: absolute;
    right: 0px;
    margin-right: 100px;
    margin-top:130px;
}
.container2 h1{
    text-align: center;
    margin-bottom: 10px;
    color:#555;
}
.abt{
    border:none;
    background-color: white;
    width:100px;
    color: #555;
    border-radius: 25px;
    padding:10px 10px;
    margin-left: auto;
}
.reg{
    border:none;
    background-color: #ff9800;
    width:100px;
    color: white;
    border-radius: 25px;
    padding:10px 10px;
    margin-left: auto;
}`;
export const Register = () => {
  return (
    <Container>
         <div className="container1">
        <img src={img} alt=""/>
        <h2>Join Us</h2>
        <p>Subscribe Easy Tutorials YouTube Channel to <br/>watch more videos</p>
        <button className="abt">About Us</button>
    </div>
    <div className="container2">
        <h1>Register Here</h1>&nbsp;&nbsp;
        <input type="text" className="form-control" placeholder="Name"/>&nbsp;
        <input type="text"className="form-control" placeholder="Username"/>&nbsp;
        <input type="email" className="form-control" placeholder="Email"/>&nbsp;
        <input type="password"className="form-control" placeholder="Password"/>&nbsp;
        <button className="reg">Register</button>
    </div>
    </Container>
  )
}

export default Register