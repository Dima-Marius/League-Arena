import React, { useMemo, useState } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import AuthContext from '../../context/AuthContext';
import LoadingPage from '../LoadingPage/LoadingPage';
import NotFound from '../NotFound/NotFound';
import style from './userProfile.module.css';
import { getRankIcon } from '../../utils/getRankIcon';
import { getRoleIcon } from '../../utils/getRoleIcon';
import '../../utils/rankedTextGradients/rankedTextGradients.css'
import ApiKeyContext from '../../context/ApiKeyContext';
import TeamMember from './TeamMember';
import MatchItem from './MatchItem';

const UserProfile = () => {

    const API_KEY_CTX = useContext(ApiKeyContext)
    const { ign } = useParams();
    const usersEndpoint = `?ign=${ign}`;
    const usersUrl = 'http://localhost:3500/users';
    const teamsUrl = 'http://localhost:3500/createdTeams'
    const loading = null;
    const [summonerInfo, setSummonerInfo] = useState([])
    const summonerUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${ign}?api_key=${API_KEY_CTX.apiKey}`
    const [summonerId, setSummonerId] = useState(null)
    const summonerMatchesUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?start=0&count=5&api_key=RGAPI-8c90c701-1e08-4309-aa76-876f91315209`
    const [teamsEndpoint, setTeamsEndpoint] = useState('')
    const [currentUser, setCurrentUser] = useState(null);
    const [userTeam, setUserTeam] = useState({})
    const [userProfileExists, setUserProfileExists] = useState(loading);
    const profileIconUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${summonerInfo.profileIconId}.png`
    const [winrate, setWinrate] = useState('Loading...')
    const [summonerMatches, setSummonerMatches] = useState([])

  
    const getCurrentUser = useCallback( async () => { 
      const response = await fetch(usersUrl + usersEndpoint);
      const result = await response.json();
      setCurrentUser(result[0])
      return result[0]?.ign;
    },[usersEndpoint])

    const checkUserExists = useCallback( async () => {
      if (await getCurrentUser()) {
        setUserProfileExists(true)
      } else {
        setUserProfileExists(false)
      }
    },[getCurrentUser])

    useEffect(() => {
      checkUserExists()
    },[checkUserExists])

    const calculateWinrate = useMemo(() => {
      const winrate = ((userTeam?.wins / (userTeam?.wins + userTeam?.losses)) * 100 ).toFixed(2)
      if (winrate > 0) {
        return winrate;
      } else {
        return 0;
      }
    },[userTeam])

    useEffect(() => {
      if (currentUser !== null) {
      setTeamsEndpoint(`?teamName=${currentUser?.team}`)
      fetch(teamsUrl + teamsEndpoint)
      .then(response => response.json())
      .then(data => setUserTeam(data[0]))
      .finally(() => setWinrate(calculateWinrate))
    }
  },[currentUser,teamsEndpoint, calculateWinrate]) 

  useEffect(() => {
      fetch(summonerUrl)
      .then(response => response.json())
      .then(data => setSummonerInfo(data))
  }, [ign, API_KEY_CTX.apiKey,summonerUrl]);

  useEffect(() => {
    setSummonerId(summonerInfo.puuid)
  },[summonerInfo.puuid])

  useEffect(() => {
    if (summonerId !== null && summonerId !== undefined) {
      fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${summonerId}/ids?start=0&count=5&api_key=${API_KEY_CTX.apiKey}`)
      .then(response => response.json())
      .then(data => setSummonerMatches(data));
    }
  },[summonerId,summonerMatchesUrl,summonerInfo.puuid, API_KEY_CTX.apiKey])

  if (userProfileExists === true) 
      return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Navbar/>
      </div>
        <div className={style['background-pattern']}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div className={style.main}>
        <div className={style.title}>
          <h2 className={style.h2}>
            {ign}'s Profile <span></span>
          </h2>
        </div>
        <div className={style.contact}>
          <div className={style.picture}>
          <img src={profileIconUrl} alt='profile icon' width='200px' height='200px'></img>
          </div>
          <ul className={style.social}>
            <li><i className="fa-brands fa-discord"></i></li>
            <li><i className="fa-solid fa-envelope"></i></li>
            <li><i className="fa-solid fa-user-plus"></i></li>
          </ul>
        </div>
        <div className={style.info}>
          <p>Username: <span>{currentUser?.ign}</span></p>
          <p>Region: <span>{currentUser?.region} <span className={style.globe}><i className="fa-solid fa-globe"></i></span></span></p>
          <p>Role:<span>{currentUser?.role}</span>
          <span className={style['role-icon']}>
            <img src={currentUser.length !== 0 && getRoleIcon(currentUser?.role)} width='50px' height='50px' alt='role' />
          </span>
          </p>
        </div>
        <div className={style.details}>
          <div>
            <h2>
              Rank <span className={style['ranking-star']}><i className="fa-solid fa-ranking-star"></i></span>
            </h2>
          </div>
          <div>
            <img src={currentUser.length !== 0 && getRankIcon(currentUser?.rank)} width='200px' height='200px' alt='rank'/>
            <p className={`${style['rank-text']} ${currentUser?.rank.toLowerCase()}`}>{currentUser?.rank}</p>
          </div>
        </div>
        <div className={style.about}>
          <div>
            <h2>About</h2>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni deserunt minus voluptatibus officiis id, enim, autem nobis eius quasi animi fuga hic optio repudiandae explicabo obcaecati vitae debitis corrupti aliquid dolorem eligendi quisquam quis quaerat deleniti iure! Natus, exercitationem quos maxime nesciunt repudiandae suscipit alias eius officiis excepturi quisquam velit odit sint, quidem voluptates quod ut laborum, hic minus sequi ullam eligendi accusamus fugit! At praesentium maxime voluptatem illo maiores doloribus tenetur aperiam quos corrupti veniam. Nulla doloremque voluptates placeat rerum velit quia animi distinctio aperiam inventore? Voluptates aliquid recusandae quaerat eos ad eveniet veritatis animi perspiciatis, inventore officiis pariatur.</p>
        </div>
        <div className={style.team}>
          {
          userTeam
          ? 
          <div className={style['team-wrapper']}>
          <div className={style['team-record']}>
              <p className={style['team-name']}>{userTeam?.teamName}</p>
              <div className={style.record}>
                <div>
                <p>
                  Wins:<span className={style.wins}>{userTeam?.wins}</span>
                </p>
                <p>
                  Losses:<span className={style.losses}>{userTeam?.losses}</span>
                </p>
                </div>
                <p>Winrate:<span className={winrate >= 50 && winrate ? `${style.good}` : `${style.bad}` }>{winrate}%</span></p>
              </div>
            </div>
            <div className={style['logo-members']}>
              <div>
                <p><img className={style['team-logo']} src={userTeam?.logo} alt='team logo'/></p>
              </div>
              <div className={style['members-container']}>
                <h3>MEMBERS</h3>
                 <ol className={style.members}>
                    {userTeam?.members?.map(member => <TeamMember key={member} memberName={member}/>)}
                </ol>
              </div>
            </div>
          </div>
          :
          <div>
              <h2 className={style['no-team']}>User has not joined a team yet :&#40;</h2>
          </div>
          }
          </div>
        <div className={style.stats}>
            <h2>STATS <span><i className="fa-sharp fa-solid fa-chart-simple"></i></span></h2>
          <div className={style.top}>
            <p>Last 5 Matches</p>
            <p>level: {summonerInfo?.summonerLevel}</p>
          </div>
          <ul className={style['match-history']}>
            {summonerMatches?.map(match => <MatchItem key={match} currentSummoner={ign} matchId={match}/>)}
          </ul>
        </div>
      </div>
      <div className={style.footer}>
        <Footer/>
      </div>
    </div>
           )
  if (userProfileExists === false)
    return (
    <NotFound/>
           )
  if (userProfileExists === null) {
    return (
    <LoadingPage/>
           )
  }
}

export default UserProfile