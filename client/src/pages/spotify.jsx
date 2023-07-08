import styled from "styled-components"
import reactLogo from '../assets/Spotify_logo.png'
import Image from '../assets/spotify_md.png'
import './login'

const  Container=styled.div`
   height: 100vh;
   margin-left: -10px;
   margin-top: -10px;
   margin-right: -7px;
   background:url(${Image});
   background-size: cover;
   background-repeat: no-repeat;
   .container1{
    height:99% ;
    width: 100%;
   }
.nav{
    background-color:rgba(25, 20, 20, 0.65);
    width: 100%;
    height: 100px;
}
.logo img{
    width: 120px;
    height: 40px;
    float: left;
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
}
.nav label{
    color: white;
    font-size: 17px;
    line-height: 90px;
    padding: left 50px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}
.nav ul{
    float: right;
    margin-right: 20px;
}
.nav ul li{
    display: inline-block;
    line-height: 70px;
    margin: 0 5px;
    color: white;
    font-size: 17px;
    padding: 7px 13px;
    border-radius: 3px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold; 
}
.nav ul a{
    color:white;
    text-decoration: none;
}
.new{
    margin-top: 150px;
    
}
.div1 p{
  background-image: linear-gradient(
    -225deg,
    #24b226 0%,
    #7a1414 29%,
    #114962 67%,
    #e9546b 100%
    );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 1.5s linear infinite;
  font-weight: bold;
  font-size: 55px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.div2 p{
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    font-size: 18px;
    text-align: center;
}
.button-primary{
    border-radius: 50px;
    border: none;
    width: 200px;
    background-color: #089108;
    font-size: 16px;
    font-weight: bold;
    color:white;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
}  
@media (max-width: 768px) {
    .container1{
        height: 100%;
        width: 10%;
        margin-right: 100px;
        background-repeat: no-repeat;
    }
    .nav {
      height: 120px;
    }

    .logo img {
      width: 80px;
      height: 30px;
      margin-top: 15px;
      margin-right: 5px;
      margin-bottom: 5px;
      margin-left: 8%;
    }

    .nav label {
      font-size: 14px;
      line-height: 30px;
      padding-left: 30px;
      margin-top: -100px;
    }

    .nav ul li {
      line-height: 5px;
      font-size: 14px;
      padding: 5px 10px;
      margin-top: 0px;
      display: flex;
      flex-direction: column;
    }

    .new {
      margin-top: -20px;
    }
    .line{
        display: none;
    }
  }`;
  export const Spotify = () => {
  return (
    <Container>
        <container1>
    <div class="nav">
    <nav>
    <div class="logo">
        <img src={reactLogo} alt=''/>
    </div>
        <ul>
         <li><a>Premium</a></li>
         <li><a>Help</a></li>
         <li><a>Download</a></li>
         <li><div class="line"><a>|</a></div></li>
         <li><a>Sign Up</a></li>
         <li><a href='login'>Log In</a></li>
        </ul>
        </nav>
     </div>
     <div class="new">
        <div class="div1"><p>Music for everyone.</p></div>
        <div class="div2"><p>Millions of songs. No credit card needed.</p></div>
        <a class="button-primary"><h5>GET SPOTIFY FREE</h5></a>
    </div>
    </container1>
    </Container>
  )
  }

export default Spotify