import React from 'react';
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (

    <ul className={style.ul}>
        <NavLink><li><i className="fa-solid fa-house"></i></li></NavLink>
        <NavLink><li><i className="fa-solid fa-gamepad"></i></li></NavLink>
        <NavLink><li><i className="fa-solid fa-trophy"></i></li></NavLink>
        <NavLink><li><i className="fa-solid fa-user"></i></li></NavLink>
        <NavLink><li><i className="fa-solid fa-gear"></i></li></NavLink>
        <NavLink><li><i className="fa-solid fa-circle-question"></i></li></NavLink>
    </ul>
  )
}

export default Navbar