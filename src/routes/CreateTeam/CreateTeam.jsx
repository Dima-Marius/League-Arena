import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import CreateOptions from "./CreateOptions";
import style from "./createTeam.module.css";
import TeamForm from './TeamForm'

const CreateTeam = () => {
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const userInfo = useGetUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    userInfo.team !== '' && navigate(`/teamProfile/${userInfo.team}`)
  },[navigate, userInfo.team])

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
        {isCreatingTeam ? (<TeamForm/>) : (<CreateOptions setIsCreatingTeam={setIsCreatingTeam}/>)}
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default CreateTeam;
