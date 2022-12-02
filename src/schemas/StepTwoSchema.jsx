import * as yup from 'yup';

const lettersOnly = /^[a-zA-Z]*$/

export const stepTwoSchema = yup.object().shape({
    firstName: yup.string().min(2, 'First Name must be at least 2 characters').matches(lettersOnly, {message: "First Name can contain letters only."}).required('Please enter your first name.'),
    lastName: yup.string().min(2, 'First Name must be at least 2 characters').matches(lettersOnly, {message: "Last Name can contain letters only."}).required('Please enter your last name.'),
    ign: yup.string().required('Please enter your in-game name.')
});