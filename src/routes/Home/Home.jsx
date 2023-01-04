import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import style from "./home.module.css";
import mordesplash from "../../assets/images/morde.png";
import jinxsplash from "../../assets/images/jinx.png";
import logonobg from "../../assets/images/logo-no-background.png";
import allstars from "../../assets/images/allstars.png";
import worldsOpening from "../../assets/images/worlds-opening.jpg";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { SiEslgaming } from "react-icons/si";
import Footer from "../../components/Footer/Footer";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const line1 = "JOIN A TEAM";
  const line2 = "FIND A MATCH";
  const line3 = "WIN & EARN POINTS!";
  const line4 = "ARE";
  const line5 = "YOU THE";
  const line6 = "NEXT PRO PLAYER?";

  const items = ["fa-playstation", "fa-discord", "fa-instagram", "fa-facebook"];

  const { scrollY } = useScroll();
  
  const leftSentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className={style.container}>
      <div className={style["header"]}>
        <div className={style["nav-control"]}>
          <Navbar />
        </div>
      </div>
      <div className={style.sliders}>
        <video className={style["first-video"]} playsInline loop autoPlay muted>
          <source
            src="https://challengermode-permanent-assets.azureedge.net/heroes/PUBG/PUBGNextPro_Hero_Low.mp4"
            type="video/mp4"
          />
        </video>
        <div className={style["sliders-details"]}>
          <div className={style["sliders-left"]}>
            <motion.p
              variants={leftSentence}
              initial="hidden"
              animate="visible"
            >
              {line1.split("").map((char, index) => {
                return (
                  <motion.span variants={letter} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              variants={leftSentence}
              initial="hidden"
              animate="visible"
            >
              {line2.split("").map((char, index) => {
                return (
                  <motion.span variants={letter} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              variants={leftSentence}
              initial="hidden"
              animate="visible"
            >
              {line3.split("").map((char, index) => {
                return (
                  <motion.span variants={letter} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <button>Play now!</button>
          </div>
          <div className={style["sliders-right"]}>
            <motion.p
              variants={leftSentence}
              initial="hidden"
              animate="visible"
            >
              {line4.split("").map((char, index) => {
                return (
                  <motion.span variants={letter} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              variants={leftSentence}
              initial="hidden"
              animate="visible"
            >
              {line5.split("").map((char, index) => {
                return (
                  <motion.span variants={letter} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p
              variants={leftSentence}
              initial="hidden"
              animate="visible"
            >
              {line6.split("").map((char, index) => {
                return (
                  <motion.span variants={letter} key={index}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.ul
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className={style.social}
            >
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <i className={`fa-brands ${item}`}></i>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className={style.overlay}></div>
      </div>
      <div className={style.title}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={style["left-splash"]}
        >
          <div className={style.title1}>
            <img src={mordesplash} height="300px" alt="lol character"></img>
            <div>
              <h2>Conquer the top 100!</h2>
              <p>
                Join our weekly tournaments, battle other teams, reach the top
                of the ladder and earn coins!
              </p>
            </div>
          </div>
        </motion.div>
        <div className={style["middle-splash"]}>
          <div className={style.title2}>
            <img
              src={logonobg}
              alt="website logo"
              width="500px"
              height="310px"
            />
          </div>
        </div>
        <motion.div
          className={style["right-splash"]}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className={style.title3}>
            <img src={jinxsplash} height="300px" alt="lol character" />
            <div>
              <h2>Manage your team!</h2>
              <p>
                Easily track your team's progress. Get accurate info about your
                team's players using the official Riot Games API!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={style.intro}>
        <h2>NEWS</h2>
        <div className={style["news-divider"]}>
          <span></span>
          <span style={{ position: "relative", bottom: "7px" }}>-</span>
          <span></span>
        </div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -130 }
      }} 
        className={style.articles}>
          <motion.div className={style["first-article"]}
            whileInView="visible"
            viewport={{ once: true }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={allstars} alt="allstars title"></img>
            <div className={style["article-text"]}>
              <h3>
                All-Stars tournament featuring the best players on League Arena!
              </h3>
              <p>
                With the new season starting we have decided to host an
                All-Stars tournament featuring the best players from various
                teams here on League Arena, stay tuned!
              </p>
              <p>Read more...</p>
            </div>
          </motion.div>
          <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={style["second-article"]}>
            <img src={worldsOpening} width="720px" alt="allstars title"></img>
            <div className={style["article-text"]}>
              <h3>Worlds 2022 Opening Ceremony Presented by Razer</h3>
              <p>
                The World Championship Opening Ceremony Presented by Mastercard™
                will take place at Chase Center in San Francisco ahead of the
                Finals on November 5, beginning at 5PM PDT.
              </p>
              <p>Read more...</p>
            </div>
          </motion.div>
        </motion.div>
        <div className={style.newsletter}>
          <label htmlFor="newsletter">Subscribe to our newsletter!</label>
          <input
            id="newsletter"
            type="text"
            placeholder="someone@here.com"
          ></input>
          <button>
            <AiOutlineCheckCircle />
          </button>
        </div>
      </div>

      <div className={style.content}>
        <div className={style["content-container"]}>
          <div className={style.paragraphs}>
            <h2>Create or join a team now!</h2>
            <p>
              get your group on the next level. <SiEslgaming />
            </p>
          </div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
          }}
          className={style.availability}>
            <p>Time</p>
            <img
              className={style.svg}
              src={
                require("../../assets/svg/attribute__availability.svg").default
              }
              height="280px"
              alt="mySvgImage"
            />
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0, x: -100 }
          }}
          className={style.ambition}>
            <p>Skill</p>
            <img
              className={style.svg}
              src={require("../../assets/svg/attribute__skill.svg").default}
              height="280px"
              alt="mySvgImage"
            />
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0, x: 1000 }
          }}
          className={style.skill}>
            <p>Progress</p>
            <img
              className={style.svg}
              src={require("../../assets/svg/attribute__ambition.svg").default}
              height="280px"
              alt="mySvgImage"
            />
          </motion.div>
          <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1, x: 0 },
            hidden: { opacity: 0, scale: 0, x:-1000 }
          }}
          className={style.communication}>
            <p>Communication</p>
            <img
              className={style.svg}
              src={
                require("../../assets/svg/attribute__languagelocation.svg")
                  .default
              }
              height="280px"
              alt="mySvgImage"
            />
          </motion.div>
          <div className={style.start}>
            <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, y: 0 },
              hidden: { opacity: 0, scale: 0, y: -200 }
            }}
            >Create now</motion.button>
          </div>
        </div>
      </div>
      <footer className={style["footer-area"]}>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
