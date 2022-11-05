import React from 'react'
import style from './cardslider.module.css';

const CardSlider = () => {
  return (
    <div className={style.cardslider}>
        <div className={style.top}>
            <h2>Товары со скидкой</h2>
            <p>Наша компания предлагает покупать товар со скидкой не только в дни распродаж <br/>
           или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!</p>
        </div>

    </div>
  )
}

export default CardSlider