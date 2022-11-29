import React from 'react';
import style from './navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import weblogo from '../../assets/logos/v2-no-bg.png';

const Navbar = () => {
const navigate = useNavigate();

  const logoutHandler = () => {
    window.localStorage.removeItem('accessToken')
    window.localStorage.removeItem('auth')
    navigate('/');
  }

  const addActiveClass = ({ isActive }) => isActive ? `${style.active}` : {};

  return (

    <nav className={style['nav-container']}>   
      <ul className={style.ul}>
      <div className={style['main-logo']}><img src={weblogo} width='180px' height='60px' alt='website logo'/></div>
          <NavLink className={addActiveClass} to='/home'><li><i className="fa-solid fa-house"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/teams'><li><i className="fa-solid fa-gamepad"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/leaderboard'><li><i className="fa-solid fa-earth-americas"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/ranking'><li><i className="fa-solid fa-trophy"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/profile'><li><i className="fa-solid fa-user"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/settings'><li><i className="fa-solid fa-gear"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/about'><li><i className="fa-solid fa-circle-question"></i></li></NavLink>
          <div className={style.logout}>
          <button onClick={logoutHandler}> {/* putting only pathname with no / threats it as a sub-route */}
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
         </div>
      </ul>
    </nav>
  )
}

export default Navbar



