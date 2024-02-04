import React, { useState } from 'react'
import SignupForm from '../forms/SignupForm'
import { Link,useNavigate } from 'react-router-dom'
import { auth,createUserWithEmailAndPassword,db,addDoc,collection } from '../config/firebaseonfig'

export default function Signup() {
  const [emailText, setEmailText] = useState('')
  const [passwordText, setPasswordText] = useState('')
  function email(e){
    setEmailText(e.target.value)
  }
  function password(e){
    setPasswordText(e.target.value)
  }
  // function signup(event){
  //   event.preventDefault();
  //   console.log(emailText);
  //   console.log(passwordText);
  // }
  const navigate = useNavigate();
  const signup = (event)=>{
    event.preventDefault();
    createUserWithEmailAndPassword(auth, emailText, passwordText)
  .then(async(userCredential) => {
    const user = userCredential.user;
    console.log(user);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Email: emailText,
        Password: passwordText,
      });
      navigate('/')
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    

  })
  .catch((error) => {
    console.log(error);
  });
  }
  return (
    <div className='body'>
    <div className='container'>
      <div className='heading'>
      <h1>Signup</h1>
      </div>
        <form onClick={signup}>
      <div className='input'>
        <input onChange={email} value={emailText} placeholder='Enter Email' required type="email" /><br /><br />
        <input onChange={password} value={passwordText} placeholder='Enter Password' required type="password" />
      {/* <SignupForm sFun={sFun}/> */}
      </div>
      <div className='btn'>
          <button type='submit'>Signup</button>
        </div>
        </form>
      <div className='content'>
      <p>Already an Account?<Link to={'/login'}>Login</Link></p>
      </div>
    </div>
    </div>
  )
}
