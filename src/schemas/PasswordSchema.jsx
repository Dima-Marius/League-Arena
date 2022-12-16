import * as yup from 'yup';

export const passwordSchema = yup.object().shape({
    password:yup.string().min(5).max(100, "Don't flood the server please.")/* .matches(passwordRegex, {message: 'Password is not strong enough.'}) */.required("Password can't be empty"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Passwords must match")
})
