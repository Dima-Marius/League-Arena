import React from "react";
import style from "./createOptions.module.css";
import { useNavigate } from "react-router-dom";

const CreateOptions = ({ setIsCreatingTeam }) => {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <button onClick={() => navigate('/search')}>
        <span>Search for a team</span>
      </button>
        <button className={style['option-btn']} onClick={() => setIsCreatingTeam(true)}>
          <span>Create a new team</span>
        </button>
    </div>
  );
};

export default CreateOptions;
