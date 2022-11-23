import React, { useState } from 'react';
import style from './search.module.css';

const Search = (props) => {
    const { onRankChange, onRegionChange } = props;
    const [regionTitle, setRegionTitle] = useState('EUNE')


    const regionWrapperFunc = (event) => {
      onRegionChange(event);
      setRegionTitle(event.target.options[event.target.selectedIndex].text.toUpperCase())
    }

  return (
    <div className={style.container}>
        <h2 className={style.h2}>BEST {regionTitle} PLAYERS</h2>
    <div className={style.wrapper}>
     <div>
      <label className={style.label} htmlFor='region'>Region: </label>
        <select defaultValue='eun1' onChange={regionWrapperFunc} id='region'>
          <option value='euw1'>EU West</option>
          <option value='eun1'>EU Nordic & East</option>
          <option value='na1'>North America</option>
          <option value='br1'>Brazil</option>
          <option value='jp1'>Japan</option>
          <option value='kr'>Korea</option>
          <option value='ru'>Russia</option>
          <option value='oc1'>Oceania</option>
          <option value='la1'>Latin America North</option>
        </select>
      </div>
      <div>
        <label className={style.label} htmlFor='rank'>Rank: </label>
        <select defaultValue='challenger' onChange={onRankChange} id='rank'>
          <option value='challenger'>Challenger</option>
          <option value='grandmaster'>Grandmaster</option>
          <option value='master'>Master</option>
        </select>
      </div>
    </div>

    </div>
  )
}

export default Search