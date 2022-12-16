import * as yup from 'yup';

export const gamingSchema = yup.object().shape({
    region: yup.string().oneOf(['EUNE','EUW']).required('Please select a region.'),
    role: yup.string().oneOf(['TOP','MID','ADC','SUPPORT','JUNGLE']).required('Please select a role.'),
    rank: yup.string().oneOf(['BRONZE','SILVER','GOLD','PLATINUM','DIAMOND','MASTER','GRANDMASTER','CHALLENGER']).required('Please select a rank.'),
})