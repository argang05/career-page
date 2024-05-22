/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import './videocontainer.css';

const VideoContainer = ({ video, onPlay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef?.current) {
      observer.observe(containerRef?.current);
    }

    return () => {
      if (observer && observer.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`video-container ${isVisible ? 'visible' : ''}`}
      onClick={() => onPlay(video)}
    >
            <img src={video?.thumbnail} alt={video?.name} />
      <div className="play-icon">
        <p>&#9658;</p>
            </div>
            <div className="info">
                <h3>{video?.name}</h3>
                <p>{video?.post}</p>
      </div>
    </div>
  );
};

export default VideoContainer;
