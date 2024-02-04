import React from 'react'
import { Link,Navigate } from 'react-router-dom'
// import './style.css'
export default function Header() {
  return (
    <div className='header'>
        <h1>Logo</h1>
        <ul>
            <li>Home</li>
            <li className='login'><span><Link to={'/login'}>Login</Link></span></li>
            <li className='signup'><span><Link to={'/signup'}>Signup</Link></span></li>
        </ul>
    </div>
  )
}
