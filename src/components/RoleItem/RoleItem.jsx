import React from 'react';
import { getRoleIcon } from '../../utils/getRoleIcon';
import style from './roleItem.module.css'

const RoleItem = (props) => {
    const { role } = props;

  return (
    <li className={style.role}>
      <p>
        {role} <span><img src={getRoleIcon(role)} width='20px' height='20px' alt=''/></span>
      </p>
      </li>
  )
}

export default RoleItem