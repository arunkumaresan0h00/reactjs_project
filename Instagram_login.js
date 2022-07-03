import React,{useState} from 'react';  
import {useNavigate} from 'react-router-dom';
import "./Instagram_login.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import pic from "./img/instagram.png";
import { FaFacebookSquare } from 'react-icons/fa';
import ins from "./img/apple store.png"
import ply from "./img/google play.png"
export default function Instagram_login() {
  const navigate = useNavigate();
    //====== state creation ========
    const [url,setUrl] = useState('https://www.facebook.com/');
    const [password,setPassword] = useState('');
    const [sign_up,setSign_up] = useState('');
    const [username,setUsername] = useState('');
    const [passwd,setPasswd] = useState('');
    //======== function creation ======
    const usernameInput = (event) =>{
        setUsername(event.target.value);
        console.log(event.target.value);
    }
    const passwordInput = (event) =>{
        setPasswd(event.target.value);
        console.log(event.target.value);
    }
    // const shootHi = ()=> {
    //     alert("hi");
    // }
    //=========jayavascript code =====

   let val1;
   let val2;
   var akp =
     [
       {
         username: 'arun',
         password: '12345'
       },
       {
         username: 'arunkumaresan55',
         password: '@Asd1234'
       },
       {
         username: 'jaya',
         password: 'kumar'
       },
       {
         username: 'jay',
         password: 'raj'
       },
       {
         username: 'admin',
         password: 'admin'
       }
     ]
   if (username && passwd) {
     val1 = username;
     val2 = passwd;
   

   }
    const shootHi = () => {
     if (val1 != "" && val2 != "") {
       if (akp.indexOf(val1) == -1 && akp.indexOf(val2) == -1) {

         for (var i = 0; i < akp.length; i++) {

           if (akp[i].username == val1 && akp[i].password == val2) {
             
             //alert('goood filled');
            //  history.push("/sign_up");
             navigate('/sign_up');
           }
         }
       }
       else {
         alert("incorrect value");
       }
     }
     else {

       alert("Enter the value fully");
     }
   }


    return (
    <div>
           
    <Card className='first'>
      <img src={pic} height="60px" width="170px" alt='profile1'style={{margin:"auto",marginTop:"50px"}} />
      <Card.Body>
        <input type="text" name="name" placeholder='phone number, username or email address'  value={username} onChange={usernameInput} /><br/>
        <input type="text" name="name" placeholder='password'  value={passwd} onChange={passwordInput} /><br/>
        <Button variant="primary" className='log_btn' onClick={shootHi}  disabled={!username || !passwd}>Log In</Button>
        <br/><br/><br/>
        <p className='line_border'><div className='or'>OR</div></p>
  <FaFacebookSquare size='30px' style={{diplay:"inline-block"}}/>&nbsp;&nbsp;<a href={""}>Log in with Facebook</a><br/>
  <br/><a href={""}>Forgotten your password</a>
      </Card.Body>
    </Card>
    <Card  className='second'>
  <div className='sign' >Don't have an account?<a href={""}>Sign up</a></div>
 </Card>
 <br/><br/>
 <span >Get the app.</span>
 <br/><br/>
 <img src={ins} className='img1' height="50px" />
 <img src={ply} className='img1' height="50px"/> 
 <br/>
 <ul className='last_li'>
  <li>Meta</li>
  <li>About</li>
  <li>Blog</li>
  <li>Jobs</li>
  <li>Help</li>
  <li>API</li>
  <li>Privacy</li>
  <li>Terms</li>
  <li>Top accounts</li>
  <li>Hashtags</li>
  <li>Locations</li>
  <li>Instagram Lite</li>
  <li>Contact uploading and non-users</li>
  </ul>  
  <select>
<option >English</option>
<option>Spanish</option>
<option >tamil</option>
<option >telugu</option>
</select> &nbsp;
© 2022 Instagram from Meta <br/><br/>  
{/* <Link to="/sign_up">page12</Link> */}
    </div>
  )
}
