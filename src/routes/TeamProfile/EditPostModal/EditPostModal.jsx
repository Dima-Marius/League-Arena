import style from "./editPostModal.module.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const Backdrop = ({ setIsEditing, isEditing }) => {
  return (
    <div
      onClick={() => setIsEditing(!isEditing)}
      className={style.backdrop}
    ></div>
  );
};

const Overlay = ({title, content, id, setTeamData, teamData, isEditing, setIsEditing, postEditHandler}) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newContent, setNewContent] = useState(content);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        postEditHandler(newTitle, newContent);
    };

    const titleHandler = (e) => {
        setNewTitle(e.target.value);
    };

    const contentHandler = (e) => {
        setNewContent(e.target.value);
    };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <h2>EDIT POST <span><i className="fa-solid fa-pencil"></i></span></h2>
        <form onSubmit={formSubmitHandler} className={style.form}>
          <input
            type="text"
            value={newTitle}
            onChange={titleHandler}
            placeholder="Title"
          />
          <textarea
            onChange={contentHandler}
            value={newContent}
            rows="6"
            cols="75"
            placeholder="Content"
          />
          <div className={style.buttons}>
           <button className={style.submit} type="submit">
             Submit
           </button>
           <button onClick={() => setIsEditing(!isEditing)}className={style.cancel}>
             Cancel
           </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const EditPostModal = ({
  setIsEditing,
  isEditing,
  title,
  content,
  id,
  teamData,
  setTeamData,
  postEditHandler
}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop setIsEditing={setIsEditing} isEditing={isEditing} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          postEditHandler={postEditHandler}
          setIsEditing={setIsEditing}
          isEditing={isEditing}
          title={title}
          content={content}
          id={id}
          teamData={teamData}
          setTeamData={setTeamData}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default EditPostModal;
