import style from "./editTeamModal.module.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import useGetUserInfo from "../../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";

const Backdrop = ({ setIsEditingTeam, isEditingTeam }) => {
  return (
    <div
      onClick={() => setIsEditingTeam(!isEditingTeam)}
      className={style.backdrop}
    ></div>
  );
};

const Overlay = ({
  content,
  setTeamData,
  teamData,
  isEditingTeam,
  setIsEditingTeam,
}) => {
  const userInfo = useGetUserInfo();
  const [newDescription, setNewDescription] = useState(teamData.description);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: newDescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTeamData(data);
        setIsEditingTeam(!isEditingTeam);
      })
      .catch((err) => console.log(`Error: ${err}`));
  };

  const deleteTeam = () => {
    fetch(`http://localhost:3500/createdTeams/${teamData.id}`, {
      method: "DELETE",
    })
      .then(
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("auth")),
            user: {
              ...JSON.parse(localStorage.getItem("auth")).user,
              team: "null"
            },
          })
        )
      ).finally(() => {
        fetch(`http://localhost:3500/users/${userInfo.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            team: "null",
          }),
        }).then(navigate("/home"));
      });
  };

  const contentHandler = (e) => {
    setNewDescription(e.target.value);
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <h2>
          Manage Team{" "}
          <span>
            <i className="fa-solid fa-crown"></i>
          </span>
        </h2>
        <form onSubmit={formSubmitHandler} className={style.form}>
          <h4>Edit Team Description</h4>
          <textarea
            onChange={contentHandler}
            value={newDescription}
            rows="6"
            cols="75"
            placeholder=". . ."
          />
          <div className={style.buttons}>
            <button className={style.submit} type="submit">
              Submit
            </button>
            <button
              onClick={() => setIsEditingTeam(!isEditingTeam)}
              className={style.cancel}
            >
              Cancel
            </button>
          </div>
        </form>
        <div className={style.delete}>
          <button onClick={deleteTeam} className={style["delete-btn"]}>
            Delete Team
          </button>
        </div>
      </div>
    </div>
  );
};

const EditPostModal = ({
  isEditingTeam,
  setIsEditingTeam,
  teamData,
  setTeamData,
}) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop
          setIsEditingTeam={setIsEditingTeam}
          isEditingTeam={isEditingTeam}
        />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay
          isEditingTeam={isEditingTeam}
          setIsEditingTeam={setIsEditingTeam}
          teamData={teamData}
          setTeamData={setTeamData}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default EditPostModal;
