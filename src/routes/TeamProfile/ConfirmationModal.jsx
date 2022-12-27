import style from "./confirmationModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ setIsDeleting }) => {
  return (
    <div onClick={() => setIsDeleting(false)} className={style.backdrop}></div>
  );
};

const Overlay = ({ deletePostHandler, setIsDeleting }) => {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Are you sure?</h2>
        </div>
        <div className={style.buttons}>
          <button onClick={deletePostHandler} className={style["delete-btn"]}>
            Delete
          </button>
          <button
            onClick={() => setIsDeleting(false)}
            className={style["cancel-btn"]}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ConfirmationModal = ({ deletePostHandler, setIsDeleting }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop setIsDeleting={setIsDeleting} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          deletePostHandler={deletePostHandler}
          setIsDeleting={setIsDeleting}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ConfirmationModal;
