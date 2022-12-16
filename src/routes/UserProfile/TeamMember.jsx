import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiKeyContext from '../../context/ApiKeyContext'
import style from './teamMember.module.css'

const TeamMember = ({memberName}) => {




  const API_KEY_CTX = useContext(ApiKeyContext)
  const [profileIcon, setProfileIcon] = useState(JSON.parse(localStorage.getItem(memberName)) ?? 7)
  const playerUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${memberName}?api_key=${API_KEY_CTX.apiKey}`
  
  useEffect(() => {
    if (!localStorage.getItem(memberName)) {
      fetch(playerUrl)
      .then(response => response.json())
      .then(data => localStorage.setItem(memberName,JSON.stringify(data.profileIconId)))
      .finally(() => setProfileIcon((JSON.parse(localStorage.getItem(memberName)) ?? 1)))
      .catch(localStorage.setItem(memberName,JSON.stringify(null)))
   }
  },[memberName,playerUrl])

  useEffect(() => {

  },[])


  return (
    <li className={style.li}>
        <Link to={`/userProfile/${memberName}`}>{memberName} <img width='40px' height='40px' className={style.profilepic} alt='' src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${profileIcon}.png`}></img></Link>
    </li>
  )
}

export default TeamMember