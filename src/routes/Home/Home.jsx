import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import style from './home.module.css';
import mordesplash from '../../assets/images/morde.png';
import jinxsplash from '../../assets/images/jinx.png';
import logonobg from '../../assets/images/logo-no-background.png';
import allstars from '../../assets/images/allstars.png';
import worldsOpening from '../../assets/images/worlds-opening.jpg';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { SiEslgaming } from 'react-icons/si';
import Footer from '../../components/Footer/Footer';



const Home = () => {

/*   useEffect(() => {
    fetch('http://localhost:3500/login', {
      method: 'POST',
      body: JSON.stringify({
        'email':'user@admin.com',
        'password':'123456',
      }),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  },[]) */

  return (
    <div className={style.container}>
     <div className={style['header']}>
      <div className={style['nav-control']}>
        <Navbar/>
      </div>
     </div>
     <div className={style.sliders}>
      <video className={style['first-video']} playsInline loop autoPlay muted>
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
            <li><i className="fa-brands fa-playstation"></i></li>
            <li><i className="fa-brands fa-discord"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-facebook"></i></li>
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
     <div className={style.intro}>
       <h2>NEWS</h2>
       <div className={style['news-divider']}><span></span><span style={{position:'relative',bottom:'7px'}}>-</span><span></span></div>
       <div className={style.articles}>
        <div className={style['first-article']}>
          <img src={allstars} alt='allstars title'></img>
          <div className={style['article-text']}>
            <h3>All-Stars tournament featuring the best players on League Arena!</h3>
            <p>With the new season starting we have decided to host an All-Stars tournament featuring the best players from various teams here on League Arena, stay tuned!</p>
            <p>Read more...</p>
           </div>
        </div>
        <div className={style['second-article']}>
        <img src={worldsOpening} width='720px' alt='allstars title'></img>
        <div className={style['article-text']}>
            <h3>Worlds 2022 Opening Ceremony Presented by Razer</h3>
            <p>The World Championship Opening Ceremony Presented by Mastercard™ will take place at Chase Center in San Francisco ahead of the Finals on November 5, beginning at 5PM PDT.</p>
            <p>Read more...</p>
           </div>
        </div>
       </div>
       <div className={style.newsletter}>
         <label htmlFor='newsletter'>Subscribe to our newsletter!</label>
         <input id='newsletter' type='text' placeholder='someone@here.com'></input>
         <button><AiOutlineCheckCircle/></button>
       </div>
      </div>

      <div className={style.content}>
        <div className={style['content-container']}>

           <div className={style.paragraphs}>
             <h2>Create or join a team now!</h2>
             <p>get your group on the next level. <SiEslgaming/></p>
           </div>
          <div className={style.availability}>
            <p>Time</p>
            <img className={style.svg} src={require('../../assets/svg/attribute__availability.svg').default} height='280px' alt='mySvgImage' />
          </div>
          <div className={style.ambition}>
            <p>Skill</p>
            <img className={style.svg} src={require('../../assets/svg/attribute__skill.svg').default} height='280px' alt='mySvgImage' />
          </div>
          <div className={style.skill}>
            <p>Progress</p>
            <img className={style.svg} src={require('../../assets/svg/attribute__ambition.svg').default} height='280px' alt='mySvgImage' />
          </div>
          <div className={style.communication}>
            <p>Communication</p>
            <img className={style.svg} src={require('../../assets/svg/attribute__languagelocation.svg').default} height='280px' alt='mySvgImage' />
          </div>
          <div className={style.start}>
            <button>Create now</button>
          </div>
        </div>
      </div>
      <footer className={style['footer-area']}>
        <Footer/>
      </footer>
    </div>
  )
}

export default Home