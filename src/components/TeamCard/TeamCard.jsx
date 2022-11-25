import React from 'react';
import style from './teamCard.module.css';
import teampic from '../../assets/images/team-profile-pic.jpg';
import { BiWorld } from 'react-icons/bi'
import { RiTeamFill } from 'react-icons/ri'
import { GiPositionMarker } from 'react-icons/gi'
import { FaTeamspeak } from 'react-icons/fa'
import { GoGraph } from 'react-icons/go'
import { GrWorkshop } from 'react-icons/gr'
import { GrContact } from 'react-icons/gr'
import { FaDiscord } from 'react-icons/fa'
import PlayerItem from '../PlayerItem/PlayerItem';
import RoleItem from '../RoleItem/RoleItem';

const TeamCard = (props) => {
  const {teamName, logo, region, members, availableRoles, rank, description} = props;



  return (
    <div className={style.card}>
        <div className={style.logo}>
          <div className={style['logo-wrapper']}>
          <div>
            <img src={teampic} width='65px' height='65px' alt='team logo'></img>
          </div>
          <div>
            <h3>
              TEAM <RiTeamFill/>
            </h3>
            {teamName}
           </div>
          </div>
        </div>
        <div className={style.name}>
          <div>
            <h3>
              REGION <BiWorld/>
              </h3>
            {region}
          </div>
        </div>
{/*         <div className={style.region}>{region}</div> */}
        <div className={style['available-roles']}>
          <div className={style['roles-wrapper']}>
          <div>
            <h3>
              LOOKING FOR <GiPositionMarker/>
              </h3>
          </div>
          <div>
            <ul className={style['role-list']}>
            {availableRoles.map(item => <RoleItem role={item} />)}
            </ul>
          </div>
          </div>
        </div>
        <div className={style.description}>
          <div className={style['description-wrapper']}>
            <div>
              <h3>
                DESCRIPTION <GrWorkshop/>
              </h3>
            </div>
            <div>
             {description}
            </div>
        </div>
        </div>
        <div className={style.rank}>
          <div className={style['rank-wrapper']}>
            <div>
              <h3>
                RANK <GoGraph/>
              </h3>
            </div>
            <div>
              {rank}
            </div>
          </div>
        </div>
        <div className={style.members}>
           <div className={style['members-wrapper']}>
            <div>
              <h3>
              MEMBERS <FaTeamspeak/>
              </h3>
           </div>
           <div>
            <ul className={style['player-list']}>
           {members.map(item => <PlayerItem playerName={item}/>)}
           </ul>
           </div>
          </div>
        </div>
        <div className={style.contact}>
          <div className={style['contact-wrapper']}>
            <div>
              <h3>
                CONTACT <GrContact/>
              </h3>
            </div>
            <div className={style.discord}>
              Discord <FaDiscord/>
            </div>
          </div>
          <div className={style['btn-wrapper']}>
              <button className={style['join-btn']}>Request to join</button>
            </div>
        </div>
      </div>
  )
}

export default TeamCard