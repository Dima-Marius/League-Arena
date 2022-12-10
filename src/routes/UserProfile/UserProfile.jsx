import React, { useState } from 'react';
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
import '../../rankedTextGradients/rankedTextGradients.css'
import ApiKeyContext from '../../context/ApiKeyContext';

const UserProfile = () => {

    const API_KEY_CTX = useContext(ApiKeyContext)
    const { ign } = useParams();
    const usersEndpoint = `?ign=${ign}`;
    const usersUrl = 'http://localhost:3500/users';
    const teamsUrl = 'http://localhost:3500/createdTeams'
    const loading = null;
    const [summonerInfo, setSummonerInfo] = useState([])
    const summonerUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${ign}?api_key=${API_KEY_CTX.apiKey}`
    const [teamsEndpoint, setTeamsEndpoint] = useState('')
    const [currentUser, setCurrentUser] = useState(null);
    const [userTeam, setUserTeam] = useState([])
    const [userProfileExists, setUserProfileExists] = useState(loading);
    const profileIconUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${summonerInfo.profileIconId}.png`

  
    const getCurrentUser = useCallback( async () => { 
      const response = await fetch(usersUrl + usersEndpoint);
      const result = await response.json();
      setCurrentUser(result)
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

    useEffect(() => {
      if (currentUser !== null) {
      setTeamsEndpoint(`?teamName=${currentUser[0].team}`)
      fetch(teamsUrl + teamsEndpoint)
      .then(response => response.json())
      .then(data => setUserTeam(data))
    }
  },[currentUser,teamsEndpoint])

  useEffect(() => {
      fetch(summonerUrl)
      .then(response => response.json())
      .then(data => setSummonerInfo(data))
  }, [ign, API_KEY_CTX.apiKey,summonerUrl]);

  useEffect(() => {
    fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/EUN1_3270671953?api_key=${API_KEY_CTX.apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
  },[API_KEY_CTX.apiKey])

  useEffect(() => {
    console.log(summonerInfo);
  },[summonerInfo])

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
          <p>Username: <span>{currentUser[0]?.ign}</span></p>
          <p>Region: <span>{currentUser[0]?.region} <span className={style.globe}><i className="fa-solid fa-globe"></i></span></span></p>
          <p>Role:<span>{currentUser[0]?.role}</span>
          <span className={style['role-icon']}>
            <img src={currentUser.length !== 0 && getRoleIcon(currentUser[0]?.role)} width='50px' height='50px' alt='role' />
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
            <img src={currentUser.length !== 0 && getRankIcon(currentUser[0]?.rank)} width='200px' height='200px' alt='rank'/>
            <p className={`${style['rank-text']} ${currentUser[0]?.rank.toLowerCase()}`}>{currentUser[0]?.rank}</p>
          </div>
        </div>
        <div className={style.about}>
          <div>
            <h2>About</h2>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni deserunt minus voluptatibus officiis id, enim, autem nobis eius quasi animi fuga hic optio repudiandae explicabo obcaecati vitae debitis corrupti aliquid dolorem eligendi quisquam quis quaerat deleniti iure! Natus, exercitationem quos maxime nesciunt repudiandae suscipit alias eius officiis excepturi quisquam velit odit sint, quidem voluptates quod ut laborum, hic minus sequi ullam eligendi accusamus fugit! At praesentium maxime voluptatem illo maiores doloribus tenetur aperiam quos corrupti veniam. Nulla doloremque voluptates placeat rerum velit quia animi distinctio aperiam inventore? Voluptates aliquid recusandae quaerat eos ad eveniet veritatis animi perspiciatis, inventore officiis pariatur.</p>
        </div>
        <div className={style.team}>
          <h2>TEAM <span><i className="fa-brands fa-teamspeak"></i></span></h2>
          <div>
            <p>{userTeam[0]?.teamName}</p>
            <p><img src={userTeam[0]?.logo} alt='team logo'></img></p>
          </div>
          <div>
          <p>Members: {userTeam[0]?.members}</p>
          </div>
        </div>
        <div className={style.stats}>
            <h2>STATS <span><i className="fa-sharp fa-solid fa-chart-simple"></i></span></h2>
          <div>
            level: {summonerInfo?.summonerLevel}
          </div>
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