import { NavLink } from 'react-router-dom'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>Sobre</NavLink>
        <NavLink to='/product'>Produto</NavLink>
    </nav>
  )
}

export default Navbar