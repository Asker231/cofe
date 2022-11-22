import React from 'react'
import { useSelector } from 'react-redux'
import CardU from '../../components/cardSlider/cardUniversal/CardU';
import style from './basket.module.css';
const Basket = () => {
 const sel = useSelector(state=>state.basket.arr);
  return (
    <div className={style.basket}>
        {
          sel.map((el)=>{
            return <CardU image={el.image} text={el.text} price={el.price} />
          })
        }
    </div>
  )
}

export default Basket