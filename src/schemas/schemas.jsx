import * as yup from 'yup';

/* const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ */

export const basicSchema = yup.object().shape({
    email:yup.string().email('Email format is not valid.').required('Please enter an email.'),
    password:yup.string().min(5)/* .matches(passwordRegex, {message: 'Password is not strong enough.'}) */.required('Password cant be empty')
});