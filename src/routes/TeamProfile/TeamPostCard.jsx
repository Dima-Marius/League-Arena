import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ApiKeyContext from '../../context/ApiKeyContext';
import style from './teamPostCard.module.css';

const TeamPostCard = (props) => {
    const { title, description, author } = props;

    const API_KEY_CTX = useContext(ApiKeyContext)

    const [authorIcon, setAuthorIcon] = useState(localStorage.getItem(author) ?? 7)

    const userProfileUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${author}?api_key=${API_KEY_CTX.apiKey}`
    const profilePictureUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${authorIcon ?? localStorage.getItem(author)}.png`

    useEffect(() => {
        if (!localStorage.getItem(author)) {
            fetch(userProfileUrl)
            .then(res => res.json())
            .then(data => localStorage.setItem(author, JSON.stringify(data.profileIconId)))
        }
    },[author,userProfileUrl])
    
  return (
    <div className={style.post}>
        <div>
            <p><img src={profilePictureUrl} height='30px' width='30px' alt=''/></p>
          <p>{author}</p>
        </div>
        <p>{title}</p>
        <p>{description}</p>
    </div>
  )
}

export default TeamPostCard