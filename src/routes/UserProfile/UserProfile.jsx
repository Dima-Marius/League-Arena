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
import style from './userProfile.module.css'

const UserProfile = () => {

    const loading = null;
    const usersUrl = 'http://localhost:3500/users'
    const { ign } = useParams();
    const [users, setUsers] = useState([])
    const [userProfileExists, setUserProfileExists] = useState(loading);

    useEffect(() => {
      fetch(usersUrl)
      .then(response => response.json())
      .then(data => setUsers(data));
    },[])

    useEffect(() => {
      if (users.length !== 0) {
        users.find(item => item.ign === ign) ? setUserProfileExists(true) : setUserProfileExists(false)
      }
  },[users,ign])

/*     const reRender = () => {
      setRenderCount(prev => prev + 1);
      console.log(renderCount);
    }

    const fetchUsers = useCallback(async () => {
      const response = await fetch(usersUrl);
      const result = await response.json();
      setUsers(result);
    },[])

    const checkUserExists = useCallback(async () => {
      for (const user of users) {
        if (user.ign === ign) {
          setUserProfileExists(true)
        }
      }
    },[fetchUsers,ign])

    useEffect(() => {
      checkUserExists()
    },[checkUserExists])

     useEffect(() => {
      console.log(users)
    },[users])
      */

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
<div className={style.main}></div>
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

















