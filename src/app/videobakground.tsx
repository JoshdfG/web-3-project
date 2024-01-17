import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="">
      <video autoPlay loop muted className="">
        <source src="/cards-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {/* Add other content on top of the video if needed */}
    </div>
    
  );
};

export default VideoBackground;
