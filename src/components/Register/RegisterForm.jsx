import React, { useState } from 'react';
import style from './registerForm.module.css';
import logo from '../../assets/images/league-arena-login-logo-transformed.png'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../../schemas/schemas';

const RegisterForm = ({ userClickedRegister }) => {

const registerUrl = 'http://localhost:3500/register';
const redirect = useNavigate()
const [errorMsg, setErrorMsg] = useState('')

  const onRegisterClick = () => {
    let isUserRegistered = false;
    isUserRegistered ? isUserRegistered = false : isUserRegistered = true;
    userClickedRegister(isUserRegistered);
  }

  const register = (account) => {
      fetch(registerUrl, {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        'Content-type' : 'application/json',
      }
    }).catch(error => console.log(error))
  }

  const onSubmit = (values) => {
    register(values);
  }
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      IGN: '',
      Region: '',
    },
    validationSchema: registerSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit
  })

  const onInvalidEmail = (formik.errors.email && formik.touched.email) || errorMsg ? `${style['email-error']}` : '';
  const onInvalidPassword = (formik.errors.password && formik.touched.password) || errorMsg  ? `${style['password-error']}` : '';

  return (
    <div className={style.container}>

      <form onSubmit={formik.handleSubmit} autoComplete='off' className={style['login-inputs']}>
        <div className={style.left}>
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
        </div>
        <div className={style.right}>
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
        </div>
          <button type='submit' className={style['login-btn']}>
          <span>Register</span>
        </button>
        
      </form>
      <button onClick={onRegisterClick}>back</button>
    </div>
  )
}

export default RegisterForm