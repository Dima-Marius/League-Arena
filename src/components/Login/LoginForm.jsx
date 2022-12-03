import React, { useContext, useState } from 'react';
import style from './loginform.module.css';
import logo from '../../assets/images/league-arena-login-logo-transformed.png'
import AuthContext from '../../store/AuthContext';
import { useFormik } from 'formik';
import { basicSchema } from '../../schemas/schemas';
import { useNavigate } from 'react-router-dom';
import { BiMessageError } from 'react-icons/bi'
import { FiEdit3 } from 'react-icons/fi'

const LoginForm = ({ userClickedRegister }) => {

const authCtx = useContext(AuthContext);
const loginUrl = 'http://localhost:3500/login';
const redirect = useNavigate()
const [errorMsg, setErrorMsg] = useState('')
let isUserRegistered = true;

  const onRegisterClick = () => {
    isUserRegistered ? isUserRegistered = false : isUserRegistered = true;
    userClickedRegister(isUserRegistered);
  }

  const login = (account) => {
      fetch(loginUrl, {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'Content-type' : 'application/json',
      }
    }).then(response => {
      if (response.status === 400) {
        setErrorMsg('Invalid email or password');
        throw new Error('Invalid credentials.');
      } return response
    })
    .then(response => response.json())
      .then(data => {
      authCtx.setAuth(data);
      window.localStorage.setItem('accessToken', data.accessToken);
    }).then( () => redirect('/home'))
    .catch(error => console.log(error))
  }

  const onSubmit = (values) => {
    login(values);
  }
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: basicSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  })

  const onInvalidEmail = (formik.errors.email && formik.touched.email) || errorMsg ? `${style['email-error']}` : '';
  const onInvalidPassword = (formik.errors.password && formik.touched.password) || errorMsg  ? `${style['password-error']}` : '';

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <img src={logo} width='500' height='400'alt='website-logo' />
      </div>
      <form onSubmit={formik.handleSubmit} autoComplete='off' className={style['login-inputs']}>
        <div>
            <input id='email'
            className={onInvalidEmail}
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            type='text'/>
            <i className="fa-solid fa-user"></i>
            <p className={style['invalid-input']}>{formik.errors.email}</p>
          </div>
          <div>
            <input className={onInvalidPassword}
            id='password'
            placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange} 
            type='password'/>
            <i className="fa-solid fa-lock"></i>
            <p className={style['invalid-input']}>{formik.errors.password}</p>
          </div>
          <button type='submit' className={style['login-btn']}>
          <span>Login</span>
        </button>
      </form>
      <div className={style.register}>
      <p className={style['invalid-account']}>{errorMsg}
      {errorMsg && <span><BiMessageError color='red'/></span>}
      </p>
        <p>Forgot Password?</p>
        <p>Don't have an account? <span onClick={onRegisterClick}>Register now!</span><FiEdit3 color='red'/></p>
      </div>
    </div>
  )
}

export default LoginForm



