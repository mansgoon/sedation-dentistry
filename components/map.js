'use client';
import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '0.5rem',
  border: '2px solid #5BA3BB',
  objectFit: 'cover',
  overflow: 'hidden',
};

const center = {
  lat: 43.5833287,
  lng: -79.6396899,
};

export function Map() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);

  useEffect(() => {
    const handleScriptLoad = () => {
      setMapLoaded(true);
    };

    const loadGoogleMapsScript = () => {
      if (typeof google === 'object' && typeof google.maps === 'object') {
        // Google Maps script is already loaded
        setMapLoaded(true);
      } else {
        // Add the script to load Google Maps
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAiYY_rGwhGOP2g0l9NP9AnZTp9ShVRtgg`;
        script.async = true;
        script.defer = true;
        script.onload = handleScriptLoad;
        document.head.appendChild(script);
      }
    };

    loadGoogleMapsScript();
  }, []);

  const handleMarkerClick = () => {
    setIsInfoWindowOpen(true);
  };

  const handleInfoWindowClose = () => {
    setIsInfoWindowOpen(false);
  };

  return (
    <>
      {mapLoaded ? (
        <div className="box-border aspect-[1.42] min-h-[20px] min-w-[20px] animate-fade-in animation-delay-1">
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
            <Marker position={center} onClick={handleMarkerClick} />
            {isInfoWindowOpen && (
              <InfoWindow position={center} onCloseClick={handleInfoWindowClose}>
                <div className="text-gray-800">
                  {/* marker info */}
                  <h3 className="font-bold">Awake or Asleep</h3>
                  <p className="pt-2">325 Central Parkway West,<br />Mississauga, ON L5B3X9</p>
                  <p className="pt-2">
                    <a
                      href="https://www.google.com/maps/place/Awake+Or+Asleep/@43.583496,-79.639578,17z/data=!3m1!5s0x882b46d757741dad:0xe63706c22d40dff8!4m14!1m7!3m6!1s0x882b46d69d050415:0x83928f5cb86ee498!2sTim+Hortons!8m2!3d43.5838838!4d-79.6382783!16s%2Fg%2F11c5sgnpzc!3m5!1s0x882b46d989280177:0xa38f38e830f9d97d!8m2!3d43.5833296!4d-79.639691!16s%2Fg%2F1tf6bp9y?hl=en-US&entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'blue' }}
                      
                    >
                      View on Google Maps
                    </a>
                  </p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      ) : (
        <div className="box-border aspect-[1.42] min-h-[20px] min-w-[20px] bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
    </>
  );
}
