import React from 'react';
import ProjectList from '../components/ProjectList';

function Projects() {
  return (
    <div>
      <div className='body_text'>
        <h1>My Projects</h1>
        <p>Below are is a list of projects I've created over the past few years. If you want to learn more about one, just click on it to see all the details.</p>
      </div>
      
      <ProjectList />
    </div>
  );
}

export default Projects;
