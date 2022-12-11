import React from 'react';
import './itemPurchase.css'

const ItemPurchase = ({ matchData }) => {

    const getItemImage = (itemId) => {
        if (itemId === 0) {
            return `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/3115.png`
        }
        return `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${itemId}.png`
    }

    const checkEmptyItem = (id) => id === 0 ? 'empty' : ''

  return (
    <React.Fragment>
      <li>
        <img className={checkEmptyItem(matchData.item0)} src={getItemImage(matchData.item0)} width='25px' height='25px' alt=''/>
      </li>
      <li>
        <img className={checkEmptyItem(matchData.item1)} src={getItemImage(matchData.item1)} width='25px' height='25px' alt=''/>
      </li>
      <li>
        <img className={checkEmptyItem(matchData.item2)} src={getItemImage(matchData.item2)} width='25px' height='25px' alt=''/>
      </li>
      <li>
        <img className={checkEmptyItem(matchData.item3)} src={getItemImage(matchData.item3)} width='25px' height='25px' alt=''/>
      </li>
      <li>
        <img className={checkEmptyItem(matchData.item4)} src={getItemImage(matchData.item4)} width='25px' height='25px' alt=''/>
      </li>
      <li>
        <img className={checkEmptyItem(matchData.item5)} src={getItemImage(matchData.item5)} width='25px' height='25px' alt=''/>
      </li>
    </React.Fragment>
  )
}

export default ItemPurchase