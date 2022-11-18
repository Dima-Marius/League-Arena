import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import style from './home.module.css'
import weblogo from '../../assets/logos/v2-no-bg.png'

const Home = () => {

  const logoutHandler = () => {
    console.log('Logged out.');
  }

  return (
    <div className={style.container}>

     <div className={style['header']}>
       <nav className={style['nav-container']}>
         <Navbar/>
       </nav>
       <div className={style['main-logo']}><img src={weblogo} width='180px' height='60px' alt='website logo'/></div>
       <div className={style.logout}>
        <button onClick={logoutHandler}>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
     </div>

     <div className={style.sliders}>
      <video className={style['first-video']}playsInline loop autoPlay muted>
        <source src='https://challengermode-permanent-assets.azureedge.net/heroes/PUBG/PUBGNextPro_Hero_Low.mp4' type='video/mp4'/>
      </video>
      
        <div className={style['sliders-left']}>
          <p>JOIN A TEAM</p>
          <p>FIND A MATCH</p>
          <p>WIN & EARN POINTS.</p>
          <button>Join a team!</button>
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
        <div className={style.overlay}></div>
     </div>



     <div className={style.title}>title</div>
     <div className={style.intro}>intro</div>
     <div className={style.content}>content</div>
     <div className={style.ranking}>ranking</div>
    </div>
  )
}

export default Home