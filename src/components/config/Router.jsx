import React, { useEffect,useState } from 'react'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Profile from '../pages/profile'
import { auth,onAuthStateChanged } from '../config/firebaseonfig'
import { Spin } from 'antd';
import Header from '../header/header'

export default function Router() {
    const [user, setUser] = useState(false)
    const [loader, setLoader] = useState(true)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log(uid);
              setUser(true)
              setLoader(false)
            } else {
                console.log('user not login');
                setUser(false)
                setLoader(false)
            }
          });
    },[])
  return (
    <div>
        {
            loader ?
            <Spin/>
            :
        // <BrowserRouter>
        <Routes>
            {/* <Route path='/' element={<Header/>}/> */}
            <Route path='/login' element={user ? <Navigate to={'/profile'}/> : <Login/>}/>
            <Route path='/signup' element={user ? <Navigate to={'/profile'}/> : <Signup/>}/>
            <Route path='/profile' element={user ? <Profile/> : <Navigate to={'/'}/>}/>
        </Routes>
        // </BrowserRouter>
        }
    </div>
  )
}
