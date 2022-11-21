import React, { } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import style from './home.module.css'
import mordesplash from '../../assets/images/morde.png'
import jinxsplash from '../../assets/images/jinx.png'
import logonobg from '../../assets/images/logo-no-background.png';
import allstars from '../../assets/images/allstars.png'
import worldsOpening from '../../assets/images/worlds-opening.jpg'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { SiEslgaming } from 'react-icons/si'
import { TbPhone } from 'react-icons/tb'
import { TfiEmail } from 'react-icons/tfi'
import riotlogo from '../../assets/logos/riot-logo.png'
import { GiEvilLove } from 'react-icons/gi';




const Home = () => {
/*   useEffect(() => {
    fetch('https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Shady6kx?api_key=RGAPI-ed0d2db5-e600-4351-8379-e345111204e3')
    .then(response => response.json())
    .then(data => console.log(data.summonerLevel))
  },[]) */

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
         <label for='newsletter'>Subscribe to our newsletter!</label>
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
        <div className={style.about}>
          <img src={riotlogo} width='150px' height='150px' alt='riot games logo' />
          <p>API Site names and logos 	&#40;Riot Games, leagueoflegends.com, playvalorant.com, riotgames.com&#41; are © Riot Games Inc.<br></br> This site is in no way affiliated with Riot Games Inc. except for the fact that we use their awesome API to provide you this service.</p>
          <div>
          </div>
        </div>
        <div className={style.links}>
          <h2>LINKS</h2>
          <ul>
            <li>Home</li>
            <li>Matches</li>
            <li>Ranking</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Info</li>
          </ul>
        </div>
        <div className={style['social-area']}>
          <h2>FIND US ON</h2>
          <ul className={style['footer-social']}>
            <li><i class="fa-brands fa-playstation"></i>
            Playstation Network</li>
            <li><i class="fa-brands fa-discord"></i>
            Discord</li>
            <li><i class="fa-brands fa-instagram"></i>
            Instagram</li>
            <li><i class="fa-brands fa-facebook"></i>
            Facebook</li>
          </ul>
          </div>
        <div className={style.misc}>
          <h2>CONTACT US</h2>
          <div>
            <div className={style['footer-phone']}>
            <TbPhone/> 
            <p>1-800-236-479</p>
            </div>
            <div className={style['footer-email']}>
            <TfiEmail/>
            <p>someone@here.somewhere.com</p>
            </div>
            <div className={style.github}>
              <a href='https://github.com/Shady1kx'>Check out my Github profile!</a>
              </div>
          </div>
        </div>
        <div className={style.disclaimer}>
        <div className={style.divider}><span></span><span style={{position:'relative',bottom:'7px'}}>Made with <i class="fa-regular fa-heart"></i></span><span></span></div>
          <h2><span>Original creator:</span> <a href='https://github.com/Shady1kx'>https://github.com/Shady1kx</a></h2>
        </div>
      </footer>
    </div>
  )
}

export default Home




/* <img className={style.availability} src={require('../../assets/svg/attribute__availability.svg').default} alt='mySvgImage' /> */