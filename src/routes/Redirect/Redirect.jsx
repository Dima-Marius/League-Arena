import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useGetUserInfo from '../../hooks/useGetUserInfo';

const Redirect = () => {
    const redirect = useNavigate();
    const { ign } = useGetUserInfo();

    useEffect(() => {
        redirect(`/userProfile/${ign}`)
        console.log(ign)
    },[redirect,ign])
}

export default Redirect