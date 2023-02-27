// 2 Links com react router

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>Sobre</Link>
    </nav>
  )
}

export default Navbar