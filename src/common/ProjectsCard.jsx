import React from 'react';

function ProjectCard({ src, link, h3, p, stack }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="project-card">
      <img src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
      <small>{stack}</small>
    </a>
  );
}

export default ProjectCard;