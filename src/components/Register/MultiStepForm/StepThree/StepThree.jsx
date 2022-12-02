import { useFormik } from 'formik';
import React from 'react';
import { registerSchema } from '../../../../schemas/schemas';
import style from './stepThree.module.css'

const StepThree = () => {

    const onSubmit = (values) => {
        console.log(values);
    }

    const formik = useFormik({
        initialValues: {
            region: '',
            role:'',
            rank:''
        },
    validationSchema: registerSchema,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit
})

  return (
    <form>
          <div>
            <select id='region' onChange={formik.handleChange}>
            <option value='none'>Select your region.</option>
              <option value='EUNE'>EUNE</option>
              <option value='EUW'>EUW</option>
              <option value='none' disabled>More Regions coming soon.</option>
            </select>
            <p className={style['invalid-input']}>{formik.errors.region}</p>
          </div>
          <div>
            <select id='role' onChange={formik.handleChange}>
            <option value='none'>Select your role.</option>
              <option value='TOP'>TOP</option>
              <option value='MID'>MID</option>
              <option value='ADC'>ADC</option>
              <option value='SUPPORT'>SUPPORT</option>
              <option value='JUNGLE'>JUNGLE</option>
            </select>
            <p className={style['invalid-input']}>{formik.errors.role}</p>
          </div>
          <div>
            <select id='rank' onChange={formik.handleChange}>
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
            <p className={style['invalid-input']}>{formik.errors.rank}</p>
          </div>
    </form>
  )
}

export default StepThree