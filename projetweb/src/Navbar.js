import React, {useState} from 'react'

import {NavLink,Link} from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <Link to="/home" className='title'>Healthivery</Link>
      <div className='menu' onClick={() =>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to = "/home">Home</NavLink>
          </li>
          <li>
          <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/testomonial">Testomonial</NavLink>
          </li>    
          <li>
          <NavLink to="/contact">Contact us</NavLink>
          </li>
      </ul>
    </nav>
  )
}
