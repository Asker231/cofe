import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import style from './cardSecOne.module.css';
import { cardData } from './card.props';
import vector from './assets/Vector.png';

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
         return <><Card title={el.title} image={el.image} /></>
      })
            }
        </div>
    </div>
  )
}

export default CardSectionOne