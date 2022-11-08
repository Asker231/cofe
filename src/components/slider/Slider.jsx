import React from 'react'
import style from './slider.module.css';

import imTwo from './assets/two.png';

import ButtonVarOne from '../subcomponents/button/ButtonVarOne';



const Slider = () => {
  return (
    <div className={style.slider}>
       <div className={style.right}>
        <img src={imTwo} alt="" />
       </div>
       <div className={style.left}>
       <h1>Свежеобжаренный кофе</h1>
        <p>Кофе Калининградской обжарки из разных стран<br/>
         произрастания с доставкой на дом.</p>
        <span>Мы обжариваем кофе <strong>каждые выходные.</strong></span>
        <ButtonVarOne w={30} size={16} title="Посмотреть каталог"/>
       </div>
    </div>
  )
}

export default Slider