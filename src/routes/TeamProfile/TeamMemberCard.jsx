import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiKeyContext from '../../context/ApiKeyContext';
import style from './teamMemberCard.module.css';

const TeamMemberCard = (props) => {
    const { memberName, owner } = props
    const API_KEY_CTX = useContext(ApiKeyContext)

    const [memberData, setMemberData] = useState({});
    const [userAvatar, setUserAvatar] = useState(JSON.parse(localStorage.getItem(memberName)) ?? 7)

    const userProfileUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${memberName}?api_key=${API_KEY_CTX.apiKey}`
    const profilePictureUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${userAvatar ?? 7}.png`

    useEffect(() => {
        fetch(userProfileUrl)
        .then(res => res.json())
        .then(data => {
            setMemberData(data)
            return data;
        })
        .then(data => localStorage.setItem(memberName,JSON.stringify(data.profileIconId)))
        .finally(() => setUserAvatar(JSON.parse(localStorage.getItem(memberName))))
        .catch(localStorage.setItem(memberName,JSON.stringify(null)))
    },[memberName,userProfileUrl,memberData?.profileIconId])

  return (
    <li className={style.li}>
        {owner === memberName && <p className={style.owner}>Leader <i className="fa-sharp fa-solid fa-crown"></i></p>}
        <Link to ={`/userProfile/${memberName}`}/>
        <img className={style.avatar} src={profilePictureUrl} height='170px' width='170px' alt=''/>
        <p className={style.name}>{memberName}</p>
        <p className={style.level}>lvl.{memberData?.summonerLevel}</p>
    </li>
  )
}

export default TeamMemberCard