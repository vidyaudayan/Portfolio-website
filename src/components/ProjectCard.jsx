
import React, { useState } from 'react';

const ProjectCard = ({ title, imageSrc, description,readMoreText }) => {
 

  const [isExpanded, setIsExpanded] = React.useState(false); // State for expanded description

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded); // Toggle expansion on click
  };
  return (
    <div className="card">
      <div className="content">
        <p className="heading">
          {title}
         
        </p>
        <img src={imageSrc} alt=""/>
        <p className="para">
          {isExpanded ? description : `${description.slice(0, 100)}...`} {/* Truncate description on initial render */}
          {isExpanded && <span className="moreText">{description.slice(100)}</span>} {/* Show full description when expanded */}
        </p>
        <button className="btn" onClick={handleReadMoreClick}>
          {isExpanded ? 'Read less' : readMoreText || 'Read more'} {/* Dynamic read more text */}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
