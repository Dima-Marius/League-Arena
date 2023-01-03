import React, { useContext, useEffect, useState } from 'react';
import style from './registerForm.module.css';
import logo from '../../assets/images/league-arena-login-logo-transformed.png'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../../schemas/schemas';
import StepOne from './MultiStepForm/StepOne/StepOne';
import StepTwo from './MultiStepForm/StepTwo/StepTwo';
import StepThree from './MultiStepForm/StepThree/StepThree';
import { FaAcquisitionsIncorporated, FaUserLock } from 'react-icons/fa';
import { BiExit } from 'react-icons/bi';
import { AiFillCheckCircle } from 'react-icons/ai';

const RegisterForm = ({ userClickedRegister }) => {

const registerUrl = 'http://localhost:3500/register';

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

  const [currentStep, setCurrentStep] = useState(0);
  const [users, setUsers] = useState([])
  const [clickedSubmit, setClickedSubmit] = useState(false)
  const [emailError, setEmailError] = useState('')
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    ign: '',
    region: '',
    role: '',
    rank: '',
})

  const prevStepHandler = (currentData) => {
    setCurrentStep(prev => prev - 1)
  }

  const nextStepHandler = (currentData) => {
    setRegisterData(prev => ({...prev, ...currentData}))
    setCurrentStep(prev => prev + 1)
  }
  
/*   const nextStepHandlerCheckEmail = (currentData) => {
    if (checkExistingEmail(currentData.email)) {
      setRegisterData(prev => ({...prev, ...currentData}))
      setCurrentStep(currentStep + 1)
    } else {
      setEmailError('Email already exists.');
    }
  }

  const checkExistingEmail = (email) => {
     if (users.length === 0) {
      fetch('http://localhost:3500/users')
      .then(response => response.json())
      .then(data => setUsers(data))
    }
    return (!users.find(item => item.email === email))
} */

const checkExistingEmail = async (email) => {
  let users_list = users;
  if (users_list.length === 0) {
    // returning the promise
    const response = await fetch('http://localhost:3500/users')
    users_list = await response.json();
    setUsers(users_list); // a side effect
  }
  return !users_list.find(item => item.email === email);  
}

const nextStepHandlerCheckEmail = async (currentData) => {
  if (await checkExistingEmail(currentData.email)) {
    setRegisterData(prev => ({...prev, ...currentData}));
    setCurrentStep(currentStep + 1);
  } else {
    setEmailError('Email already exists.');
  }
}


/* Animation bar effect related */
const [animationStyle, setAnimationStyle] = useState('black')
useEffect(()=> {
  const animate = setTimeout(() => {
    setAnimationStyle('rgb(114, 224, 228)')
  },510)
  return () => clearTimeout(animate);
},[])

const leftFillerCompleted = currentStep > 0 ? `${style['filler-left']}` : `${style['filler-reduce']}`
const rightFillerCompleted = currentStep === 2 ? `${style['filler-right']}` : `${style['filler-reduce']}`
/* Animation bar effect related */

  const steps = [
     <StepOne emailError={emailError} nextStepHandlerCheckEmail={nextStepHandlerCheckEmail} registerData={registerData}/>,
     <StepTwo prevStepHandler={prevStepHandler} registerData={registerData} nextStepHandler={nextStepHandler}/>,
     <StepThree prevStepHandler={prevStepHandler} setClickedSubmit={setClickedSubmit} setCurrentStep={setCurrentStep} onRegisterClick={onRegisterClick} register={register} setRegisterData={setRegisterData} registerData={registerData}/>
      ]

  return (
    <div className={style.container}>
      <div>
        <h2>REGISTER</h2>
      </div>
        <div className={style['progress-bar-container']}>
          <span>
            {currentStep === 0 ? <p className={style['progress-num']}>1</p> : <span className={style.check}><i className="fa-solid fa-circle-check"></i></span>}
          </span>
          <div className={style['progress-line']}>
            <div style={{background: `${animationStyle}`}}className={leftFillerCompleted}></div>
          </div>
          <span>
            {currentStep < 2 ? <p className={style['progress-num']}>2</p> : <span className={style.check}><i className="fa-solid fa-circle-check"></i></span>}
          </span>
          <div className={style['progress-line']}>
          <div style={{background: `${animationStyle}`}} className={rightFillerCompleted}></div>
          </div>
          <span>
            {clickedSubmit === false ? <p className={style['progress-num']}>3</p> : <span className={style.check}><i className="fa-solid fa-circle-check"></i></span>}
          </span>
        </div>
      <div className={style['login-inputs']}>
          {steps[currentStep]}
      </div>
        <button className={style.return} onClick={onRegisterClick}>
          Back to login <span><BiExit/></span>
          </button>
    </div>
  )
}

export default RegisterForm




/* <div className={style[`${['filler-right']} ${rightFillerCompleted}`]}></div>
<div className={style[`${['filler-left']} ${leftFillerCompleted}`]}></div>
*/