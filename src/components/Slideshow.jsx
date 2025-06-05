import '../index.css';
import {Outlet, Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import projectData from '../assets/projectdata.json';

function Slideshow() {
  const projects = projectData.projects;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = projects.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => setCurrentIndex(index);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % totalSlides);

  return (
    <div className="slideshow">
      {projects.map((project, index) => {
        const imageUrl = new URL(`../assets/images/${project.images[0].url}`, import.meta.url).href;
        return (
          <div
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            key={project.projectId} >
            <Link to={`/projects/${project.projectId}`} className="image_container" style={{ textDecoration: 'none' }}>
              <img src={imageUrl} alt={project.images[0].alt} />
              <div className="caption">
                <p>
                  <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{project.title}</span><br />
                  {project.descriptionShort}
                </p>
              </div>
            </Link>

          </div>
        );
      })}

      <button className="slide_nav prev" onClick={prevSlide}>&#10094;</button>
      <button className="slide_nav next" onClick={nextSlide}>&#10095;</button>

      <div className="indicators">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;