import React from 'react'
import { Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';

const UserProfileRoutes = () => {
  return (
    <React.Fragment>
     <Routes>
          <Route path=':ign' element={<UserProfile/>} />
     </Routes>
    </React.Fragment>
  )
}

export default UserProfileRoutes