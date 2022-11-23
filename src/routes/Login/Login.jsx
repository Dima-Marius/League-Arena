import React, { useEffect } from 'react';
import style from './login.module.css';
import bgvid from '../../../src/assets/videos/c-o-animated-ionia.webm';
import LoginForm from '../../components/Login/LoginForm';
import LegalNavbar from '../../components/LegalNavbar/LegalNavbar';
import Navbar from '../../components/Navbar/Navbar';
/* import loginBgVideo from '../../../src/assets/videos/animated-bloodmoon-diana.webm.webm'; */

const Login = () => {


  const challengerQueueUrl = `https://evening-meadow-61634.herokuapp.com/https://eun1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-490cfa7f-b18a-4d7d-8464-fe5841bc4ff1`
    
    useEffect(() => {
        fetch(challengerQueueUrl)
        .then(response => response.json())
        .then(data => console.log(data.entries));
  
      },[])


  return (
    <div className={style['login-container']}>
        <video className={style['bg-video']} autoPlay loop muted playsInline>
            <source src={bgvid} type='video/webm'/>
        </video>

        <div className={style['login-form-container']}>
          <LoginForm/>
        </div>

        <div className={style['legal-nav-container']}>
           <LegalNavbar/>
        </div>
    </div>
  )
}

export default Login