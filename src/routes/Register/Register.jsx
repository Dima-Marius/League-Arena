import React from 'react';
import style from './register.module.css'
import bgvid from '../../../src/assets/videos/c-o-animated-ionia.webm';
import RegisterForm from '../../components/Register/RegisterForm';
import LegalNavbar from '../../components/LegalNavbar/LegalNavbar';

const Register = () => {
  return (
    <div className={style['login-container']}>
        <video className={style['bg-video']} autoPlay loop muted playsInline>
            <source src={bgvid} type='video/webm'/>
        </video>

        <div className={style['login-form-container']}>
          <RegisterForm/>
        </div>

        <div className={style['legal-nav-container']}>
           <LegalNavbar/>
        </div>
    </div>
  )
}

export default Register