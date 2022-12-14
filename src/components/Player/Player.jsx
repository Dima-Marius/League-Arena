import React, { useContext, useEffect, useState } from 'react';
import style from './player.module.css';
import challenger from '../../assets/logos/challenger-logo.png'
import grandmaster from '../../assets/logos/grandmaster-logo.png';
import master from '../../assets/logos/master-logo.png'
import ApiKeyContext from '../../context/ApiKeyContext';

const Player = (props) => {
    const API_KEY_CTX = useContext(ApiKeyContext)
    const { summonerName, idx, defaultRegionSearch, leaguePoints, searchRegion, wins, losses, searchRank, defaultRank } = props
    const [profileIcon, setProfileIcon] = useState(JSON.parse(localStorage.getItem(summonerName)) ?? 7)
    const defaultRankSearch = searchRank === defaultRank ? defaultRank : searchRank.target.value;
    const playerUrl = `https://${defaultRegionSearch}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${API_KEY_CTX.apiKey}`
    
    useEffect(() => {
      if (!localStorage.getItem(summonerName)) {
        fetch(playerUrl)
        .then(response => response.json())
        .then(data => localStorage.setItem(summonerName,JSON.stringify(data.profileIconId)))
        .finally(() => setProfileIcon((JSON.parse(localStorage.getItem(summonerName)) ?? 1)))
        .catch(localStorage.setItem(summonerName,JSON.stringify(null)))
     }
     if (localStorage.getItem(summonerName)) {
      setProfileIcon(JSON.parse(localStorage.getItem(summonerName)) ?? 7)
     }
    },[summonerName,playerUrl])

    const capitalize = (word) => {
      return word.charAt(0).toUpperCase() + word.slice(1)
    }

    const onRankChange = () => {
      if (defaultRankSearch === 'challenger') {
        return challenger
      }
      if (defaultRankSearch === 'grandmaster') {
        return grandmaster
      }
      if (defaultRankSearch === 'master') {
        return master
      } 
    }

    /* need ternary for default values because <select defaultValue=''> doesn't return event at first */
  return (
    <tr className={style.tr}><td className={style.rank}>{idx+1}.</td><td className={style.name}><img width='40px' height='40px' className={style.profilepic} alt='' src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIcon}.png`}></img>{summonerName}</td>
    <td className={style.lp}>{capitalize(defaultRankSearch)} {leaguePoints}LP<img src={onRankChange()} width='47px' height='47px' alt='rank'></img></td>
    <td className={style.region}>{searchRegion === 'eun1' ? 'EUNE' : searchRegion.target.options[searchRegion.target.selectedIndex].text}</td>
    <td className={style.wins}>{wins}</td>
    <td className={style.losses}>{losses}</td>
    </tr>
  )
}

export default Player