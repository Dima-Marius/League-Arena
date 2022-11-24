import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import style from './about.module.css';

const about = () => {
  return (
    <div className={style.container}>
    <div className={style.nav}>
        <Navbar/>
    </div>
    <div className={style.content}>
    </div>
    <div className={style.footer}>
    <Footer/>
    </div>
    
</div>
  )
}

export default about