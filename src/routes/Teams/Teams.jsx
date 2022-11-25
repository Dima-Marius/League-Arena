import React from 'react';
import style from './teams.module.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import yasuosplash from '../../assets/images/yasuo-spirit-blossom.jpg';
import championsqueue from '../../assets/images/champions-queue.jpg'
import TeamOutput from '../../components/TeamOutput/TeamOutput';
import leblanc from '../../assets/images/leblanc.png'

const Teams = () => {
  return (
    <div className={style.container}>
        <div className={style.nav}>
          <Navbar/>
        </div>
        <div className={style.poster}>
         <img className={style['yasuo-splash']} width='100%' height='850px' alt='yasuo' src={yasuosplash}></img>
        </div>
        <div className={style.divider}>
          <h2>FIND YOUR TEAM.</h2>
        <div className={style['news-divider']}>
          <span></span><span style={{position:'relative',bottom:'7px'}}>-</span><span></span>
          </div>
        </div>
        
    <div className={style.teams}>
      <div className={style.header}>
        <img className={style['champions-queue-img']} alt='header' src={championsqueue} width='100%' height='500px'></img>
      </div>
      <div className={style['teams-players']}>
        <div>
            <button>TEAMS</button>
            <button>PLAYERS</button>
        </div>
      </div>
      <div className={style['filters-header']}>
        <h2>FILTERS</h2>
      </div>
      <div className={style.filters}>
        <div className={style['rank-filters']}>
            <div className={style.search}>
                <div className={style['search-wrapper']}>
                  <input placeholder='...search' type='text'></input>
                  <span><i className="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
              <div className={style.role}>
                <p>Roles</p>
              </div>
         <div>
            <input type="checkbox" className={style.toggle}/>
            <label>TOP</label>
          </div>
          <div>
            <input type="checkbox" className={style.toggle}/>
            <label>MID</label>
          </div>
          <div>
            <input type="checkbox" className={style.toggle}/>
            <label>JUNGLE</label>
          </div>
          <div>
            <input type="checkbox" className={style.toggle}/>
            <label>ADC</label>
          </div>
          <div>
            <input type="checkbox" className={style.toggle}/>
            <label>SUPPORT</label>
          </div>
          <div className={style['region-filters']}>
            <div>
            <label htmlFor='region'>Region</label>
            <select className={style.select} id='region'>
                <option>EUNE</option>
                <option>EUW</option>
                <option>NA</option>
                <option>RUSSIA</option>
                <option>OCEANIA</option>
            </select>
            </div>
          </div>
          <div className={style['region-filters']}>
            <div>
            <label htmlFor='region'>Language</label>
            <select className={style.select} id='region'>
                <option>English</option>
                <option>Romanian</option>
            </select>
            </div>
          </div>
          <div className={style['region-filters']}>
            <div>
            <label htmlFor='region'>Rank</label>
            <select className={style.select} id='region'>
                <option>Bronze</option>
                <option>Silver</option>
                <option>Gold</option>
                <option>Platinum</option>
                <option>Diamond</option>
                <option>Master</option>
                <option>Grandmaster</option>
                <option>Challenger</option>
            </select>
            </div>
          </div>
         </div>
      </div>
      <div className={style['team-list']}>
        <TeamOutput/>
      </div>
      <div className={style['navigation-buttons']}>
        <div>
          <button className={style.prev}>Previous</button>
        </div>
        <div>
          <button className={style.next}>Next</button>
        </div>
      </div>
    </div>
{/*     <div className={style.splash}>
      <img src={leblanc} alt='lb' height='1200px' width='1000px'></img>
    </div> */}
      <div className={style.footer}>
        <Footer/>
      </div>
    </div>
  )
}

export default Teams