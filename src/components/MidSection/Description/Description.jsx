/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import './description.css';

const Description = () => {
  const [isVisibleWhat, setIsVisibleWhat] = useState(false);
  const [isVisibleHow, setIsVisibleHow] = useState(false);
  const whatRef = useRef(null);
  const howRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.1
    };

    const observerWhat = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleWhat(true);
          observerWhat.disconnect();
        }
      });
    }, options);

    const observerHow = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisibleHow(true);
          observerHow.disconnect();
        }
      });
    }, options);

    if (whatRef.current) {
      observerWhat.observe(whatRef.current);
    }

    if (howRef.current) {
      observerHow.observe(howRef.current);
    }

    return () => {
      if (observerWhat) observerWhat.disconnect();
      if (observerHow) observerHow.disconnect();
    };
  }, []);

  return (
    <div className='description'>
      <div ref={whatRef} className={`what ${isVisibleWhat ? 'visible' : ''}`}>
        <div className='theory'>
          <div className='mark'></div>
          <div className='text'>
            <h1>What we offer</h1>
            <h3>An opportunity to reinvent your world.</h3>
            <p>Work with diverse and driven people on global projects that are truly shaping the world. Seize the opportunity to learn, grow, and realize your ambitions.</p>
          </div>
        </div>
        <img src='https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='an image' />
      </div>
      <div ref={howRef} className={`how ${isVisibleHow ? 'visible' : ''}`}>
        <img src='https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='an image' />
        <div className='theory'>
          <div className='mark'></div>
          <div className='text'>
            <h1>How we do it</h1>
            <h3>By acting boldly.</h3>
            <p>Accelerate your growth through curated learning and development opportunities. Get the autonomy to act with confidence and create the future. Are you ready to never stand still?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
