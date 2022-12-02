import * as yup from 'yup';

/* const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/ */
const lettersOnly = /^[a-zA-Z]*$/

export const basicSchema = yup.object().shape({
    email:yup.string().email('Email format is not valid.').required('Please enter an email.'),
    password:yup.string().min(5)/* .matches(passwordRegex, {message: 'Password is not strong enough.'}) */.required("Password can't be empty")
});

export const registerSchema = yup.object().shape({
    email:yup.string().email('Email format is not valid.').required('Please enter an email.'),
    password:yup.string().min(5)/* .matches(passwordRegex, {message: 'Password is not strong enough.'}) */.required("Password can't be empty"),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required("Passwords must match"),
    firstName: yup.string().min(2, 'First Name must be at least 2 characters').matches(lettersOnly, {message: "First Name can contain letters only."}).required('Please enter your first name.'),
    lastName: yup.string().min(2, 'First Name must be at least 2 characters').matches(lettersOnly, {message: "Last Name can contain letters only."}).required('Please enter your last name.'),
    ign: yup.string().required('Please enter your in-game name.'),
    region: yup.string().oneOf(['EUNE','EUW']).required('Please select a region.'),
    role: yup.string().oneOf(['TOP','MID','ADC','SUPPORT','JUNGLE']).required('Please select a role.'),
    rank: yup.string().oneOf(['BRONZE','SILVER','GOLD','PLATINUM','DIAMOND','MASTER','GRANDMASTER','CHALLENGER']).required('Please select a rank.'),
});

