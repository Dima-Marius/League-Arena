import React from 'react';
import style from './search.module.css';

const Search = (props) => {
    const { onRegionChange } = props;

  return (
    <div className={style.container}>
        <h2 className={style.h2}>BEST PLAYERS</h2>
     <label className={style.label} htmlFor='region'>Region:</label>
     <select defaultValue='EUN1' onChange={onRegionChange} id='region'>
       <option value='EUW1'>EU West</option>
       <option value='EUN1'>EU Nordic & East</option>
       <option value='NA1'>North America</option>
       <option value='BR1'>Brazil</option>
       <option value='JP1'>Japan</option>
       <option value='KR'>Korea</option>
       <option value='RU'>Russia</option>
       <option value='OC1'>Oceania</option>
       <option value='LA1'>Latin America North</option>
       
     </select>
    </div>
  )
}

export default Search