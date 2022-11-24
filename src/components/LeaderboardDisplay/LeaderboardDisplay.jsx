import React, { useEffect, useState } from 'react'
import Player from '../Player/Player';
import style from './leaderboardDisplay.module.css'

const LeaderboardDisplay = (props) => {
    const { searchRegion, searchRank, defaultRank, defaultRegion } = props;
    const [playerList, setPlayerList] = useState([]);

    const defaultRankSearch = searchRank === defaultRank ? defaultRank : searchRank.target.value;
    const defaultRegionSearch = searchRegion === defaultRegion ? defaultRegion : searchRegion.target.value;
    
    const retrieveLimit = 10;
    const challengerQueueUrl = `https://${defaultRegionSearch}.api.riotgames.com/lol/league/v4/${defaultRankSearch}leagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-cd86c840-4165-4fab-9f33-f0cfb8b6628e`
    
    useEffect(() => {
        fetch(challengerQueueUrl)
        .then(response => response.json())
        .then(data => setPlayerList(data.entries));
    },[searchRegion, challengerQueueUrl])

  return (
    <div className={style.container}>
         <table className={style.table} cellPadding="0" cellSpacing="0">
            <thead className={style.thead}>
                <tr className={style.tr}>
                    <th className={style['th-rank']}>RANK</th>
                    <th className={style['th-name']}>NAME</th>
                    <th className={style['th-lp']}>MASTERY</th>
                    <th className={style['th-region']}>REGION</th>
                    <th className={style['th-wins']}>WINS</th>
                    <th className={style['th-losses']}>LOSSES</th>
                </tr>
            </thead>
            <tbody>
                {
                playerList.sort((a, b) => b.leaguePoints - a.leaguePoints)
                .map((player,idx) => idx < retrieveLimit &&
                <Player summonerName={player.summonerName} 
                idx={idx}
                key={player.summonerId}
                leaguePoints={player.leaguePoints} 
                searchRank={searchRank}
                defaultRank={defaultRank}
                defaultRankSearch={defaultRankSearch}
                searchRegion={searchRegion}
                wins={player.wins}
                losses={player.losses}/>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default LeaderboardDisplay


/*      <ol>
         {playerList.map((player,idx) => idx < retrieveLimit && <Player summonerName={player.summonerName} lp={player.leaguePoints} wins={player.wins} losses={player.losses}/>)}
     </ol> */