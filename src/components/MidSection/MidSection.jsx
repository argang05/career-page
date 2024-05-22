/* eslint-disable no-unused-vars */
import React from 'react'
import './midsection.css'
import Description from './Description/Description';
import VideoGallery from './VideoGallery/VideoGallery';



const MidSection = () => {
  return (
    <div className='midSection'>
      <Description />
      <VideoGallery/>
    </div>
  )
}

export default MidSection;