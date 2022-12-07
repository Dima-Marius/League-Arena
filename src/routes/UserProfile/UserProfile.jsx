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
import profilepicture from '../../assets/images/dummy-profile-picture-removebg.png'

const UserProfile = () => {

    const { ign } = useParams();
    const endpoint = `?ign=${ign}`;
    const usersUrl = 'http://localhost:3500/users';
    const loading = null;
    const [currentUser, setCurrentUser] = useState({});
    const [userProfileExists, setUserProfileExists] = useState(loading);

    const getCurrentUser = useCallback( async () => {
      const response = await fetch(usersUrl + endpoint);
      const result = await response.json();
      setCurrentUser(result)
      console.log(result);
      return result.ign;
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

    useEffect(() => {
      console.log(currentUser.ign)
    },[currentUser.ign])


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
          <h2 className={style.h2}>{ign}'s Profile</h2>
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
          <p>Username: <span>{currentUser.ign}</span></p>
          <p>Region: <span>{currentUser.region}</span></p>
          <p>Role: <span>{currentUser.role}</span></p>
        </div>
        <div className={style.details}></div>
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

















