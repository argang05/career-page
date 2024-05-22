/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './videogallery.css';
import VideoContainer from './VideoContainer/VideoContainer';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
    
    const videoData = [
    {
        name: "Mr. XYZ",
        post: "COO India and Southeast Asia",
        videoUrl: "https://player.vimeo.com/video/948843172?h=3485a7ead3",
        thumbnail: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Ms. ABC",
        post: "Global Head, Cloud Tech",
        videoUrl: "https://player.vimeo.com/video/948843172?h=3485a7ead3",
        thumbnail: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Mr. PQR",
        post: "Communications Manager",
        videoUrl: "https://player.vimeo.com/video/948843172?h=3485a7ead3",
        thumbnail: "https://images.pexels.com/photos/9208560/pexels-photo-9208560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Mr. ABS",
        post: "HR Manager",
        videoUrl: "https://player.vimeo.com/video/948843172?h=3485a7ead3",
        thumbnail: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Mrs. KTP",
        post: "SDE 3",
        videoUrl: "https://player.vimeo.com/video/948843172?h=3485a7ead3",
        thumbnail: "https://images.pexels.com/photos/8528744/pexels-photo-8528744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "Mrs. RTS",
        post: "Project Manager",
        videoUrl: "https://player.vimeo.com/video/948843172?h=3485a7ead3",
        thumbnail: "https://images.pexels.com/photos/7677863/pexels-photo-7677863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
    ];


  const handlePlay = (video) => {
    setSelectedVideo(video);
  };

  const handleClose = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
      // Set the heading and video containers to visible after the component mounts
      setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
        <div className={`headingPart ${isVisible ? 'visible' : ''}`}>
        <div className='mark'></div>
        <h1>Meet Our People</h1>
        </div>
      <div className="video-gallery">
      {videoData.map((video, index) => (
          <VideoContainer key={index} video={video} onPlay={handlePlay} />
      ))}
      {selectedVideo && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <iframe
              src={`${selectedVideo?.videoUrl}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title={selectedVideo?.name}
            ></iframe>
          </div>
        </div>
      )}
      </div>
      </>
  );
};

export default VideoGallery;
