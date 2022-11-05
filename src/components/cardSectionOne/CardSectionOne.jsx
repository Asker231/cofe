import React, { useEffect, useState } from 'react'
import style from './cardSecOne.module.css';
import { cardData } from './card.props';
import vector from './assets/Vector.png';
import { Link } from 'react-router-dom';
import ButtonVarOne from '../subcomponents/button/ButtonVarOne';
import CardCategory from '../cards/CardCategory';
const CardSectionOne = () => {
    const[card,setCard] = useState([]);
    useEffect(()=>{
         setCard(cardData)
    },[])
  return (
    <div className={style.cardSectOne}>
        <h1>Каталоги нашей продукции</h1>
        <img className={style.vector} src={vector} alt="" />
        <div className={style.cards}>
            {
      card.map((el)=>{
         return <div className={style.card}>
          <CardCategory title={el.title} image={el.image}/>
          <Link to={el.path}><ButtonVarOne color="white" bcolor="#F9B300" title="купить" /></Link> 
         </div>
         })
            }
        </div>
    </div>
  )
}

export default CardSectionOne