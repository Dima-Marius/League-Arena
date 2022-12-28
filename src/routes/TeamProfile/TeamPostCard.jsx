import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import ApiKeyContext from "../../context/ApiKeyContext";
import style from "./teamPostCard.module.css";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import ConfirmationModal from "./ConfirmationModal";
import EditPostModal from "./EditPostModal/EditPostModal";

const TeamPostCard = (props) => {
  const {
    title,
    id,
    content,
    author,
    date,
    time,
    likes,
    comments,
    teamData,
    setTeamData,
  } = props;
  const user = useGetUserInfo();
  const API_KEY_CTX = useContext(ApiKeyContext);
  const [authorIcon, setAuthorIcon] = useState(
    JSON.parse(localStorage.getItem(author)) ?? 7
  );

  /* Likes comments */
  const [like, setLike] = useState(likes.includes(user.ign));
  const [commentCount, setCommentCount] = useState(comments?.length ?? 0);

  /* User Actions */
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  /* user info */
  const userProfileUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${author}?api_key=${API_KEY_CTX.apiKey}`;
  const profilePictureUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${
    JSON.parse(localStorage.getItem(author)) ?? authorIcon
  }.png`;


  /* like and unlike functionality */
  const addLike = teamData.discussions.map((item) => {
    if (item.id === id && !item.likes.includes(user.ign)) {
      return { ...item, likes: [...item.likes, user.ign] };
    } else {
      return item;
    }
  });

  const removeLike = teamData?.discussions?.map((item) => {
    if (item.id === id) {
      return { ...item, likes: item.likes.filter((like) => like !== user.ign) };
    } else {
      return item;
    }
  });


  /* delete post  */
  const deletePostHandler = () => {
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        discussions: teamData.discussions.filter((item) => item.id !== id),
      }),
    }).finally(() => {
      fetch(`http://localhost:3500/createdTeams?teamName=${teamData.teamName}`)
        .then((res) => res.json())
        .then((data) => setTeamData(data[0]))
        .then(setIsDeleting(false));
    });
  };

  /* like and unlike functionality */
  const likeHandler = () => {
    setLike(!like);
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        !like ? { discussions: addLike } : { discussions: removeLike }
      ),
    }).finally(() =>
      fetch(`http://localhost:3500/createdTeams?teamName=${teamData.teamName}`)
        .then((res) => res.json())
        .then((data) => setTeamData(data[0]))
    );
  };

  /* get info */
  useEffect(() => {
    if (!localStorage.getItem(author)) {
      fetch(userProfileUrl)
        .then((res) => res.json())
        .then((data) =>
          localStorage.setItem(author, JSON.stringify(data.profileIconId))
        )
        .finally(() => setAuthorIcon(JSON.parse(localStorage.getItem(author))));
    }
  }, [author, userProfileUrl, authorIcon.profileIconId, authorIcon]);

  const postEditHandler = (title,content) => {
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
          discussions: teamData.discussions.map((item) => {
            if (item.id === id) {
              return { ...item, title: title, content: content };
            } else {
              return item;
            }
          }),
        }),
      }).finally(() => {
        fetch(`http://localhost:3500/createdTeams?teamName=${teamData.teamName}`)
          .then((res) => res.json())
          .then((data) => setTeamData(data[0]))
          .then(setIsEditing(false));
      }
    );
  };

  return (
    <div className={style.post}>
      <div className={style.author}>
        <div className={style["author-info"]}>
          <p>
            <img src={profilePictureUrl} height="30px" width="30px" alt="" />
          </p>
          <p className={style["author-name"]}>{author}</p>
        </div>
        <p>
          <i className={style.date}>
            Posted on {date}, {time}
          </i>
        </p>
        {
          <p className={style.delete}>
            {author === user.ign && <button onClick={() => setIsEditing(!isEditing)} className={style['edit-btn']}>
            <i className="fa-solid fa-pen-to-square"></i>
            </button>}
            {(author === user.ign || teamData.owner === user.ign)  && (
              <button
                onClick={() => setIsDeleting(true)}
                className={style["delete-btn"]}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            )}
          </p>
        }
      </div>
      <div className={style.data}>
        <p className={style.title}>{title}</p>
        <p className={style.description}>{content}</p>
      </div>
      <div className={style["post-footer"]}>
        <ul className={style.likes}>
          {likes?.length !== 0 && <p>Liked by</p>}
          {likes?.length !== 0
            ? likes.map((item) => (
                <li className={style.liked} key={item}>
                  {item} <span>,</span>
                </li>
              ))
            : "No likes yet"}
        </ul>
      </div>
      <ul className={style.buttons}>
        <li className={style.like}>
          <button className={style["like-btn"]} onClick={likeHandler}>
            {!like ? <AiOutlineLike size="25" /> : <AiFillLike size="25" />}
            <span>Like</span>
          </button>
        </li>
        <li>
          <button onClick={() => console.log(title)}className={style["comment-btn"]}>
            <i className="fa-regular fa-comment"></i>
            <span>Comment</span>
          </button>
        </li>
        <span className={style.comments}>{commentCount} comments</span>
      </ul>
      <div>
        {isDeleting && (
          <ConfirmationModal
            deletePostHandler={deletePostHandler}
            setIsDeleting={setIsDeleting}
          />
        )}
        {isEditing && (
          <EditPostModal
            postEditHandler={postEditHandler}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            title={title}
            content={content}
            id={id}
            teamData={teamData}
            setTeamData={setTeamData}
          />
        )}

      </div>
    </div>
  );
};

export default TeamPostCard;
