import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectItem from '../components/ProjectItem';

function ProjectDetails() {
  const { id } = useParams();

  return <ProjectItem projectId={parseInt(id)}
  
  />;
}

export default ProjectDetails;
