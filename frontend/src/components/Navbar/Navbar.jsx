import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <ul className='nav-links'>
             
                <li><Link to="/home">Soso</Link></li>
                <li><Link to="/messaging">Messaging</Link></li>
                <li><Link to="/feed">Feed</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                
            </ul>
        </div>
        
      
    </div>
  )
}

export default Navbar
