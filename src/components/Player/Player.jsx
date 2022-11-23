import React from 'react';
import style from './player.module.css';
import challenger from '../../assets/logos/challenger-logo.png'
/* import grandmaster from '../../assets/logos/grandmaster-logo.png';
import master from '../../assets/logos/master-logo.png' */

const Player = (props) => {
    const { summonerName, idx, leaguePoints, searchRegion, wins, losses, searchRank, defaultRank } = props
    const defaultRankSearch = searchRank === defaultRank ? defaultRank : searchRank.target.value;
  
    const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }


    /* need ternary for default values because <select defaultValue=''> doesn't return event at first */
  return (
    <tr className={style.tr}><td className={style.rank}>{idx+1}.</td><td className={style.name}>{summonerName}</td>
    <td className={style.lp}>{capitalize(defaultRankSearch)} {leaguePoints}LP<img src={challenger} width='45px' height='45px' alt='rank'></img></td>
    <td className={style.region}>{searchRegion === 'eun1' ? 'EUNE' : searchRegion.target.options[searchRegion.target.selectedIndex].text}</td>
    <td className={style.wins}>{wins}</td>
    <td className={style.losses}>{losses}</td>
    </tr>
  )
}

export default Player