import React from 'react';
import ScrollImageGallery from './ScrollImageGallery';
import projectData from '../assets/projectdata.json';

function ProjectItem({ projectId }) {
  const project = projectData.projects.find(p => p.projectId === projectId);

  const docUrl = new URL(`../assets/documentation/${project.documentation}`, import.meta.url).href;


  return (
    <div>
        <div className='body_text'>
            <h1>{project.title}</h1>
            <p>{project.descriptionFull}</p>

            {project.documentation && (
            <button className='download'
              onClick={() => {
                const link = document.createElement('a');
                link.href = docUrl;
                link.download = project.documentation; 
                link.click();
              }}
            >
              Download Project Documentation
            </button>
          )}


        </div>

      

      <div className="facts_row">
        <div className="facts_items">

          <div className="facts_item rose">
            <h2>Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}><p>{feature}</p></li>
              ))}
            </ul>
          </div>

          <div className="facts_item pearl">
            <h2>Languages Used</h2>
            <ul>
              {project.languages.map((lang, index) => (
                <li key={index}><p>{lang}</p></li>
              ))}
            </ul>
          </div>

          <div className="facts_item rose">
            <h2>Tools</h2>
            <ul>
              {project.tools.map((tool, index) => (
                <li key={index}><p>{tool}</p></li>
              ))}
            </ul>
          </div>

          <div className="facts_item pearl">
            <h2>Categories</h2>
            <ul>
              {project.categories.map((cat, index) => (
                <li key={index}><p>{cat}</p></li>
              ))}
            </ul>
          </div>

          <div className="facts_item rose">
            <h2>Project Length</h2>
            <ul>
              <li><p>{project.duration}</p></li>
            </ul>
          </div>

          <div className="facts_item pearl">
            <h2>Completed In</h2>
            <ul>
              <li><p>{project.yearCompleted}</p></li>
            </ul>
          </div>

        </div>
      </div>

      <ScrollImageGallery images={project.images} title={project.title} />
    </div>

  );
}

export default ProjectItem;
