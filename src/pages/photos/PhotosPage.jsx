import './photos-page.css';
import React from 'react';

const PhotosPage = ()=> {

  return (
    <div id='photo-gallery'>
      <img id='media-icon' src='/assets/add-media-icon.webp'/>
      <img class='uploaded-imgs'></img>
      <img class='uploaded-imgs'></img>
    </div>

  );
};

export default PhotosPage