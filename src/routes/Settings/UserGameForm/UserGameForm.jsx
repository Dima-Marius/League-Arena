import { useFormik } from 'formik';
import React from 'react';
import { stepOneSchema } from '../../../schemas/StepOneSchema';
import style from './userGameForm.module.css'

const UserGameForm = (props) => {
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
          validationSchema: stepOneSchema,
          validateOnMount: false,
          validateOnBlur: false,
          onSubmit,
          })

    const onInvalidRegion = formik.errors.region && formik.touched.region ? `${style['input-error']}` : '';
    const regionErrorMsg = formik.errors.region && formik.touched.region ? `${style['error-msg']}` : `${style.untouched}`;
    const onInvalidRole = formik.errors.role && formik.touched.role ? `${style['input-error']}` : '';
    const roleErrorMsg = formik.errors.role && formik.touched.role ? `${style['error-msg']}` : `${style.untouched}`;
    const onInvalidRank = formik.errors.rank && formik.touched.rank ? `${style['input-error']}` : '';
    const rankErrorMsg = formik.errors.rank && formik.touched.rank ? `${style['error-msg']}` : `${style.untouched}`;

  return (
    <div className={style['form-container']}>
      <h2>Player Prefferences</h2>
      <form className={style.form}>
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
      </form>
    </div>
  )
}

export default UserGameForm