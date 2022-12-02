import React, { useContext, useState } from 'react';
import style from './registerForm.module.css';
import logo from '../../assets/images/league-arena-login-logo-transformed.png'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { registerSchema } from '../../schemas/schemas';
import StepOne from './MultiStepForm/StepOne/StepOne';
import RegisterContext from '../../store/RegisterContext';
import StepTwo from './MultiStepForm/StepTwo/StepTwo';
import StepThree from './MultiStepForm/StepThree/StepThree';

const RegisterForm = ({ userClickedRegister }) => {

const registerCtx = useContext(RegisterContext)
const registerUrl = 'http://localhost:3500/register';
/* const redirect = useNavigate()
const [errorMsg, setErrorMsg] = useState('') */


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

/*   const onSubmit = (values) => {
    console.log(values)
    register(values);
  } */
/*   
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      ign: '',
      region: '',
      role:'',
      rank:''
    },
    validationSchema: registerSchema,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit
  })
 */
/*   const onInvalidPassword = formik.errors.password && formik.touched.password ? `${style['password-error']}` : ''; */


  const [currentStep, setCurrentStep] = useState(0);

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
    setCurrentStep(prev => prev -1)
  }

  const nextStepHandler = (currentData) => {
    setRegisterData(prev => ({...prev, ...currentData}))
    setCurrentStep(currentStep + 1)
  }


  const steps = [
     <StepOne nextStepHandler={nextStepHandler} registerData={registerData}/>,
     <StepTwo prevStepHandler={prevStepHandler} registerData={registerData} nextStepHandler={nextStepHandler}/>,
     <StepThree prevStepHandler={prevStepHandler} registerData={registerData}/>
    ]

  return (
    <div className={style.container}>
      <div className={style['login-inputs']}>
          {steps[currentStep]}
      </div>
      <button onClick={onRegisterClick}>back</button>
    </div>
  )
}

export default RegisterForm