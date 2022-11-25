import React, { useState } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import style from './teamOutput.module.css'

const TeamOutput = () => {

  const [teams, setTeams] = useState(
    [
      {
       teamName : 'Hardstuck Stepbros',
       logo: 'LOGO HERE',
       region: 'EUNE',
       members:['Dog','Cat','Tyler1','Ilynagava'],
       availableRoles : ['TOP','MID'],
       rank: 'Diamond',
       description: 'Hello we are a team playing on the EUNE region, our rank is Diamond, and we are currently looking for ambitious individuals willing to play together. Hello we are a team playing on the EUNE region, our rank is Diamond, and we are currently looking for ambitious individuals willing to play together.'
      },
      {
        teamName : 'SKT T1',
        logo: 'LOGO HERE',
        region: 'KOREA',
        members:['FAKER','DEJI','BAKKA','REKLESS'],
        availableRoles : ['TOP','MID','SUPPORT'],
        rank: 'Challenger',
        description: 'Hello we are a team playing on the EUNE region, our rank is MASTER, and we are currently looking for ambitious individuals willing to play together. Hello we are a team playing on the EUNE region, our rank is Diamond, and we are currently looking for ambitious individuals willing to play together.'
       },
       {
        teamName : 'SKT T1',
        logo: 'LOGO HERE',
        region: 'KOREA',
        members:['Dog','Cat','Tyler1','Ilynagava'],
        availableRoles : ['TOP','ADC','MID'],
        rank: 'Challenger',
        description: 'Hello we are a team playing on the EUNE region, our rank is MASTER, and we are currently looking for ambitious individuals willing to play together. Hello we are a team playing on the EUNE region, our rank is Diamond, and we are currently looking for ambitious individuals willing to play together.'
       },
       {
        teamName : 'SKT T1',
        logo: 'LOGO HERE',
        region: 'KOREA',
        members:['FAKER','DEJI','BAKKA','REKLESS'],
        availableRoles : ['TOP','MID'],
        rank: 'Challenger',
        description: 'Hello we are a team playing on the EUNE region, our rank is MASTER, and we are currently looking for ambitious individuals willing to play together. Hello we are a team playing on the EUNE region, our rank is Diamond, and we are currently looking for ambitious individuals willing to play together.'
       },
       {
        teamName : 'SKT T1',
        logo: 'LOGO HERE',
        region: 'KOREA',
        members:['Dog','Cat','Tyler1','Ilynagava'],
        availableRoles : ['TOP','MID','ADC','SUPPORT','JUNGLE'],
        rank: 'Challenger',
        description: 'Hello we are a team playing on the EUNE region, our rank is MASTER, and we are currently looking for ambitious individuals willing to play together. Hello we are a team playing on the EUNE region, our rank is Diamond, and we are currently looking for ambitious individuals willing to play together.'
       },
       {
        teamName : 'SKT T1',
        logo: 'LOGO HERE',
        region: 'NA',
        members: ['dog','cat','ilynagava'],
        availableRoles : ['TOP','MID'],
        rank: 'Master',
        description: 'Hello we are looking for new players, join us.'
       }
    ]
  )

  return (
    <div className={style['teams-container']}>
      {teams.map(item => <TeamCard {...item}/>)}
    </div>
  )
}

export default TeamOutput