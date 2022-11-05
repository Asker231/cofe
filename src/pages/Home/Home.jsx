import React from 'react'
import style from './home.module.css';

import Slider from '../../components/slider/Slider.jsx';
import CardSectionOne from '../../components/cardSectionOne/CardSectionOne';
import CardSlider from '../../components/cardSlider/CardSlider';
const Home = () => {
  return (
    <div className={style.home}>
     
     <Slider/>
     <CardSectionOne/>
     <CardSlider/>
    </div>
  )
}

export default Home