import React from 'react';
import style from './commentCard.module.css';

const CommentCard = ({ author, content }) => {

  return (
    <li className={style.li}>
        <div>
            <img alt='' width='30px' height='30px' src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${JSON.parse(localStorage.getItem(author))}.png`} />
            <p className={style.name}>{author}</p>
        </div>
            <p className={style.content}>{content}</p>
    </li>
  )
}

export default CommentCard