import './map.css'
import React from 'react'
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import LocationButton from '../../components/LocationButton';
import Menu from '../../components/Menu';

const InitialMap = () => {
 const key="AIzaSyDZ_BoYamGBAiSl39ecf0txlnYLWC73QuM";
 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: key,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    
    <div className="App">
      <Menu/>
      <LocationButton/>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
          
        />
      )}
    </div>
  );


};




export default InitialMap;

