import React, { useEffect, useRef, useState } from 'react'
import style from './cardslider.module.css';
import { cardProps } from './cards.props';
import CardU from './cardUniversal/CardU';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import  {useDispatch}  from "react-redux";
import  {addcard}  from '../../redux/basketSlice';

const CardSlider = () => {
  const [card, setCard] = useState([]);
  const[left,setLeft] = useState(0)
  const disp = useDispatch();
  useEffect(() => {
    setCard(cardProps);
  }, [])
const LIMIT = -3645;
 
  return (
    <div className={style.cardslider}>
     
      <div className={style.top}>
        <h2>Товары со скидкой</h2>
        <p>Наша компания предлагает покупать товар со скидкой не только в дни распродаж <br />
          или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>

      </div>
      <div className={style.btn}>
        <button 
        disabled={left== LIMIT?true:false}
        onClick={()=>setLeft(left=>left-1215)} 
        className={style.prev} ><ArrowBackIosNewOutlinedIcon style={{color:'#fff',cursor:'pointer',}}/>
        </button>
        <div className={style.slider}>

          <div style={{transition:'3s',left:`${left}px`}} className={style.sliderlist}>
            {
              card.map((el) => {
                return <CardU price={el.price} oldPrice={el.oldPrice} image={el.image} title={el.title} text={el.text} />
              })
            }
          </div>

        </div>
        <button 
        
        onClick={()=>setLeft(0)}
         className={style.next}><ArrowForwardIosOutlinedIcon style={{color:'#fff',cursor:'pointer'}}/></button>
      </div>


    </div>
  )
}

export default CardSlider