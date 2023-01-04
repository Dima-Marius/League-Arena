import React, { useContext, useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import style from "./teamProfile.module.css";
import { getRankIcon } from "../../utils/getRankIcon";
import "../../utils/rankedTextGradients/rankedTextGradients.css";
import TeamMemberCard from "./TeamMemberCard";
import TeamPostCard from "./TeamPostCard";
import Modal from "../../components/Modal/Modal";
import LikeContext from "../../context/LikeContext";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import LoadingPage from "../LoadingPage/LoadingPage";
import EditTeamModal from "./EditTeamModal/EditTeamModal";
import { m } from "framer-motion";

const TeamProfile = () => {
  /* Get team name from URL params */
  const params = useParams();
  const teamName = Object.values(params)[0];
  const user = useGetUserInfo();

  /* Fetch team data from server */
  const [teamData, setTeamData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditingTeam, setIsEditingTeam] = useState(false);
  /*  const [like, setLike] = useState(false); */

/*   function sendNotification() {
    if (window.Notification && Notification.permission !== "granted") {
      Notification.requestPermission().then(function (status) {
        if (Notification.permission !== status) {
          Notification.permission = status;
        }
      });
    }
  
    if (window.Notification && Notification.permission === "granted") {
      new Notification("This is a notification!");
    }
  }
 */
  /* check if user has team or not, if not then display team creation */

  const [isUserInTeam, setIsUserInTeam] = useState(true);

  /* set this state to team winrate after fetch */
  const [winrate, setWinrate] = useState(0);

  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  const [isEditingMembers, setIsEditingMembers] = useState(false);

  const likeUpdate = useContext(LikeContext);

  /* Get team winrate */
  const calculateWinrate = useMemo(() => {
    const winrate = (
      (teamData?.wins / (teamData?.wins + teamData?.losses)) *
      100
    ).toFixed(2);
    if (winrate > 0) {
      return winrate;
    } else {
      return 0;
    }
  }, [teamData?.wins, teamData?.losses]);

  /* Fetch team data from server */
  useEffect(() => {
    if (user?.team !== "") {
    fetch(`http://localhost:3500/createdTeams?teamName=${teamName}`)
      .then((res) => res.json())
      .then((data) => setTeamData(data[0]))
      .finally(() => {
        setWinrate(calculateWinrate + "%");
        setIsLoading(false);
      });
    } else {
      setIsUserInTeam(false);
    }
  },[teamName, calculateWinrate, showCreatePostModal, likeUpdate.like, user?.team]);

  /* Create post button handler */

  const createPostHandler = () => {
    setShowCreatePostModal(true);
  };

  const handleModalClose = (bool) => {
    setShowCreatePostModal(bool);
  };

  /* get teamrate color based on percentage */
  const winrateColor =
    calculateWinrate >= 50 ? `${style.good}` : `${style.bad}`;

    if (isLoading === false) {
  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <Navbar />
      </div>
      <div className={style["background-pattern"]}>
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
        <div className={style.header}>
          <h2>Team Profile</h2>
          <button onClick={() => setIsEditingTeam(!isEditingTeam)} className={style['options-btn']}>
          <i className="fa-solid fa-ellipsis"></i>
          </button>
        </div>
        <div className={style.logo}>
          <img
            className={style["team-logo"]}
            src={teamData?.logo}
            height="270px"
            width="270px"
            alt=""
          />
          <h3>{teamData?.teamName}</h3>
          <ul className={style.social}>
              <li>
                <i className="fa-brands fa-discord"></i>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
              </li>
              <li>
                <i className="fa-solid fa-user-plus"></i>
              </li>
            </ul>
        </div>
        <div className={style.info}>
          <h3>Stats</h3>
          <div className={style["info-wrapper"]}>
            <p>
              Name: <span>{teamData?.teamName}</span>
            </p>
            <p>
              Leader: <span>{teamData?.owner}</span>
            </p>
            <p>
              Region: <span>{teamData?.region}</span>
            </p>
            <p className={style["rank-info"]}>
              Entry Rank:
              <span
                className={`${teamData?.rank?.toLowerCase()} ${style.rank}`}
              >
                {teamData?.rank}
                <img
                  src={getRankIcon(teamData?.rank)}
                  height="50px"
                  width="50px"
                  alt=""
                />
              </span>
            </p>
          </div>
          <div>
            <div className={style["record-wrapper"]}>
              <p>
                Wins: <span className={style.wins}>{teamData?.wins}</span>
              </p>
              <p>
                Losses: <span className={style.losses}>{teamData?.losses}</span>
              </p>
            </div>
            <p>
              Winrate: <span className={winrateColor}>{parseInt(winrate.toString().replace('%','')) > 0 ? winrate : <span>No matches played.</span>}</span>
            </p>
          </div>
        </div>
        <div className={style["description-title"]}>
          <h3>Description</h3>
        </div>
        <div className={style.description}>
          <p>{teamData?.description}</p>
        </div>
        <div className={style.players}>
          <div>
            <h3>Members</h3>
            {teamData?.owner === user?.ign && ( <button
              onClick={() => setIsEditingMembers(!isEditingMembers)}
              className={`${style["edit-members-btn"]} ${isEditingMembers && `${style.active}` }`}
            >
              <i className="fa-solid fa-user-pen"></i>
            </button>)}
           
          </div>
          <ul className={style["members-list"]}>
            {teamData?.members?.map((item) => (
              <TeamMemberCard
                isEditingMembers={isEditingMembers}
                owner={teamData?.owner}
                key={item}
                memberName={item}
                teamData={teamData}
                setTeamData={setTeamData}
              />
            ))}
          </ul>
        </div>
        <div className={style.posts}>
          <div className={style["posts-title"]}>
            <h3>Posts</h3>
          </div>
          <div className={style.output}>
            {teamData?.members?.includes(user?.ign) ? teamData?.discussions?.map(
              (
                item /* wrong, just pass ...teamData, short on time to fix */
              ) => (
                <TeamPostCard
                  setTeamData={setTeamData}
                  key={item.title}
                  teamData={teamData}
                  title={item.title}
                  likes={item.likes}
                  author={item.author}
                  content={item.content}
                  date={item.date}
                  comments={item.comments}
                  time={item.time}
                  id={item.id}
                />
              )
            ) : (
              <p className={style["no-posts"]}>
                You are not a member of this team. Join to see posts.
              </p>
            )}
          </div>
          <div className={style["btn-container"]}>
            {teamData?.members?.includes(user?.ign) && (
              <button
              onClick={createPostHandler}
              className={style["create-post"]}
            >
              Create New Post
            </button>
            )}
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
      <div>
        {showCreatePostModal && (
          <Modal teamData={teamData} handleModalClose={handleModalClose} />
        )}
        {isEditingTeam && (
          <EditTeamModal
            isEditingTeam={isEditingTeam}
            setIsEditingTeam={setIsEditingTeam}
            teamData={teamData}
            setTeamData={setTeamData}
          />
        )}
      </div>
    </div>
    );
  };

  if (isLoading) {
    return <LoadingPage />;
  }
};

export default TeamProfile;
