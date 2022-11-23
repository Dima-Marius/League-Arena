import React from 'react';
import style from './player.module.css';
import challengerLogo from '../../assets/images/challenger-logo.png'

const Player = (props) => {
    const { summonerName, idx, leaguePoints, searchRegion, wins, losses } = props

    /* need ternary for default values because <select defaultValue=''> doesn't return event at first */
  return (
    <tr className={style.tr}><td className={style.rank}>{idx+1}.</td><td className={style.name}>{summonerName}</td>
    <td className={style.lp}>Challenger {leaguePoints}LP<img src={challengerLogo} width='40px' height='40px' alt='challenger'></img></td>
    <td className={style.region}>{searchRegion === 'eun1' ? 'EUNE' : searchRegion.target.options[searchRegion.target.selectedIndex].text}</td>
    <td className={style.wins}>{wins}</td>
    <td className={style.losses}>{losses}</td>
    </tr>
  )
}

export default Player