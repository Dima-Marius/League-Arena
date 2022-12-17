import React from 'react'
import { Routes, Route } from 'react-router-dom';
import TeamProfile from './TeamProfile';

const TeamProfileRoutes = () => {
  return (
    <React.Fragment>
     <Routes>
        <Route path=':teamName' element={<TeamProfile/>} />
     </Routes>
    </React.Fragment>
  )
}

export default TeamProfileRoutes