import React from 'react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useEffect } from 'react';
import { registerSchema } from '../../../schemas/schemas';
import style from './userDataForm.module.css'
import { detailsSchema } from '../../../schemas/DetailsSchema';

const UserDataForm = (props) => {
  const { authCtx,userUrl,userData,setUserData,updateAuth,setUpdateAuth } = props
    
    
    const [emailError, setEmailError] = useState('')
    const [successMsg, setSuccessMsg] = useState(false)

    const [teamData, setTeamData] = useState({})
    const userTeamName = authCtx.auth.user.team

    useEffect(() => {
      fetch(`http://localhost:3500/createdTeams?teamName=${userTeamName}`)
      .then(res => res.json())
      .then(data => setTeamData(data[0]));
    },[userTeamName])

    useEffect(() => {
      console.log(teamData)
    },[teamData])

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
                firstName: values.firstName,
                lastName:values.lastName,
                ign: values.ign,
                password:authCtx.auth.user.password,
                confirmPassword:authCtx.auth.user.confirmPassword,
                region: authCtx.auth.user.region,
                role: authCtx.auth.user.role,
                rank: authCtx.auth.user.rank,
                id: authCtx.auth.user.id,
                team: authCtx.auth.user.team
            }
          }
          ))

 /*          fetch(`http://localhost:3500/createdteams/${team.id}`) */
        }

     useEffect(() => {
        authCtx.setAuth(updateAuth)
        localStorage.setItem('auth',JSON.stringify(updateAuth))
    },[updateAuth,authCtx]) 
  
    const formik = useFormik({
      initialValues: {
        email: userData.email,
/*         password: '',
        confirmPassword: '', */
        firstName: userData.firstName,
        lastName: userData.lastName,
        ign: userData.ign,
/*         region: userData.region,
        role: userData.role,
        rank: userData.rank, */
      },
  validationSchema: detailsSchema,
  validateOnMount: false,
  validateOnBlur: false,
  onSubmit,
  })

  const onInvalidEmail = (formik.errors.email || emailError) && formik.touched.email ? `${style['input-error']}` : '';
  const emailErrorMsg = (formik.errors.email || emailError) && formik.touched.email ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidFirstName = formik.errors.firstName && formik.touched.firstName ? `${style['input-error']}` : '';
  const firstNameErrorMsg = formik.errors.firstName && formik.touched.firstName ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidLastName = formik.errors.lastName && formik.touched.lastName ? `${style['input-error']}` : '';
  const lastNameErrorMsg = formik.errors.lastName && formik.touched.lastName ? `${style['error-msg']}` : `${style.untouched}`;
  const onInvalidUsername = formik.errors.ign && formik.touched.ign ? `${style['input-error']}` : '';
  const usernameErrorMsg = formik.errors.ign && formik.touched.ign ? `${style['error-msg']}` : `${style.untouched}`;

  const successMsgDisplay = successMsg ? `${style.enabled}` : '' 
  

  return (
    <div className={style['form-container']}>
      <h2>Account Information</h2>
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
          <div className={style.wrapper}>
              <button type='submit' className={style.submit}>Submit!</button>
          </div>
        </form>
    </div>
  )
}

export default UserDataForm