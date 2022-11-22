import React, { useState } from 'react';
import LeaderboardDisplay from '../LeaderboardDisplay/LeaderboardDisplay';
import Search from '../Search/Search';
import style from './leaderboardcomponent.module.css'

function LeaderboardComponent() {
  const [searchRegion, setSearchRegion] = useState('EUN1')

  const onRegionChange = (region) => {
    setSearchRegion(region)
  }

  return (
    <div className={style.leaderboard}>
      <div className={style.ribbon}><span>POPULAR</span></div>
          <div className={style.search}>
            <Search onRegionChange={onRegionChange} />
          </div>
          <div className={style.display}>
            <LeaderboardDisplay searchRegion={searchRegion} />
          </div>
          <div className={style.options}>
            <button>previous</button>
            <button>next</button>
          </div>
    </div>
  )
}

export default LeaderboardComponent