import React from 'react'
import style from './removeUserModal.module.css'
import ReactDOM from 'react-dom';

const Backdrop = ({userRemoveModal, setUserRemoveModal}) => {
    return (
        <div onClick={() => setUserRemoveModal(!userRemoveModal)} className={style.backdrop}></div>
    )
}

const Overlay = ({setUserRemoveModal, userRemoveModal, removeUserHandler}) => {
    return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Are you sure?</h2>
        </div>
        <div className={style.buttons}>
          <button onClick={removeUserHandler} className={style["delete-btn"]}>
            Delete
          </button>
          <button
            onClick={() => setUserRemoveModal(!userRemoveModal)}
            className={style["cancel-btn"]}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    )
}

const RemoveUserModal = ({ setUserRemoveModal, removeUserHandler, userRemoveModal }) => {
  return (
    <React.Fragment>
            {ReactDOM.createPortal(<Backdrop userRemoveModal={userRemoveModal} setUserRemoveModal={setUserRemoveModal}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Overlay setUserRemoveModal={setUserRemoveModal} userRemoveModal={userRemoveModal} removeUserHandler={removeUserHandler} />, document.getElementById('overlay-root'))}
    </React.Fragment>
  )
}

export default RemoveUserModal
