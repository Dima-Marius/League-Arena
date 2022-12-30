import style from "./commentDeleteModal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";

const Backdrop = ({ isDeletingComment, setIsDeletingComment }) => {
  return (
    <div
      onClick={() => setIsDeletingComment(!isDeletingComment)}
      className={style.backdrop}
    ></div>
  );
};

const Overlay = ({
  isDeletingComment,
  setIsDeletingComment,
  teamData,
  setTeamData,
  id,
}) => {
  const postId = useParams();
  
  const commentDeleteHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        discussions: teamData.discussions.map((item) => {
          if (item.id === parseInt(postId.id)) {
            return {
              ...item,
              comments: item.comments.filter((comment) => comment.id !== parseInt(id)),
            };
          } else {
            return item;
          }
        }),
    })
    }).finally(() =>
        fetch(`http://localhost:3500/createdTeams/${teamData.id}`)
          .then(res => res.json())
          .then(data => setTeamData(data))
          .then(setIsDeletingComment(!isDeletingComment)))
     }

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Are you sure you want to delete this comment?</h2>
        </div>
        <div className={style.buttons}>
          <button onClick={commentDeleteHandler} className={style["delete-btn"]}>
            Delete
          </button>
          <button
            onClick={() => setIsDeletingComment(!isDeletingComment)}
            className={style["cancel-btn"]}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const CommentDeleteModal = ({
  isDeletingComment,
  setIsDeletingComment,
  teamData,
  setTeamData,
  id,
}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          isDeletingComment={isDeletingComment}
          setIsDeletingComment={setIsDeletingComment}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          teamData={teamData}
          setTeamData={setTeamData}
          isDeletingComment={isDeletingComment}
          setIsDeletingComment={setIsDeletingComment}
          id={id}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default CommentDeleteModal;
