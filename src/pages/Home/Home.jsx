import React from 'react'
import style from './home.module.css';
import Header from '../../components/header/Header.jsx';
import Slider from '../../components/slider/Slider.jsx';
import CardSectionOne from '../../components/cardSectionOne/CardSectionOne';
const Home = () => {
  return (
    <div>
     <Header/>
     <Slider/>
     <CardSectionOne/>
    </div>
  )
}

export default Home