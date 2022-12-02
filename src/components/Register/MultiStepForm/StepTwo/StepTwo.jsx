import { useFormik } from 'formik';
import React, { useContext } from 'react'
import style from './stepTwo.module.css'
import { registerSchema } from '../../../../schemas/schemas';
import RegisterContext from '../../../../store/RegisterContext';
import { stepTwoSchema } from '../../../../schemas/StepTwoSchema';

const StepTwo = (props) => {

    const { prevStepHandler, nextStepHandler, registerData } = props
    const registerCtx = useContext(RegisterContext)

    const onSubmit = (values) => {
        nextStepHandler(values)
    }


    const formik = useFormik({
        initialValues: {
            firstName: registerData.firstName,
            lastName: registerData.lastName,
            ign: registerData.ign
        },
    validationSchema: stepTwoSchema,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit,
})

const onInvalidPassword = formik.errors.password && formik.touched.password ? `${style['password-error']}` : '';

  return (
    <form onSubmit={formik.handleSubmit}>
        <div>
            <input className={onInvalidPassword}
            id='firstName'
            placeholder='First Name'
            value={formik.values.firstName}
            onChange={formik.handleChange} 
            type='text'/>
            <i className="fa-solid fa-lock"></i>
            <p className={style['invalid-input']}>{formik.errors.firstName}</p>
          </div>
          <div>
            <input className={onInvalidPassword}
            id='lastName'
            placeholder='Last Name'
            value={formik.values.lastName}
            onChange={formik.handleChange} 
            type='text'/>
            <i className="fa-solid fa-lock"></i>
            <p className={style['invalid-input']}>{formik.errors.lastName}</p>
          </div>
          <div>
            <input className={onInvalidPassword}
            id='ign'
            placeholder='LOL Name'
            value={formik.values.ign}
            onChange={formik.handleChange} 
            type='password'/>
            <i className="fa-solid fa-lock"></i>
            <p className={style['invalid-input']}>{formik.errors.ign}</p>
            <button className={style.next} type='submit'>Next</button>
            <button type='button' onClick={prevStepHandler}>back</button>
          </div>
    </form>
  )
}

export default StepTwo