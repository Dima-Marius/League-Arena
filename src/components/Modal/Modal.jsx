import style from './modal.module.css'
import React from 'react';
import ReactDOM from 'react-dom';
import CreatePostModal from '../../routes/TeamProfile/CreatePostModal';

const Backdrop = ({ handleModalClose }) => {
    return (
        <div onClick={() => handleModalClose(false)} className={style.backdrop}></div>
    )
}

const Overlay = ({handleModalClose, teamData}) => {
    return (
        <div className={style.overlay}>
            <CreatePostModal teamData={teamData} handleModalClose={handleModalClose} />
        </div>
    )
}

const Modal = ({ handleModalClose, teamData }) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop handleModalClose={handleModalClose}/>, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Overlay teamData={teamData} handleModalClose={handleModalClose}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default Modal;