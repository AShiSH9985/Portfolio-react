import React from 'react'
import About from './About'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='w-full h-12 bg-white text-l font-semibold flex items-center justify-center p-4'>
        
        <NavLink to="/" className="m-4 text-xl hover:text-sky-600 ">HOME</NavLink>
        <NavLink  to="/About" className="m-4 text-xl hover:text-sky-600">ABOUT</NavLink>
        <NavLink  to="/Projects" className="m-4 text-xl hover:text-sky-600">PROJECTS</NavLink>
        <NavLink  to="/Contact" className="m-4 text-xl hover:text-sky-600">CONTACT</NavLink>
    
    </div>  
  )
}

export default Navbar