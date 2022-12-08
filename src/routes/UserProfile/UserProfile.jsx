import React, { useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import AuthContext from '../../context/AuthContext';
import LoadingPage from '../LoadingPage/LoadingPage';
import NotFound from '../NotFound/NotFound';
import style from './userProfile.module.css';
import { getRankIcon } from '../../utils/getRankIcon';
import { getRoleIcon } from '../../utils/getRoleIcon';
import leaguelogo from '../../assets/logos/lol-logo.png'
import '../../rankedTextGradients/rankedTextGradients.css'

const UserProfile = () => {

    const { ign } = useParams();
    const endpoint = `?ign=${ign}`;
    const usersUrl = 'http://localhost:3500/users';
    const loading = null;
    const [currentUser, setCurrentUser] = useState(null);
    const [userProfileExists, setUserProfileExists] = useState(loading);
    const [rankTextGradient, setRankTextGradient] = useState(style.diamond)
    
    const getCurrentUser = useCallback( async () => { 
      const response = await fetch(usersUrl + endpoint);
      const result = await response.json();
      setCurrentUser(result)
      return result[0]?.ign;
    },[endpoint])

    const checkUserExists = useCallback( async () => {
      if (await getCurrentUser()) {
        setUserProfileExists(true)
      } else {
        setUserProfileExists(false)
      }
    },[getCurrentUser])

    useEffect(() => {
      checkUserExists()
    },[checkUserExists]) 

  if (userProfileExists === true) 
      return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Navbar/>
      </div>
        <div className={style['background-pattern']}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div className={style.main}>
        <div className={style.title}>
          <h2 className={style.h2}>
            {ign}'s Profile <span><img src={leaguelogo} alt='lol' width='50px' height='50px' /></span>
          </h2>
        </div>
        <div className={style.contact}>
          <div className={style.picture}>
          <i className={`${'fa-solid fa-user'} ${style['profile-icon']}`}></i>
          </div>
          <ul className={style.social}>
            <li><i className="fa-brands fa-discord"></i></li>
            <li><i className="fa-solid fa-envelope"></i></li>
            <li><i className="fa-solid fa-user-plus"></i></li>
          </ul>
        </div>
        <div className={style.info}>
          <p>Username: <span>{currentUser[0]?.ign}</span></p>
          <p>Region: <span>{currentUser[0]?.region}</span></p>
          <p>Role:<span>{currentUser[0]?.role}</span>
          <span className={style['role-icon']}>
            <img src={currentUser.length !== 0 && getRoleIcon(currentUser[0].role)} width='50px' height='50px' alt='role' />
          </span>
          </p>
        </div>
        <div className={style.details}>
          <div>
            <h2>
              Rank <span className={style['ranking-star']}><i className="fa-solid fa-ranking-star"></i></span>
            </h2>
          </div>
          <div>
            <img src={currentUser.length !== 0 && getRankIcon(currentUser[0].rank)} width='200px' height='200px' alt='rank'/>
            <p className={`${style['rank-text']} ${currentUser[0]?.rank.toLowerCase()}`}>{currentUser[0]?.rank}</p>
          </div>
        </div>
        <div className={style.about}>
          <div>
            <h2>About</h2>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni deserunt minus voluptatibus officiis id, enim, autem nobis eius quasi animi fuga hic optio repudiandae explicabo obcaecati vitae debitis corrupti aliquid dolorem eligendi quisquam quis quaerat deleniti iure! Natus, exercitationem quos maxime nesciunt repudiandae suscipit alias eius officiis excepturi quisquam velit odit sint, quidem voluptates quod ut laborum, hic minus sequi ullam eligendi accusamus fugit! At praesentium maxime voluptatem illo maiores doloribus tenetur aperiam quos corrupti veniam. Nulla doloremque voluptates placeat rerum velit quia animi distinctio aperiam inventore? Voluptates aliquid recusandae quaerat eos ad eveniet veritatis animi perspiciatis, inventore officiis pariatur.</p>
        </div>
        <div className={style.team}></div>
      </div>
      <div className={style.footer}>
        <Footer/>
      </div>
    </div>
           )
  if (userProfileExists === false)
    return (
    <NotFound/>
           )
  if (userProfileExists === null) {
    return (
    <LoadingPage/>
           )
  }
}

export default UserProfile