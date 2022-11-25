import React from 'react';
import style from './roleItem.module.css'

const RoleItem = (props) => {
    const { role } = props
  return (
    <li className={style.role}>{ role }</li>
  )
}

export default RoleItem