import React from 'react';
import style from './loginform.module.css';
import logo from '../../assets/images/league-arena-login-logo-transformed.png'
import { Link } from 'react-router-dom';

const LoginForm = () => {

  const loginBtnHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
  }

  return (
    <div className={style.container}>

      <div className={style.logo}>
        <img src={logo} width='500' height='400'alt='website-logo' />
      </div>

      <form className={style['login-inputs']}>
        <div>
            <input placeholder='Username / Email' type='text' />
            <i className="fa-solid fa-user"></i>
          </div>
          <div>
            <input placeholder='Password' type='password' />
            <i className="fa-solid fa-lock"></i>
          </div>
          <button onClick={loginBtnHandler} className={style['login-btn']}>
          <span><Link to='/home'></Link>Login</span> {/* Putting text inside link tag screws up glow effect, don't change cause this works as intended. */}
        </button>
      </form>

      <div className={style.register}>
        <p>Forgot Password?</p>
        <p>Don't have an account? Register <span>here</span></p>
      </div>

    </div>
  )
}

export default LoginForm