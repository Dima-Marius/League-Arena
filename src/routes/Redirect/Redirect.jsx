import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
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