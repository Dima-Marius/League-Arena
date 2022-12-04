import { useFormik } from 'formik';
import React, { useContext } from 'react'
import style from './stepTwo.module.css'
import { stepTwoSchema } from '../../../../schemas/StepTwoSchema';

const StepTwo = (props) => {

    const { prevStepHandler, testData, nextStepHandler, registerData } = props

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

const onInvalidFirstName = formik.errors.firstName && formik.touched.firstName ? `${style['input-error']}` : '';
const firstNameErrorMsg = formik.errors.firstName && formik.touched.firstName ? `${style['error-msg']}` : `${style.untouched}`;
const onInvalidLastName = formik.errors.lastName && formik.touched.lastName ? `${style['input-error']}` : '';
const lastNameErrorMsg = formik.errors.lastName && formik.touched.lastName ? `${style['error-msg']}` : `${style.untouched}`;
const onInvalidUsername = formik.errors.ign && formik.touched.ign ? `${style['input-error']}` : '';
const usernameErrorMsg = formik.errors.ign && formik.touched.ign ? `${style['error-msg']}` : `${style.untouched}`;

  return (
    <form className={style['register-inputs']} onSubmit={formik.handleSubmit}>
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
            <div className={style.wrapper}>
              <button type='button' className={style.back} onClick={prevStepHandler}>Back</button>
              <button className={style.next} type='submit'>Next</button>
            </div>
          </div>
    </form>
  )
}

export default StepTwo