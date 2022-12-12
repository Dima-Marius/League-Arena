import React, { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import style from './teamOutput.module.css'

const TeamOutput = ({rankSearch}) => {

  const [teams, setTeams] = useState([])

  const teamsUrl = `http://localhost:3500/createdTeams`

  useEffect(() => {
    fetch(teamsUrl)
    .then(response => response.json())
    .then(data => setTeams(data))
  },[teamsUrl])

  return (
    <div className={style['teams-container']}>
      {teams.filter(item => item).map(item => <TeamCard key={item.id} {...item}/>)}
    </div>
  )
}

export default TeamOutput