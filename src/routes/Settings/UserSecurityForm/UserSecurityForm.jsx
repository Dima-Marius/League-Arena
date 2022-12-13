import { useFormik } from 'formik';
import React from 'react';
import { stepOneSchema } from '../../../schemas/StepOneSchema';
import style from './userSecurityForm.module.css'

const UserSecurityForm = (props) => {

  const { authCtx,userUrl,userData,setUserData,updateAuth,setUpdateAuth } = props

  const onSubmit = (values) => {
    fetch(userUrl, {
    headers: {
        "Content-type": "application/json",
    },
    method: 'PATCH',
    body: JSON.stringify(values)
    }).then(setUpdateAuth({
        ...updateAuth,
        user: {
            email:values.email,
            password:values.password,
            confirmPassword:values.confirmPassword,
            firstName: values.firstName,
            lastName:values.lastName,
            ign: values.ign,
            region: values.region,
            role: values.role,
            rank: values.rank,
            id: authCtx.auth.user.id
        }}))}

    const formik = useFormik({
        initialValues: {
          password: '',
          confirmPassword: '',
          
        },
    validationSchema: stepOneSchema,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit,
    })

    const onInvalidPassword = formik.errors.password && formik.touched.password ? `${style['input-error']}` : '';
    const passwordErrorMsg = formik.errors.password && formik.touched.password ? `${style['error-msg']}` : `${style.untouched}`;
    const onInvalidPasswordConfirm = formik.errors.confirmPassword && formik.touched.confirmPassword ? `${style['input-error']}` : '';
    const passwordConfirmErrorMsg = formik.errors.confirmPassword && formik.touched.confirmPassword ? `${style['error-msg']}` : `${style.untouched}`;

  return (
  <div className={style['form-container']}>
      <h2>Security <span><i className="fa-solid fa-user-shield"></i></span></h2>
     <form className={style['register-inputs']}>
      <div>
        <input className={onInvalidPassword}
        id='password'
        placeholder='New Password'
        autoComplete="on"
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
        autoComplete="on"
        placeholder='Confirm New Password'
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        onChange={formik.handleChange} 
        type='password'/>
        <i className="fa-solid fa-lock"></i>
        <p className={passwordConfirmErrorMsg}>{formik.errors.confirmPassword}</p>
     </div>
     <button className={style.submit} type='submit'>Change Password</button>
    </form>
  </div>
  )
}

export default UserSecurityForm