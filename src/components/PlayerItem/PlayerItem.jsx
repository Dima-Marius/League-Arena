import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiKeyContext from '../../context/ApiKeyContext';
import style from './playeritem.module.css';

const PlayerItem = (props) => {
      
      const {playerName} = props
      const API_KEY_CTX = useContext(ApiKeyContext)
      const [summonerInfo, setSummonerInfo] = useState(JSON.parse(localStorage.getItem(playerName)) ?? 7)

      const summonerUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${playerName}?api_key=${API_KEY_CTX.apiKey}`
      const profileIconUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${JSON.parse(localStorage.getItem(playerName)) ?? summonerInfo}.png`

      useEffect(() => {
            if (!localStorage.getItem(playerName)) {
                 fetch(summonerUrl)
                 .then(response => response.json())
                 .then(data => localStorage.setItem(playerName,JSON.stringify(data.profileIconId)))
                 .finally(() => setSummonerInfo(JSON.parse(localStorage.getItem(playerName))))
                 .catch(localStorage.setItem(playerName,JSON.stringify(null)))
            }
      },[playerName,summonerUrl])
      
  return (
        <li className={style.player}>
            <Link to={`/userProfile/${playerName}`}>
            <img src={profileIconUrl} width='35px' height='35px' alt=''/>
            <p>{playerName}</p>
            </Link>
        </li>
  )
}

export default PlayerItem