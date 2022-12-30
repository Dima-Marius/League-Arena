import React from "react";
import { useState } from "react";
import style from "./commentCard.module.css";
import CommentDeleteModal from "./CommentDeleteModal";

const CommentCard = ({ author, content, date, time, /* isDeletingComment, setIsDeletingComment, */ id, teamData, setTeamData }) => {
  const [isDeletingComment, setIsDeletingComment] = useState(false);
  return (
    <li className={style.li}>
      <div className={style["delete-container"]}>
        <button onClick={() => setIsDeletingComment(!isDeletingComment)} className={style.delete}>
          <i className="fa-solid fa-xmark"/>
        </button>
      </div>
      <div className={style.wrapper}>
       <div className={style.author}>
         <img
           alt="profile icon"
           width="30px"
           height="30px"
           src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${JSON.parse(
             localStorage.getItem(author)
           )}.png`}
         />
         <p className={style.name}>{author}</p>
       </div>
       <div className={style['date-container']}>
         <p className={style.date}>commented on {date}, {time}</p>
       </div>
      </div>
      <p className={style.content}>{content}</p>
      {isDeletingComment && (
          <CommentDeleteModal
            isDeletingComment={isDeletingComment}
            setIsDeletingComment={setIsDeletingComment}
            id={id}
            teamData={teamData}
            setTeamData={setTeamData}
          />
        )}
    </li>
  );
};

export default CommentCard;
