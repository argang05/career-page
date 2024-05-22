/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './slider.css';

const Slider = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set the slides to visible after the component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className='slider'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className={`slide slide1 ${isVisible ? 'visible' : ''}`}>
          <div className="content">
            <h1>Why Choose Tor?</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`slide slide2 ${isVisible ? 'visible' : ''}`}>
          <div className="content">
            <h2>Innovate the future with Tor.ai's cutting-edge IoT solutions.</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`slide slide3 ${isVisible ? 'visible' : ''}`}>
          <div className="content">
            <h2>Join Tor.ai and lead the revolution in smart technology.</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
