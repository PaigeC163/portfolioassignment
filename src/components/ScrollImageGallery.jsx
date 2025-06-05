import React from 'react';
import '../index.css';


function ScrollImageGallery({ images, title }) {
  return (
    <div className="scroll_container">
      {images.map((img, index) => {
        const imageUrl = new URL(`../assets/images/${img.url}`, import.meta.url).href;
        return (
          <div className="scroll_card" key={index}>
            <div className="scroll_image_container">
              <img src={imageUrl} alt={img.alt} />
              <div className="caption">
                <p>
                  <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{title}</span><br />
                  {img.caption}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ScrollImageGallery;
