import React from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Brother K Food Point" />
      <img className='logo' src={assets.user} alt="Admin" />

    </div>
  )
}

export default Navbar
