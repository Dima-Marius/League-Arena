import * as yup from 'yup';

export const stepOneSchema = yup.object().shape({
    email:yup.string().email('Email format is not valid.').max(100, "Don't flood the server please.").required('Please enter an email.'),
    password:yup.string().min(5).max(100, "Don't flood the server please.")/* .matches(passwordRegex, {message: 'Password is not strong enough.'}) */.required("Password can't be empty"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Passwords must match")
})