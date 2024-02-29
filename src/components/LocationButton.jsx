import './location-button.css';
import React from 'react';
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";

const LocationButton = () => {

return (

    <button className='button' id='location-button'>
      Find me
    </button>
  
);

};

export default LocationButton;
