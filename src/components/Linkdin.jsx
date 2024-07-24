import React from 'react';
import { Link } from 'react-router-dom'; // Assuming use of react-router-dom
import { FaLinkedin } from "react-icons/fa";

const LinkedInLink = () => {
  const linkedInUrl = 'https://www.linkedin.com/in/vidyamoludayan'; // Replace with your actual LinkedIn profile URL

  // Using react-router-dom Link for proper routing
  return (
    <Link to={linkedInUrl} target="_blank" rel="noopener noreferrer">
      <FaLinkedin  />
     
    </Link>
  );
};

export default LinkedInLink;
