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
import { BiExit } from 'react-icons/bi'

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
    setRegisterData(prev => ({...prev, ...currentData}))
    setCurrentStep(prev => prev - 1)
  }

  const nextStepHandler = (currentData) => {
    setRegisterData(prev => ({...prev, ...currentData}))
    setCurrentStep(prev => prev + 1)
  }

  const checkExistingEmail = (email) => {
    if (users.length === 0) {
      fetch('http://localhost:3500/users')
      .then(response => response.json())
      .then(data => setUsers(data));
    }
    return (!users.find(item => item.email === email))
}

  const nextStepHandlerCheckEmail = (currentData) => {
    if (checkExistingEmail(currentData.email)) {
      setRegisterData(prev => ({...prev, ...currentData}))
      setCurrentStep(currentStep + 1)
    } else {
      console.log('already exists!!');
    }
  }
  
  const onSubmit = (currentData, actions) => {
    setRegisterData(prev => ({...prev, ...currentData}));
    register(currentData);
    setTimeout(() => {
      onRegisterClick();
    },3000)
  }


  /* onSubmit={(values, actions) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       actions.setSubmitting(false);
     }, 1000);
   }} */

  const steps = [
     <StepOne nextStepHandlerCheckEmail={nextStepHandlerCheckEmail} registerData={registerData}/>,
     <StepTwo prevStepHandler={prevStepHandler} registerData={registerData} nextStepHandler={nextStepHandler}/>,
     <StepThree prevStepHandler={prevStepHandler} onSubmit={onSubmit} registerData={registerData}/>
    ]

  return (
    <div className={style.container}>
{/*       <div className={style.logo}>
        <img src={logo} width='500' height='400'alt='website-logo' />
      </div> */}
      <div>
        <h2>REGISTER</h2>
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

