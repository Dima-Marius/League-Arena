import React from 'react';
import style from './playeritem.module.css';

const PlayerItem = (props) => {
   const {playerName} = props
  return (
        <li className={style.player}>{playerName}</li>

  )
}

export default PlayerItem