/* eslint-disable no-unused-vars */
import React from 'react'
import './bottomsection.css'
import Slider from './Slider/Slider';
import Vacancy from './Vacancy/Vacancy';

const BottomSection = () => {
  return (
    <div className='bottomSection'>
      <Slider />
      <Vacancy/>
    </div>
  )
}

export default BottomSection;