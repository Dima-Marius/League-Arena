import React, { } from 'react';
import Footer from '../../components/Footer/Footer';
import LeaderboardComponent from '../../components/LeaderboardComponent/LeaderboardComponent';
import Navbar from '../../components/Navbar/Navbar';
import style from './leaderboard.module.css';

/* LIMITA LA PLAYERI CU FETCH O SA FIE FIXED SI JOS BUTON DE SHOW MORE
   CAND DAI SHOW MORE DAI INCREASE LA LIMITA CU 10 DE EXEMPLU */

function Leaderboard() {
/*     const challengerQueueUrl = 'https://eun1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-2260e23f-1e63-4985-a96d-039ebb596721' */

  return (
    <div className={style.container}>
      
       <div className={style.nav}>
         <Navbar/>
       </div>

       <div className={style.leaderboard}>
         <LeaderboardComponent/>
       </div>

       <div className={style.footer}>
         <Footer/>
       </div>

    </div>
  )
}

export default Leaderboard