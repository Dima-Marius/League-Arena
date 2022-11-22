import React, { useEffect, useState } from 'react'
import Player from '../Player/Player';
import style from './leaderboardDisplay.module.css'

const LeaderboardDisplay = (props) => {
    const { searchRegion } = props;
    const [playerList, setPlayerList] = useState([]);
    
    const retrieveLimit = 15;
    const challengerQueueUrl = `https://${searchRegion === 'EUN1' ? 'EUN1' : searchRegion.target.value}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-ec2d9b6e-6e37-480d-a378-9b85eddea957`
    
    useEffect(() => {
        console.log(searchRegion)
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