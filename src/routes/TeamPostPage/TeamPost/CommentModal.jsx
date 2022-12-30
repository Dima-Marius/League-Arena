import style from "./commentModal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import useGetUserInfo from "../../../hooks/useGetUserInfo";
import { useState } from "react";

const Backdrop = ({ isCommenting, setIsCommenting }) => {
  return (
    <div
      onClick={() => setIsCommenting(!isCommenting)}
      className={style.backdrop}
    ></div>
  );
};

const Overlay = ({
  isCommenting,
  setIsCommenting,
  teamData,
  setTeamData,
  setPost,
  id,
}) => {
  const user = useGetUserInfo();

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const [content, setContent] = useState("");

  const formHandler = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        discussions: teamData.discussions.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              comments: [
                ...item.comments,
                {
                  commentAuthor: user.ign,
                  date: date,
                  time: time,
                  commentContent: content,
                  id: item.comments.length + 1,
                },
              ],
            };
          } else {
            return item;
          }
        }),
      }),
    }).finally(() => {
      fetch(`http://localhost:3500/createdTeams?teamName=${teamData.teamName}`)
        .then((res) => res.json())
        .then((data) => setTeamData(data[0]))
        .then(setIsCommenting(false));
    });
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>COMMENT</h2>
        </div>
        <form onSubmit={submitHandler} className={style.form}>
          <textarea
            onChange={formHandler}
            value={content}
            rows="6"
            cols="75"
            placeholder=""
          />
          <div className={style.buttons}>
            <button className={style.submit} type="submit">
              Submit
            </button>
            <button
              onClick={() => setIsCommenting(!isCommenting)}
              className={style.cancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CommentModal = ({
  isCommenting,
  setIsCommenting,
  id,
  teamData,
  setCommentCount,
  setTeamData,
  setPost,
}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          isCommenting={isCommenting}
          setIsCommenting={setIsCommenting}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          isCommenting={isCommenting}
          setIsCommenting={setIsCommenting}
          teamData={teamData}
          id={id}
          setTeamData={setTeamData}
          setPost={setPost}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default CommentModal;
