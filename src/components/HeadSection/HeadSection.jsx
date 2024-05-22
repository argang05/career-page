/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './headsection.css'

const HeadSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 200); // Slight delay to ensure transition works

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='headSection'>
      <div className={`hero-section ${loaded ? 'loaded' : ''}`}>
        <h2>Career At Tor</h2>
      </div>
    </div>
  )
}

export default HeadSection;