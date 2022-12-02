import React, { useContext, useState } from 'react';
import style from './login.module.css';
import bgvid from '../../../src/assets/videos/c-o-animated-ionia.webm';
import LoginForm from '../../components/Login/LoginForm';
import LegalNavbar from '../../components/LegalNavbar/LegalNavbar';
import RegisterForm from '../../components/Register/RegisterForm';

const Login = () => {

const [isUserRegistered, setIsUserRegistered] = useState(true);

const userClickedRegister = (data) => {
  setIsUserRegistered(data)
}
  
  return (
    <div className={style['login-container']}>
        <video className={style['bg-video']} autoPlay loop muted playsInline>
            <source src={bgvid} type='video/webm'/>
        </video>
        <div className={style['login-form-container']}>
          {
          isUserRegistered
          ?
          <LoginForm userClickedRegister={userClickedRegister}/>
          :
          <RegisterForm userClickedRegister={userClickedRegister}/>
          }
        </div>
        <div className={style['legal-nav-container']}>
           <LegalNavbar/>
        </div>
    </div>
  )
}

export default Login