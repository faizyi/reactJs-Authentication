import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signOut } from '../config/firebaseonfig'
import { collection, getDocs, db } from '../config/firebaseonfig'
import Header from '../header/header'

export default function Profile() {
  const [inputText, setInputText] =useState('')
  useEffect(()=>{
    async function fetchData(){
      const querySnapshot = await getDocs(collection(db, "users"));
      const dataArray = querySnapshot.forEach((doc)=>{
        const data = doc.data()
        console.log(data.Email);
        setInputText(data.Email)
      })
    }
    fetchData()
  },[])
  const navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className='body'>
    <div className='profile'>
      {/* <header>
        <h1>Profile</h1>
      </header> */}
      <h1>Welcome</h1>
      <input disabled value={inputText} type="text" /><br />
      <button onClick={logOut}>LogOut</button>
    </div>
    </div>
  )
}
