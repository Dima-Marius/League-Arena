import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
    const [accessToken, setAccessToken] = useState(window.localStorage.getItem('accessToken') || {})
  return (
  Object.keys(accessToken).length !== 0 && accessToken !== 'undefined' ? <Outlet/> : <Navigate to={'/login/'}/>
  )
}

export default PrivateRoutes
