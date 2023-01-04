import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import TeamPostCard from './TeamPostCard';
import TeamProfile from './TeamProfile';

const TeamProfileRoutes = () => {

  return (
    <React.Fragment>
     <Routes>
        <Route path='/teamProfile/:teamName' element={<TeamProfile/>} />
        <Route path='/teamProfile/:teamName/:postId' element={<Navbar/>} />
     </Routes>
    </React.Fragment>
  )
}

export default TeamProfileRoutes