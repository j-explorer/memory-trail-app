import './menu.css';
import React from 'react';
import PhotosPage from '../pages/photos/PhotosPage';


const Menu = () =>{

  return(
    <nav id='slider'>

      <div id='slider-top'></div>

     <div id='location-icons'>
      <div class='icons'>
       <img src='/assets/location-icons/destination-icon.webp'/>
      </div>
      <div class='icons' id='favorite-icon'>
      <img src='/assets/location-icons/favorite-icon.webp'/>
      </div>
      <div class='icons' id='visited-icon'>
      <img src='/assets/location-icons/visited-icon.webp'/>
      </div>
      <div class='icons' id='delete-icon'>
      <img src='/assets/location-icons/delete-icon.webp'/>
      </div>
     </div>

     <nav id='menu'>
      <div class='menu-items'>
        <p>Photos</p>
      </div>
      <div class='menu-items'>
        <p>Videos</p>
      </div>
      <div class='menu-items'>
        <p>Notes</p>
      </div>
      <div class='menu-items' id='voice-recordings'>
        <p>Voice Recordings</p>
      </div>
      <div class='menu-items'>
         <p>View All</p>
      </div>
      <div class='menu-items'>
         <p>Settings</p>
      </div>
     </nav>

     <div id='gallery'>
      <PhotosPage/>
     </div>
    </nav>
  );

};

export default Menu;