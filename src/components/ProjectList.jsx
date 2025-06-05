import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../assets/projectdata.json';
import '../index.css';

function ProjectList() {
  return (
    <div className="facts_row project_card_grid">
      <div className="facts_items">
        {projectData.projects.map((project, index) => {
          const colorClass = index % 2 === 0 ? 'rose' : 'pearl';

          return (
              <Link to={`/projects/${project.projectId}`} key={project.projectId} className={`facts_item ${colorClass} project_link`}>
                <h2>{project.title}</h2>
                <p>{project.descriptionShort}</p>
              </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;


