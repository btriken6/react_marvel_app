import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h3>
            Marvel
        </h3>
        
        <NavLink to="./">Marvel Gallery</NavLink>
        <NavLink to="/list_view">List View</NavLink>

    </div>
  )
}

export default Navbar