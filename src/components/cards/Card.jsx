import React from 'react'
import style from './card.module.css';
import ButtonVarOne from '../subcomponents/button/ButtonVarOne.jsx';
const Card = ({title,image}) => {
  return (
    <div className={style.card}>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <ButtonVarOne color="white" bcolor="#F9B300" title="купить" />
    </div>
  )
}

export default Card