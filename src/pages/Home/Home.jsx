import React from 'react'
import style from './home.module.css';

import Slider from '../../components/slider/Slider.jsx';
import CardSectionOne from '../../components/cardSectionOne/CardSectionOne';
import CardSlider from '../../components/cardSlider/CardSlider';
import Why from '../../components/sectionWhy/Why';
import BottomSec from '../../components/botSec/BottomSec';
import Bottom from '../../components/Bottom/Bottom';
const Home = () => {
  return (
    <div className={style.home}>
     
     <Slider/>
     <CardSectionOne/>
     <CardSlider/>
     <Why/>
     <BottomSec/>
     <Bottom/>
    </div>
  )
}

export default Home