import { useFormik } from 'formik';
import React from 'react';
import { stepThreeSchema } from '../../../../schemas/StepThreeSchema';
import style from './stepThree.module.css'

const StepThree = (props) => {
  const { setRegisterData, onRegisterClick, register, registerData, prevStepHandler } = props

  const onSubmit = (values) => {
    setRegisterData(prev => ({...prev, ...values}));
    register(registerData);
  }

    const formik = useFormik({
        initialValues: {
            region: registerData.region,
            role: registerData.role,
            rank: registerData.rank
        },
    validationSchema: stepThreeSchema,
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
    <form onSubmit={formik.handleSubmit} className={style['register-inputs']}>
          <div>
            <select className={`${style.select} ${onInvalidRegion}`}
            id='region'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}>
            <option value='none'>Select your region.</option>
              <option value='EUNE'>EUNE</option>
              <option value='EUW'>EUW</option>
              <option value='none' disabled>More Regions coming soon.</option>
            </select>
            <p className={regionErrorMsg}>{formik.errors.region}</p>
          </div>
          <div>
            <select className={`${style.select} ${onInvalidRole}`}
            id='role'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}>
            <option value='none'>Select your role.</option>
              <option value='TOP'>TOP</option>
              <option value='MID'>MID</option>
              <option value='ADC'>ADC</option>
              <option value='SUPPORT'>SUPPORT</option>
              <option value='JUNGLE'>JUNGLE</option>
            </select>
            <p className={roleErrorMsg}>{formik.errors.role}</p>
          </div>
          <div>
            <select className={`${style.select} ${onInvalidRank}`}
            id='rank'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}>
            <option value='none'>Select your rank.</option>
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
              <button type='button' className={style.back} onClick={prevStepHandler}>Back</button>
              <button type='submit' className={style.submit}>Submit!</button>
          </div>
    </form>
  )
}

export default StepThree