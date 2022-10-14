import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='card gallery-list'>
      <h1>Marvel</h1>
      <div className='links'>
        <NavLink className={"linksoption"} to='./'>
          Marvel Gallery
        </NavLink>

        <NavLink to='/list_view'>List View</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
