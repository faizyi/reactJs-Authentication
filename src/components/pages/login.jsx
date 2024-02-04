import React, { useState } from 'react'
import './style.css'
import LoginForm from '../forms/LoginForm'
import { Link,useNavigate } from 'react-router-dom'
import { auth,signInWithEmailAndPassword } from '../config/firebaseonfig'

export default function Login() {
  const [emailText, setEmailText] = useState('')
  const [passwordText, setPasswordText] = useState('')
  function email(e){
    setEmailText(e.target.value)
  }
  function password(e){
    setPasswordText(e.target.value)
  }
  const navigate = useNavigate();
  const login =(event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, emailText, passwordText)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate('/profile')
    })
    .catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='body'>
    <div className='container'>
      <div className='heading'>
      <h1>Login</h1>
      </div>
        <form onClick={login}>
      <div className='input'>
        <input onChange={email} value={emailText} placeholder='Enter Email' required type="email" /><br /><br />
        <input onChange={password} value={passwordText} placeholder='Enter Password' required type="password" />
      {/* <SignupForm sFun={sFun}/> */}
      </div>
      <div className='btn'>
          <button type='submit'>Login</button>
        </div>
        </form>
      <div className='content'>
      <p>Not an Account?<Link to={'/signup'}>Signup</Link></p>
      </div>
    </div>
    </div>
  )
}
