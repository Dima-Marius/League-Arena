import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import style from './home.module.css'

import { useNavigate } from 'react-router-dom';
import mordesplash from '../../assets/images/morde.png'
import jinxsplash from '../../assets/images/jinx.png'
import logonobg from '../../assets/images/logo-no-background.png';

const Home = () => {
  useEffect(() => {
    fetch('https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Shady6kx?api_key=RGAPI-ed0d2db5-e600-4351-8379-e345111204e3')
    .then(response => response.json())
    .then(data => console.log(data.summonerLevel))
  },[])

  return (
    <div className={style.container}>

     <div className={style['header']}>
      <div className={style['nav-control']}>
        <Navbar/>
      </div>
     </div>

     <div className={style.sliders}>
      <video className={style['first-video']}playsInline loop autoPlay muted>
        <source src='https://challengermode-permanent-assets.azureedge.net/heroes/PUBG/PUBGNextPro_Hero_Low.mp4' type='video/mp4'/>
      </video>
      <div className={style['sliders-details']}>
        <div className={style['sliders-left']}>
          <p>JOIN A TEAM</p>
          <p>FIND A MATCH</p>
          <p>WIN & EARN POINTS!</p>
          <button>Play now!</button>
        </div>
        <div className={style['sliders-right']}>
          <p>ARE</p>
          <p>YOU THE</p>
          <p>NEXT PRO PLAYER?</p>
          <h2>FIND US ON</h2>
          <ul className={style.social}>
            <li><i class="fa-brands fa-playstation"></i></li>
            <li><i class="fa-brands fa-discord"></i></li>
            <li><i class="fa-brands fa-instagram"></i></li>
            <li><i class="fa-brands fa-facebook"></i></li>
          </ul>
        </div>
      </div>
        <div className={style.overlay}></div>
     </div>



     <div className={style.title}>
      <div className={style['left-splash']}>
        <div className={style.title1}>
          <img src={mordesplash} height='300px' alt='lol character'></img>
          <div>
          <h2>Conquer the top 100!</h2>
          <p>Join our weekly tournaments, battle other teams, reach the top of the ladder and earn coins!</p>
          </div>
        </div>
      </div>
      <div className={style['middle-splash']}>
        <div className={style.title2}>
          <img src={logonobg} alt='website logo' width='500px' height='310px' />
        </div>
      </div>
      <div className={style['right-splash']}>
        <div className={style.title3}>
          <img src={jinxsplash} height='300px' alt='lol character'/>
          <div>
            <h2>Manage your team!</h2>
            <p>Easily track your team's progress. Get accurate info about your team's players using the official Riot Games API!</p>
          </div>
        </div>
      </div>
     </div>
     <div className={style.intro}>intro</div>
     <div className={style.content}>content</div>
     <div className={style.ranking}>ranking</div>
    </div>
  )
}

export default Home