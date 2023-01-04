import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LoadingPage from "../LoadingPage/LoadingPage";
import TeamPostCard from "../TeamProfile/TeamPostCard";
import TeamPost from "./TeamPost/TeamPost";
import style from "./teamPostPage.module.css";

const TeamPostPage = () => {
  const { teamName, id } = useParams();
  const [teamData, setTeamData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3500/createdTeams?teamName=${teamName}`)
      .then((res) => res.json())
      .then((data) => setTeamData(data[0]))
      .finally(() => setIsLoading(false));
  }, [teamName]);

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
        <div className={style["post-container"]}>
          {teamData?.discussions?.map(
            (post) =>
              post.id === parseInt(id) && (
                <TeamPost
                  key={post.id}
                  title={post.title}
                  id={post.id}
                  content={post.content}
                  author={post.author}
                  date={post.date}
                  time={post.time}
                  likes={post.likes}
                  comments={post.comments}
                  teamData={teamData}
                  setTeamData={setTeamData}
                />
              )
          )}
          <div className={style["news-divider"]}>
            <span></span>
            <span style={{ position: "relative", bottom: "7px" }}>-</span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
 }
 if (isLoading === true) {
  return (
    <LoadingPage/>
  )
 }
};

export default TeamPostPage;
