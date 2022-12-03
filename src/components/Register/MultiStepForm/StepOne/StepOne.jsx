import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { registerSchema, StepOneSchema } from '../../../../schemas/schemas';
import { stepOneSchema } from '../../../../schemas/StepOneSchema';
import style from './stepOne.module.css'


  const StepOne = (props) => {
  const { nextStepHandlerCheckEmail, registerData, emailError } = props

  const onSubmit = (values) => {
    nextStepHandlerCheckEmail(values)
  }

  const formik = useFormik({
      initialValues: {
        email: registerData.email,
        password: registerData.password,
        confirmPassword: registerData.confirmPassword
      },
  validationSchema: stepOneSchema,
  validateOnMount: false,
  validateOnBlur: false,
  onSubmit,
})

const onInvalidEmail = (formik.errors.email || emailError) && formik.touched.email ? `${style['input-error']}` : '';
const emailErrorMsg = (formik.errors.email || emailError) && formik.touched.email ? `${style['error-msg']}` : `${style.untouched}`;
const onInvalidPassword = formik.errors.password && formik.touched.password ? `${style['input-error']}` : '';
const passwordErrorMsg = formik.errors.password && formik.touched.password ? `${style['error-msg']}` : `${style.untouched}`;
const onInvalidPasswordConfirm = formik.errors.confirmPassword && formik.touched.confirmPassword ? `${style['input-error']}` : '';
const passwordConfirmErrorMsg = formik.errors.confirmPassword && formik.touched.confirmPassword ? `${style['error-msg']}` : `${style.untouched}`;



  return (
    <form onSubmit={formik.handleSubmit} className={style['register-inputs']}>
         <div>
            <input id='email'
            onBlur={formik.handleBlur}
            className={onInvalidEmail}
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            type='text'/>
            <i className="fa-solid fa-envelope"></i>
            <p className={emailErrorMsg}>{formik.errors.email || emailError}</p>
          </div>
          <div>
            <input className={onInvalidPassword}
            id='password'
            placeholder='Password'
            onBlur={formik.handleBlur}
            value={formik.values.password}
            onChange={formik.handleChange} 
            type='password'/>
            <i className="fa-solid fa-lock"></i>
            <p className={passwordErrorMsg}>{formik.errors.password}</p>
          </div>
          <div>
            <input className={onInvalidPasswordConfirm}
            id='confirmPassword'
            placeholder='Confirm Password'
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange} 
            type='password'/>
            <i className="fa-solid fa-lock"></i>
            <p className={passwordConfirmErrorMsg}>{formik.errors.confirmPassword}</p>
          </div>
          <button className={style.next} type='submit'>Next</button>
    </form>
  )
}

export default StepOne