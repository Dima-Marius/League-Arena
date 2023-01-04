import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import useGetUserInfo from "../../hooks/useGetUserInfo";
import style from "./teamForm.module.css";

const TeamForm = (props) => {
  const userInfo = useGetUserInfo();
  const navigate = useNavigate("/teamProfile");

  const onSubmit = (values) => {
    fetch("http://localhost:3500/createdTeams", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then(
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("auth")),
            user: {
              ...JSON.parse(localStorage.getItem("auth")).user,
              team: values.teamName,
            },
          })
        )
      )
      .then(
        fetch(`http://localhost:3500/users/${userInfo.id}`, {
          headers: {
            "Content-type": "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            team: values.teamName,
          }),
        })
      )
      .finally(() => navigate(`/teamProfile/${values.teamName}`));
  };

  const formik = useFormik({
    initialValues: {
      teamName: "",
      owner: userInfo.ign,
      region: "",
      rank: "",
      description: "",
      logo: "",
      wins: 0,
      losses: 0,
      members: [userInfo.ign],
      availableRoles: [],
      discussions: [],
    },
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className={style["create-team"]}>
      <div>
        <h2>
          Create a new team{" "}
          <span>
            <i className="fa-solid fa-chess-knight"></i>
          </span>
        </h2>
      </div>
      <div className={style["form-wrapper"]}>
        <div>
          <input
            id="teamName"
            onBlur={formik.handleBlur}
            placeholder="Team Name"
            value={formik.values.teamName}
            onChange={formik.handleChange}
            type="text"
          />
        </div>
        <div>
          <select
            className={style.select}
            id="region"
            onBlur={formik.handleBlur}
            value={formik.values.region}
            onChange={formik.handleChange}
          >
            <option value="none">Region</option>
            <option>EUNE</option>
            <option>NA</option>
          </select>
        </div>
        <div>
          <select
            className={style.select}
            id="rank"
            onBlur={formik.handleBlur}
            value={formik.values.rank}
            onChange={formik.handleChange}
          >
            <option value="none">Required Rank</option>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
            <option value="diamond">Diamond</option>
            <option value="master">Master</option>
            <option value="grandmaster">Grandmaster</option>
            <option value="challenger">Challenger</option>
          </select>
        </div>
        <div>
          <input
            id="logo"
            placeholder="Logo URL"
            onBlur={formik.handleBlur}
            value={formik.values.logo}
            onChange={formik.handleChange}
            type="text"
          />
        </div>
        <div>
          <textarea
            id="description"
            placeholder="description"
            onBlur={formik.handleBlur}
            value={formik.values.description}
            onChange={formik.handleChange}
            type="password"
          />
          <p>{formik.errors.confirmPassword}</p>
        </div>
        <button className={style.submit} type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default TeamForm;
