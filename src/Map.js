import React, { useEffect } from 'react';

const Map = ({ address }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    document.body.appendChild(script);

    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: -34.397, lng: 150.644 },
      });

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
          new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
          });
        } else {
          console.error('Geocode was not successful: ' + status);
        }
      });
    };
  }, [address]);

  return <div id="map" className="map"></div>;
};

export default Map;

