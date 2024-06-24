import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );
  }, []);
  const handleLoad = (map) => {
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAz7_eKqTbd6gb7BJemxO4DzG6lby9z8R0"
      libraries={['places']}
      onLoad={handleLoad}
    >
      {currentLocation && (
        <GoogleMap
          mapContainerStyle={{ height: '780px', width: '100%' }}
          mapType="ROADMAP"
          zoom={13}
          center={currentLocation}
        />
      )}
    </LoadScript>
  );
};

export default Home;
