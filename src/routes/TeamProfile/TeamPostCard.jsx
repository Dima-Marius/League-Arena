import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ApiKeyContext from '../../context/ApiKeyContext';
import style from './teamPostCard.module.css';
import { AiOutlineLike } from 'react-icons/ai'

const TeamPostCard = (props) => {
    const { title, description, author } = props;
    const API_KEY_CTX = useContext(ApiKeyContext) 
    const [authorIcon, setAuthorIcon] = useState(JSON.parse(localStorage.getItem(author)) ?? 7)
 
    const userProfileUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${author}?api_key=${API_KEY_CTX.apiKey}`
    const profilePictureUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${JSON.parse(localStorage.getItem(author)) ?? authorIcon}.png`
  
    const currentDate = new Date();

     useEffect(() => {
            fetch(userProfileUrl)
            .then(res => res.json())
            .then(data => localStorage.setItem(author,JSON.stringify(data.profileIconId)))
            .finally(() => setAuthorIcon(JSON.parse(localStorage.getItem(author))));
    },[author,userProfileUrl,authorIcon.profileIconId,authorIcon])

  return (
    <div className={style.post}>
        <div className={style.author}>
          <div className={style['author-info']}>
            <p>
              <img src={profilePictureUrl} height='30px' width='30px' alt=''/>
            </p>
            <p className={style['author-name']}>
              {author}
            </p>
          </div>
            <p>
              <i className={style.date}>Posted on {currentDate.toLocaleDateString()}, {currentDate.toLocaleTimeString()}</i>
            </p>
        </div>
        <div className={style.data}>
          <p className={style.title}>
            {title}
            </p>
          <p className={style.description}>{description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quo fugit consequuntur quam magnam dignissimos praesentium neque velit aliquid incidunt dolor, repellendus porro illum libero delectus soluta! Ducimus quae voluptatibus quibusdam commodi libero id debitis dignissimos tempore expedita nam mollitia eaque facilis, explicabo nulla perferendis qui autem. Numquam, deserunt facere.</p>
        </div>
        <div className={style['post-footer']}>
          <p>Liked by <span>PSG Shady</span></p>
        </div>
        <ul className={style.buttons}>
          <li className={style['like-btn']}>
            <button>
              <AiOutlineLike size='25'/>
              <span>Like</span>
            </button>
          </li>
          <li>
            <button>
              <i className="fa-regular fa-comment"></i>
              <span>Comment</span>
            </button>
          </li>
        </ul>
    </div>
  )
}

export default TeamPostCard