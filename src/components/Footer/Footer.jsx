import React from 'react';
import style from './footer.module.css';
import { TbPhone } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';
import riotlogo from '../../assets/logos/riot-logo.png'

function Footer() {
  return (
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
        <li><i className="fa-brands fa-playstation"></i>
        Playstation Network</li>
        <li><i className="fa-brands fa-discord"></i>
        Discord</li>
        <li><i className="fa-brands fa-instagram"></i>
        Instagram</li>
        <li><i className="fa-brands fa-facebook"></i>
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
    <div className={style.divider}><span></span><span style={{position:'relative',bottom:'7px'}}>Made with <i className="fa-regular fa-heart"></i></span><span></span></div>
      <h2><span>Original creator:</span> <a href='https://github.com/Shady1kx'>https://github.com/Shady1kx</a></h2>
    </div>
  </footer>
  )
}

export default Footer






