import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import ApiKeyContext from '../../context/ApiKeyContext'
import style from './matchItem.module.css'
import { getRoleIcon } from '../../utils/getRoleIcon'
import ItemPurchase from './ItemPurchase'

const MatchItem = ({matchId, currentSummoner}) => {

    const API_KEY_CTX = useContext(ApiKeyContext)
    const matchUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${API_KEY_CTX.apiKey}`
    const [matchData, setMatchData] = useState(JSON.parse(localStorage.getItem(matchId)) ?? {})
    
    const championImage = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/${matchData.championName}.png`

    useEffect(() => {
        if (localStorage.getItem(matchId) === null) {
        fetch(matchUrl)
        .then(response => response.json())
        .then(data => {
            for (const participant of data.info.participants) {
               if (participant.summonerName === currentSummoner) {
                localStorage.setItem(matchId,JSON.stringify(participant))
            }}})
        .finally(() => setMatchData(JSON.parse(localStorage.getItem(matchId)) ?? {}))
        }
        if (localStorage.getItem(matchId)) {
            setMatchData(JSON.parse(localStorage.getItem(matchId)))
        }
    },[matchUrl,currentSummoner,matchId])

  return (
    <li className={style.li}>
        <div>
            <img key={matchId} className={style['champion-icon']} src={championImage} width='60px' height='60px' alt=''/>
        </div>
        <div className={style['score-container']}>
            <p><span className={style.score}>Score:</span> {matchData?.kills} / {matchData?.deaths} / {matchData?.assists}</p>
        </div>
        <div>
        <ul className={style['items-list']}>
            <ItemPurchase matchData={matchData}/>
        </ul>
        </div>
        <div className={style.verdict}>
            {matchData.win ? <p className={style.victory}>Victory</p> : <p className={style.defeat}>Defeat</p>}
        </div>
        <div className={style.role}>
            <img src={getRoleIcon(matchData?.teamPosition)} width='35px' height='35px' alt=''/>
        </div>
    </li>
  )
}

export default MatchItem