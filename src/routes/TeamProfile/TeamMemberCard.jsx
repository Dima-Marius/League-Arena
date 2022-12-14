import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ApiKeyContext from "../../context/ApiKeyContext";
import style from "./teamMemberCard.module.css";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import RemoveUserModal from "./RemoveUserModal";

const TeamMemberCard = (props) => {
  const { memberName, owner, isEditingMembers, teamData, setTeamData } = props;
  const user = useGetUserInfo();
  const API_KEY_CTX = useContext(ApiKeyContext);

  const [memberData, setMemberData] = useState({});
  const [userAvatar, setUserAvatar] = useState(
    JSON.parse(localStorage.getItem(memberName)) ?? 7
  );

  const [userRemoveModal, setUserRemoveModal] = useState(false);

  const removeUserHandler = (e) => {
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        members: teamData.members.filter((member) => member !== memberName),
      }),
    }).finally(() => {
      fetch(`http://localhost:3500/createdTeams?teamName=${teamData.teamName}`)
        .then((res) => res.json())
        .then((data) => setTeamData(data[0]));
    });

    fetch(`http://localhost:3500/users?ign=${memberName}`)
      .then((res) => res.json())
      .then((data) => {
        fetch(`http://localhost:3500/users/${data[0].id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            team: "",
          }),
        });
      });

    setUserRemoveModal(!userRemoveModal);
  };

  const isOwner = owner === memberName && style.isOwner;

  const userProfileUrl = `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${memberName}?api_key=${API_KEY_CTX.apiKey}`;
  const profilePictureUrl = `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${
    userAvatar ?? 7
  }.png`;

  useEffect(() => {
    fetch(userProfileUrl)
      .then((res) => res.json())
      .then((data) => {
        setMemberData(data);
        return data;
      })
      .then((data) =>
        localStorage.setItem(memberName, JSON.stringify(data.profileIconId))
      )
      .finally(() =>
        setUserAvatar(JSON.parse(localStorage.getItem(memberName)))
      )
      .catch(localStorage.setItem(memberName, JSON.stringify(null)));
  }, [memberName, userProfileUrl, memberData?.profileIconId]);

  return (
    <li className={style.li}>
      {user.ign !== memberName &&
        isEditingMembers === true &&
        user.ign === owner && (
          <button
            onClick={() => setUserRemoveModal(!userRemoveModal)}
            className={style["remove-user-btn"]}
          >
            <i className="fa-solid fa-x"></i>
          </button>
        )}
      {owner === memberName && (
        <p className={style.owner}>
          Leader <i className="fa-sharp fa-solid fa-crown"></i>
        </p>
      )}
      <Link to={`/userProfile/${memberName}`} />
      <img
        className={style.avatar}
        src={profilePictureUrl}
        height="170px"
        width="170px"
        alt=""
      />
      <p className={style.name}>{memberName}</p>
      <p className={`${style.level} ${isOwner}`}>
        lvl.{memberData?.summonerLevel}
      </p>
      <div>
        {userRemoveModal && (
          <RemoveUserModal
            setUserRemoveModal={setUserRemoveModal}
            removeUserHandler={removeUserHandler}
            userRemoveModal={userRemoveModal}
          />
        )}
      </div>
    </li>
  );
};

export default TeamMemberCard;
