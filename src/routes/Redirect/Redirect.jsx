import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import useGetUserInfo from '../../hooks/useGetUserInfo';

const Redirect = () => {
    const redirect = useNavigate();
    const userInfo = useGetUserInfo();

    useEffect(() => {
        redirect(`/userProfile/${userInfo?.ign}`)
    },[redirect,userInfo?.ign])
}

export default Redirect