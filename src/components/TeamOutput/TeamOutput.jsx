import React, { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import style from './teamOutput.module.css'

const TeamOutput = ({rankSearch,regionSearch,inputSearch}) => {

  const [teams, setTeams] = useState([])

  const teamsUrl = `http://localhost:3500/createdTeams`

  useEffect(() => {
    fetch(teamsUrl)
    .then(response => response.json())
    .then(data => setTeams(data))
  },[teamsUrl])

  return (
    <div className={style['teams-container']}>
      {
      teams
      .filter(item => inputSearch !== '' ? item.teamName.toLowerCase().trim().includes(inputSearch.toLowerCase().trim()) : item)
      .filter(item => rankSearch !== 'any' ? item.rank.toLowerCase() === rankSearch : item)
      .filter(item => regionSearch !== 'any' ? item.region.toLowerCase() === regionSearch : item)
      .map(item => <TeamCard key={item.id} {...item}/>)
      }
    </div>
  )
}

export default TeamOutput