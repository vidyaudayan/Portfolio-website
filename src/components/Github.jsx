import React from 'react';
import { Link } from 'react-router-dom'; // Assuming use of react-router-dom
import { FaSquareGithub } from "react-icons/fa6";

const GitLink = () => {
  const gitUrl = 'https://github.com/vidyaudayan'; // Replace with your actual LinkedIn profile URL

  // Using react-router-dom Link for proper routing
  return (
    <Link to={gitUrl} target="_blank" rel="noopener noreferrer">
     <FaSquareGithub />
     
    </Link>
  );
};

export default GitLink;
