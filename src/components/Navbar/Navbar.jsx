import React from 'react';
import style from './navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import weblogo from '../../assets/logos/v2-no-bg.png';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import { GiSwordsEmblem } from 'react-icons/gi';

const Navbar = () => {

  const navigate = useNavigate();

  const user = useGetUserInfo();

  const logoutHandler = () => {
    window.localStorage.removeItem('accessToken');
    window.localStorage.removeItem('auth');
    navigate('/');
  }

  const addActiveClass = ({ isActive }) => isActive ? `${style.active}` : {};
  const userHasTeam = user.team !== '' ? '/teamProfile' : '/teamProfile/createTeam';

  return (
    <nav className={style['nav-container']}>   
      <ul className={style.ul}>
        <div className={style['main-logo']}><img src={weblogo} width='180px' height='60px' alt='website logo'/></div>
          <NavLink className={addActiveClass} to='/home'><li><i className="fa-solid fa-house"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/search'><li><i className="fa-solid fa-magnifying-glass"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/leaderboard'><li><i className="fa-solid fa-earth-americas"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/teamProfile'><li><i className="fa-solid fa-shield"></i>{/* <GiSwordsEmblem size={43}/> */}</li></NavLink>
          <NavLink className={addActiveClass} to='/userProfile'><li><i className="fa-solid fa-user"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/settings'><li><i className="fa-solid fa-gear"></i></li></NavLink>
          <NavLink className={addActiveClass} to='/notifications'><li><i className="fa-solid fa-envelope"></i></li></NavLink>
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



