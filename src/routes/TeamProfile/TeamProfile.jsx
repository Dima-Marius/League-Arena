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

const TeamProfile = () => {
  /* Get team name from URL params */
  const params = useParams();
  const teamName = Object.values(params)[0];

  /* Fetch team data from server */
  const [teamData, setTeamData] = useState({});
  /*  const [like, setLike] = useState(false); */

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
    fetch(`http://localhost:3500/createdTeams?teamName=${teamName}`)
      .then((res) => res.json())
      .then((data) => setTeamData(data[0]))
      .finally(() => setWinrate(calculateWinrate + "%"));
  }, [teamName, calculateWinrate, showCreatePostModal, likeUpdate.like]);

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
        </div>
        <div className={style.logo}>
          <img
            className={style["team-logo"]}
            src={teamData.logo}
            height="270px"
            width="270px"
            alt=""
          />
          <h3>{teamData.teamName}</h3>
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
            <p>
              Region: <span>{teamData?.region}</span>
            </p>
          </div>
          <div>
            <div className={style["record-wrapper"]}>
              <p>
                Wins: <span className={style.wins}>{teamData.wins}</span>
              </p>
              <p>
                Losses: <span className={style.losses}>{teamData.losses}</span>
              </p>
            </div>
            <p>
              Winrate: <span className={winrateColor}>{winrate}</span>
            </p>
          </div>
        </div>
        <div className={style["description-title"]}>
          <h3>Description</h3>
        </div>
        <div className={style.description}>
          <p>{teamData.description}</p>
        </div>
        <div className={style.players}>
          <div>
            <h3>Members</h3>
            <button
              onClick={() => setIsEditingMembers(!isEditingMembers)}
              className={style["edit-members-btn"]}
            >
              <i className="fa-solid fa-user-pen"></i>
            </button>
          </div>
          <ul className={style["members-list"]}>
            {teamData?.members?.map((item) => (
              <TeamMemberCard
                isEditingMembers={isEditingMembers}
                owner={teamData.owner}
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
            {teamData?.discussions?.map(
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
            )}
          </div>
          <div className={style["btn-container"]}>
            <button
              onClick={createPostHandler}
              className={style["create-post"]}
            >
              Create New Post
            </button>
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
      </div>
    </div>
  );
};

export default TeamProfile;
