import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import useGetUserInfo from '../../hooks/useGetUserInfo';
import { registerSchema } from '../../schemas/schemas';
import style from './userDataForm.module.css'
import AuthContext from '../../context/AuthContext';
import { setLocale } from 'yup';

const UserDataForm = () => {
    const user = useGetUserInfo();
    

    const userUrl = `http://localhost:3500/users/${user.id}`
    const [emailError, setEmailError] = useState('')
    const [successMsg, setSuccessMsg] = useState(false)
    

   
    const AuthCtx = useContext(AuthContext)
    const [updateAuth, setUpdateAuth] = useState({accessToken: AuthCtx.auth.accessToken, user:AuthCtx.auth.user})
    const [userData, setUserData] = useState(user)

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
                id: AuthCtx.auth.user.id
            }}))}

     useEffect(() => {
        AuthCtx.setAuth(updateAuth)
        localStorage.setItem('auth',JSON.stringify(updateAuth))
    },[updateAuth,AuthCtx]) 
  
    const formik = useFormik({
      initialValues: {
        email: userData.email,
        password: '',
        confirmPassword: '',
        firstName: userData.firstName,
        lastName: userData.lastName,
        ign: userData.ign,
        region: userData.region,
        role: userData.role,
        rank: userData.rank,
      },
  validationSchema: registerSchema,
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
  const onInvalidFirstName = formik.errors.firstName && formik.touched.firstName ? `${style['input-error']}` : '';
  const firstNameErrorMsg = formik.errors.firstName && formik.touched.firstName ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidLastName = formik.errors.lastName && formik.touched.lastName ? `${style['input-error']}` : '';
  const lastNameErrorMsg = formik.errors.lastName && formik.touched.lastName ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidUsername = formik.errors.ign && formik.touched.ign ? `${style['input-error']}` : '';
  const usernameErrorMsg = formik.errors.ign && formik.touched.ign ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidRegion = formik.errors.region && formik.touched.region ? `${style['input-error']}` : '';
  const regionErrorMsg = formik.errors.region && formik.touched.region ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidRole = formik.errors.role && formik.touched.role ? `${style['input-error']}` : '';
  const roleErrorMsg = formik.errors.role && formik.touched.role ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidRank = formik.errors.rank && formik.touched.rank ? `${style['input-error']}` : '';
  const rankErrorMsg = formik.errors.rank && formik.touched.rank ? `${style['error-msg']}` : `${style.untouched}`;
  const successMsgDisplay = successMsg ? `${style.enabled}` : '' 
  

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
        <div>
            <input className={onInvalidFirstName}
            id='firstName'
            placeholder='First Name'
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            onChange={formik.handleChange} 
            type='text'/>
            <i className="fa-solid fa-file-signature"></i>
            <p className={firstNameErrorMsg}>{formik.errors.firstName}</p>
        </div>
        <div>
            <input className={onInvalidLastName}
            id='lastName'
            placeholder='Last Name'
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            onChange={formik.handleChange} 
            type='text'/>
            <i className="fa-solid fa-file-signature"></i>
            <p className={lastNameErrorMsg}>{formik.errors.lastName}</p>
        </div>
          <div>
            <input className={onInvalidUsername}
            id='ign'
            placeholder='Username'
            onBlur={formik.handleBlur}
            value={formik.values.ign}
            onChange={formik.handleChange} 
            type='text'/>
            <i className="fa-solid fa-user"></i>
            <p className={usernameErrorMsg}>{formik.errors.ign}</p>
          </div>
          <div className={`${style['success-msg']} ${successMsgDisplay}`}>{successMsg && <p>Account created successfully! <i className="fa-regular fa-circle-check"></i></p>}</div>
          <div className={style['form-control']}>
            <select defaultValue={userData.region} className={`${style.select} ${onInvalidRegion}`}
            id='region'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}>
              <option value='EUNE'>EUNE</option>
              <option value='EUW'>EUW</option>
              <option value='none' disabled>More Regions coming soon.</option>
            </select>
            <p className={regionErrorMsg}>{formik.errors.region}</p>
          </div>
          <div className={style['form-control']}>
            <select defaultValue={userData.role} className={`${style.select} ${onInvalidRole}`}
            id='role'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}>
              <option value='TOP'>TOP</option>
              <option value='MID'>MID</option>
              <option value='ADC'>ADC</option>
              <option value='SUPPORT'>SUPPORT</option>
              <option value='JUNGLE'>JUNGLE</option>
            </select>
            <p className={roleErrorMsg}>{formik.errors.role}</p>
          </div>
          <div className={style['form-control']}>
            <select defaultValue={userData.rank} className={`${style.select} ${onInvalidRank}`}
            id='rank'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}>
              <option value='BRONZE'>BRONZE</option>
              <option value='SILVER'>SILVER</option>
              <option value='GOLD'>GOLD</option>
              <option value='PLATINUM'>PLATINUM</option>
              <option value='DIAMOND'>DIAMOND</option>
              <option value='MASTER'>MASTER</option>
              <option value='GRANDMASTER'>GRANDMASTER</option>
              <option value='CHALLENGER'>CHALLENGER</option>
            </select>
            <p className={rankErrorMsg}>{formik.errors.rank}</p>
          </div>
          <div className={style.wrapper}>
              <button type='submit' className={style.submit}>Submit!</button>
          </div>
</form>
  )
}

export default UserDataForm