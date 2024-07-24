import React from 'react';

const Servicecard = ({ icon, title, description, link, linkText }) => {
  return (
    <div className="service-card">
      <i className={icon} style={{ color: "rgba(210,35,25,0.67)" }} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} className="read">
        {linkText}
      </a>
    </div>
  );
};

export default Servicecard;
