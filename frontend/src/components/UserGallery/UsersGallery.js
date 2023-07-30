// ImageGallery.js

import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="ImageGallery-container">
      <div className="ImageGallery-row " style={{display:"flex" , padding:"5px"}} >
        <img
          src='https://www.privateinternetaccess.com/blog/wp-content/uploads/2018/12/ads-following-you-1200x630.jpg'
          alt='ads'style={{width:"170px"}}
        />
        <img
          src='https://cdn.dribbble.com/users/4466208/screenshots/10762437/happenmockup_vers2.png'
          alt='ads'style={{width:"170px" , height:"140px" }}
        />
      </div>

      <div className="ImageGallery-row " style={{alignItems:"center"}}>
        {/* <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>Explore</p>
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#000" }}>see all</p>
        </div> */}
        <div className="ImageGallery-grid">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
