import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import style from './settings.module.css'
import UserDataForm from './UserDataForm';

const Settings = () => {
  
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
            <h2>Account Settings <i className="fa-solid fa-gears"></i></h2>
        </div>
        <div className={style['account-settings']}>
          <UserDataForm/>
        </div>
      </div>
        <div className={style.footer}>
          <Footer/>
        </div>
    </div>
  )
}

export default Settings