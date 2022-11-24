import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import style from './notfound.module.css'
import notfound from '../../assets/images/error_404-v3.png'


const NotFound = () => {
  const [countdown, setCountdown] = useState(4)
  const pageName = '404 Not Found';
  const navigate = useNavigate();
 
useEffect(() => {
    document.title = pageName
    const countDownTimer = setInterval(() => {
      setCountdown(prev => prev - 1)
    },1000)
    const redirectTimer = setTimeout(() => {
      navigate('/home')
      }, 4000)
       return () => {
        clearTimeout(redirectTimer)
        clearInterval(countDownTimer)
      }
  }, [navigate]);

  return (
 <div className={style.container}>
    <div className={style.nav}>
      <Navbar/>
    </div>
    <div className={style.error}>
      <div className={style['error-img']}>
        <img src={notfound} height='900px' width='900px' alt='error message'></img>
      </div>
      <div className={style['error-msg']}>
      <p className={style.warning}>Woops! The page you are looking for does not exist.</p>
      <p className={style.p}>Redirecting in {countdown} {`${countdown === 1 ? 'second' : 'seconds'}`}...</p>
      <button onClick={() => navigate(-1)} className={style['back-btn']}>Return Home</button>
      </div>
      </div>
      
    <div className={style.footer}>
      <Footer/>
      </div>
 </div>
  )
}

export default NotFound