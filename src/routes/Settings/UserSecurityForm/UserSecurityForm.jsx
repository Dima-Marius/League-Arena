import { useFormik } from 'formik';
import React from 'react';
import { passwordSchema } from '../../../schemas/PasswordSchema';
import { stepOneSchema } from '../../../schemas/StepOneSchema';
import style from './userSecurityForm.module.css'

const UserSecurityForm = (props) => {

  const { authCtx,userUrl,updateAuth,setUpdateAuth } = props

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
            email:authCtx.auth.user.email,
            password:values.password,
            confirmPassword:values.confirmPassword,
            firstName: authCtx.auth.user.firstName,
            lastName:authCtx.auth.user.lastName,
            ign: authCtx.auth.user.ign,
            region: authCtx.auth.user.region,
            role: authCtx.auth.user.role,
            rank: authCtx.auth.user.rank,
            id: authCtx.auth.user.id
        }}
      ))
    }

    const formik = useFormik({
        initialValues: {
          password: '',
          confirmPassword: '',
          
        },
    validationSchema: passwordSchema,
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
     <form onSubmit={formik.handleSubmit} className={style['register-inputs']}>
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
     <div className={style['btn-wrap']}>
       <button className={style.submit} type='submit'>Save Changes</button>
     </div>
    </form>
  </div>
  )
}

export default UserSecurityForm