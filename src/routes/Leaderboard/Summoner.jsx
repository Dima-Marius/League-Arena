import React from 'react'

function Summoner(props) {
  return (
    <li>
      <p>Name: {props.summonerName}</p>
      <p>Wins: {props.wins}</p>
      <br></br>
    </li>
  )
}

export default Summoner