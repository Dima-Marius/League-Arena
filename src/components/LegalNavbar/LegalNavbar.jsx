import React from 'react';
import style from './legalnavbar.module.css'

const LegalNavbar = () => {
  return (
     <ul className={style.ul}>
      <li>SUPPORT</li>
      <li>PRIVACY NOTICE</li>
      <li>TERMS OF SERVICE</li>
      <li>COOKIE PREFFERENCES</li>
      <li>EN <i className="fa-solid fa-earth-americas"></i></li>
    </ul>
  )
}

export default LegalNavbar