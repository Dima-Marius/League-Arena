import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineLike } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import ApiKeyContext from '../../context/ApiKeyContext';
import style from './teamPostCard.module.css';

const TeamPostCard = (props) => {
    const { title, content, author, date, time, likes, setTeamData, comments, teamData, likeUpdate} = props;
    const API_KEY_CTX = useContext(ApiKeyContext) 
    const [authorIcon, setAuthorIcon] = useState(JSON.parse(localStorage.getItem(author)) ?? 7)
    const [like, setLike] = useState(false)
    const [commentCount, setCommentCount] = useState(comments.length ?? 0)
    const [likeCount, setLikeCount] = useState(likes.length)
 
    const userProfileUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${author}?api_key=${API_KEY_CTX.apiKey}`
    const profilePictureUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${JSON.parse(localStorage.getItem(author)) ?? authorIcon}.png`

    const addLike = {discussions: [...teamData.discussions]}
    const removeLike = {likes: likes.filter(like => like !== author)}

    const likeHandler = () => {
        setLike(!like);
        setTeamData({...teamData, discussions: [...teamData.discussions, ]})
         fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(like ? addLike : removeLike)
        })
        console.log(title,content,author,date,time)
        likeUpdate(!like);
    }

     useEffect(() => {
      if (!localStorage.getItem(author)) {
            fetch(userProfileUrl)
            .then(res => res.json())
            .then(data => localStorage.setItem(author,JSON.stringify(data.profileIconId)))
            .finally(() => setAuthorIcon(JSON.parse(localStorage.getItem(author))));
          }
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
              <i className={style.date}>Posted on {date}, {time}</i>
            </p>
            { 
            <p className={style.delete}>
              <button className={style['delete-btn']}>
              <i className="fa-solid fa-trash-can"></i>
              </button>
            </p>
            }
        </div>
        <div className={style.data}>
          <p className={style.title}>
            {title}
            </p>
          <p className={style.description}>{content}</p>
        </div>
        <div className={style['post-footer']}>
          <ul className={style.likes}>{likes.length !== 0 && <p>Liked by</p>} {likes.length !== 0 ? likes.map(item => <li>{item}</li>) : 'No likes yet'}</ul>
        </div>
        <ul className={style.buttons}>
          <li className={style.like}>
            <button className={style['like-btn']} onClick={likeHandler}>
              {!like ? <AiOutlineLike size='25'/> : <AiFillLike size='25'/>}
              <span>Like</span>
            </button>
          </li>
          <li>
            <button className={style['comment-btn']}>
              <i className="fa-regular fa-comment"></i>
              <span>Comment</span>
            </button>
          </li>
          <span className={style.comments}>{commentCount} comments</span>
        </ul>
    </div>
  )
}

export default TeamPostCard