import React from 'react';
import Footer from '../../components/Footer/Footer';
import LeaderboardComponent from '../../components/LeaderboardComponent/LeaderboardComponent';
import Navbar from '../../components/Navbar/Navbar';
import style from './leaderboard.module.css';

function Leaderboard() {

  return (
    <div className={style.container}>
       <div className={style.nav}>
         <Navbar/>
       </div>
       <div className={style.wrapper}>
         <div className={style.leaderboard}>
           <LeaderboardComponent/>
         </div>
       </div>
       <div className={style.footer}>
         <Footer/>
       </div>
    </div>
  )
}

export default Leaderboard