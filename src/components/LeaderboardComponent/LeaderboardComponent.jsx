import React, { useState } from 'react';
import LeaderboardDisplay from '../LeaderboardDisplay/LeaderboardDisplay';
import Search from '../Search/Search';
import style from './leaderboardcomponent.module.css'

function LeaderboardComponent() {
  const defaultRegion = 'eun1';
  const defaultRank = 'challenger'

  const [searchRegion, setSearchRegion] = useState(defaultRegion);
  const [searchRank, setSearchRank] = useState(defaultRank)


  const onRegionChange = (region) => {
    
    setSearchRegion(region === defaultRegion ? defaultRegion : region)
  }

  const onRankChange = (rank) => {

    setSearchRank(rank === defaultRank ? defaultRank : rank)
  }

  return (
    <div className={style.leaderboard}>
          <div className={style.search}>
            <Search onRankChange={onRankChange} onRegionChange={onRegionChange} />
          </div>
          <div className={style.display}>
            <LeaderboardDisplay defaultRank={defaultRank} defaultRegion={defaultRegion} searchRegion={searchRegion} searchRank={searchRank}  />
          </div>
          <div className={style.options}>
            <button className={style.previous}>previous</button>
            <button className={style.next}>next</button>
          </div>
    </div>
  )
}

export default LeaderboardComponent