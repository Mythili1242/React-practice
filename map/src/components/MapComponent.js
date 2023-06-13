// import React, { useEffect } from 'react';
// import tt from '@tomtom-international/web-sdk-maps';
// import '@tomtom-international/web-sdk-maps/dist/maps.css';

// const MapComponent = () => {
//   useEffect(() => {
//     const mapContainer = document.getElementById('map');

//     const map = tt.map({
//       key: 'qyOgH14GkWabsOXI0AGZGbGmfpdQii8A',
//       container: mapContainer,
//       center: [20.5937,78.9629],
//       zoom: 13
//     });

//     const searchLocations = async () => {
//       try {
//         const response = await fetch(
//           `https://api.tomtom.com/search/2/search/india.json?key=qyOgH14GkWabsOXI0AGZGbGmfpdQii8A`
//         );
//         const data = await response.json();
//         handleSearchResults(data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const handleSearchResults = (results) => {
//       results.forEach((result) => {
//         const marker = new tt.Marker().setLngLat(result.position).addTo(map);

//         const popup = new tt.Popup({ offset: 35 }).setHTML(result.address.freeformAddress);
//         marker.setPopup(popup);
//         marker.togglePopup();
//       });
//     };

//     searchLocations();

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return <div id="map" style={{ height: '400px' }}></div>;
// };

// export default MapComponent;




// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// const MapComponent = () => {
//   useEffect(() => {
//     const map = L.map('map').setView([ 17.385044,78.486671], 5);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

//     const searchLocations = async () => {
//       try {
//         const response = await fetch(
//           `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${map.getCenter().lat}&lon=${map.getCenter().lng}`
//         );
//         const data = await response.json();
//         handleSearchResults(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const handleSearchResults = (data) => {
//       const marker = L.marker([data.lat, data.lon]).addTo(map);
//       marker.bindPopup(data.display_name).openPopup();
//     };

//     searchLocations();

//     return () => {
//       map.remove();
//     };
//   }, []);

//   return <div id="map" style={{ height: '400px' }}></div>;
// };

// export default MapComponent;



// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
// import 'leaflet-routing-machine';
// import customMarkerIcon from '../placeholder.png'

// const MapComponent = () => {
//   useEffect(() => {
//     const map = L.map('map').setView([17.385044, 78.486671], 13);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

//     const startCoordinates = [17.4326, 78.4546];
//     const endCoordinates = [17.4368, 78.3944];

//     const customIcon = L.icon({
//         iconUrl: customMarkerIcon, // Path to your custom marker image
//         iconSize: [32, 32], // Size of the custom marker image
//         iconAnchor: [16, 32], // Anchor point of the custom marker image
//       });

//       const startMarker = L.marker(startCoordinates, { icon: customIcon }).addTo(map);
//       const endMarker = L.marker(endCoordinates, { icon: customIcon }).addTo(map);


//     const routingControl = L.Routing.control({
//       waypoints: [
//         L.latLng(startCoordinates[0], startCoordinates[1]),
//         L.latLng(endCoordinates[0], endCoordinates[1])
//       ],
//       routeWhileDragging: true
//     }).addTo(map);

    

//     return () => {
//       map.remove();
//       routingControl.getPlan().setWaypoints([]);
//     };
//   }, []);

//   return <div id="map" style={{ height: '400px' }}></div>;
// };

// export default MapComponent;


//==============================

// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import movingMarkerIcon from '../placeholder.png'; // Path to your moving marker image

// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const markerRef = useRef(null);

//   useEffect(() => {
//     const map = L.map('map').setView([17.4326, 78.4546], 17);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

//     mapRef.current = map;

//     const marker = L.marker([17.4326, 78.4546], {
//       icon: L.icon({ iconUrl: movingMarkerIcon, iconSize: [32, 32] })
//     }).addTo(map);

//     markerRef.current = marker;

//     const destination = [17.4368, 78.3944];
//     const duration = 150000000; // Duration in milliseconds

//     const start = Date.now();
//     const end = start + duration;

//     const moveMarker = () => {
//       const now = Date.now();
//       const progress = (now - start) / duration;

//       if (now >= end) {
//         marker.setLatLng(destination);
//         clearInterval(moveInterval);
//       } else {
//         const lat = interpolate(marker.getLatLng().lat, destination[0], progress);
//         const lng = interpolate(marker.getLatLng().lng, destination[1], progress);
//         marker.setLatLng([lat, lng]);
//       }
//     };

//     const interpolate = (start, end, progress) => {
//       return start + (end - start) * progress;
//     };

//     const moveInterval = setInterval(moveMarker, 1000 / 30); // Move the marker 60 times per second



    
//     return () => {
//       clearInterval(moveInterval);
//       alert("destination reached")
//       map.remove();
     
//     };
//   }, []);

//   return <div id="map" style={{ height: '400px' }}></div>;
// };

// export default MapComponent;

//============================



// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import movingMarkerIcon from '../placeholder.png'; // Path to your moving marker image

// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const markerRef = useRef(null);
//   const [distance, setDistance] = useState(0);
//   const [estimatedTime, setEstimatedTime] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [endTime, setEndTime] = useState(0);

//   useEffect(() => {
//     const map = L.map('map').setView([17.4326, 78.4546], 17);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

//     mapRef.current = map;

//     const marker = L.marker([17.4326, 78.4546], {
//       icon: L.icon({ iconUrl: movingMarkerIcon, iconSize: [32, 32] })
//     }).addTo(map);

//     markerRef.current = marker;

//     const start = [17.4326, 78.4546];
//     const destination = [17.4368, 78.3944];
//     const duration = 150000; // Duration in milliseconds (reduced for testing)

//     const calculateDistance = (start, end) => {
//       const [lat1, lon1] = start;
//       const [lat2, lon2] = end;

//       const earthRadius = 6371; // in kilometers
//       const dLat = degToRad(lat2 - lat1);
//       const dLon = degToRad(lon2 - lon1);

//       const a =
//         Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//         Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) *
//         Math.sin(dLon / 2) * Math.sin(dLon / 2);
//       const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//       const distance = earthRadius * c;

//       return distance;
//     };

//     const degToRad = (angle) => {
//       return angle * (Math.PI / 180);
//     };

//     const calculatedDistance = calculateDistance(start, destination);
//     const speed = 60; // km/h

//     const estimatedTime = (calculatedDistance / speed) * 60; // Convert to minutes
//     setDistance(calculatedDistance);
//     setEstimatedTime(estimatedTime);

//     const startTimestamp = Date.now();
//     const endTimestamp = startTimestamp + duration;
//     setEndTime(endTimestamp);

//     const moveMarker = () => {
//       const now = Date.now();
//       const progress = (now - startTimestamp) / duration;

//       if (now >= endTimestamp) {
//         marker.setLatLng(destination);
//         clearInterval(moveInterval);
//         alert('Destination reached');
//       } else {
//         const lat = interpolate(marker.getLatLng().lat, destination[0], progress);
//         const lng = interpolate(marker.getLatLng().lng, destination[1], progress);
//         marker.setLatLng([lat, lng]);

//         const elapsedTime = now - startTimestamp;
//         const remainingTime = duration - elapsedTime;
//         setTimeLeft(remainingTime / 1000 / 60); // Convert milliseconds to minutes
//       }
//     };

//     const interpolate = (start, end, progress) => {
//       return start + (end - start) * progress;
//     };

//     const moveInterval = setInterval(moveMarker, 1000 / 30); // Move the marker 30 times per second

//     return () => {
//       clearInterval(moveInterval);
//       map.remove();
//     };
//   }, []);

//   return (
//     <div>
//       <div id="map" style={{ height: '400px' }}></div>
//       <div>
//         Distance: {distance.toFixed(2)} km
//       </div>
//       <div>
//         Estimated Time: {estimatedTime.toFixed(2)} minutes
//       </div>
//       <div>
//         Time Left: {Math.max(timeLeft, 0).toFixed(2)} minutes
//       </div>
//     </div>
//   );
// };

// export default MapComponent;



// import React, { useEffect, useRef, useState } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// import movingMarkerIcon from '../placeholder.png'; // Path to your moving marker image

// const MapComponent = () => {
//   const mapRef = useRef(null);
//   const markerRef = useRef(null);
//   const [distance, setDistance] = useState(0);
//   const [timeRequired, setTimeRequired] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(0);

//   useEffect(() => {
//     const map = L.map('map').setView([17.4326, 78.4546], 17);

//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; OpenStreetMap contributors'
//     }).addTo(map);

//     mapRef.current = map;

//     const marker = L.marker([17.4326, 78.4546], {
//       icon: L.icon({ iconUrl: movingMarkerIcon, iconSize: [32, 32] })
//     }).addTo(map);

//     markerRef.current = marker;

//     const destination = [17.4368, 78.3944];
//     const duration = 150000000; // Duration in milliseconds

//     const start = Date.now();
//     const end = start + duration;

//     const moveMarker = () => {
//       const now = Date.now();
//       const progress = (now - start) / duration;

//       if (now >= end) {
//         marker.setLatLng(destination);
//         clearInterval(moveInterval);
//       } else {
//         const lat = interpolate(marker.getLatLng().lat, destination[0], progress);
//         const lng = interpolate(marker.getLatLng().lng, destination[1], progress);
//         marker.setLatLng([lat, lng]);
//       }

//       // Calculate distance
//       const distanceTraveled = getDistance(marker.getLatLng(), destination);
//       setDistance(distanceTraveled);

//       // Calculate time required and time left
//       const elapsedTime = now - start;
//       const remainingTime = duration - elapsedTime;
//       setTimeRequired(elapsedTime);
//       setTimeLeft(remainingTime);
//     };

//     const interpolate = (start, end, progress) => {
//       return start + (end - start) * progress;
//     };

//     const moveInterval = setInterval(moveMarker, 1000 / 30); // Move the marker 30 times per second

//     return () => {
//       clearInterval(moveInterval);
//       alert('Destination reached');
//       map.remove();
//     };
//   }, []);

//   // Function to calculate distance between two points using Haversine formula
//   const getDistance = (point1, point2) => {
//     const toRadians = (value) => (value * Math.PI) / 180;
//     const earthRadius = 6371; // Radius of the earth in kilometers
//     const lat1 = toRadians(point1.lat);
//     const lon1 = toRadians(point1.lng);
//     const lat2 = toRadians(point2[0]);
//     const lon2 = toRadians(point2[1]);
//     const dlat = lat2 - lat1;
//     const dlon = lon2 - lon1;

//     const a =
//       Math.sin(dlat / 2) ** 2 +
//       Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const distance = earthRadius * c;
//     return distance.toFixed(2); // Return distance rounded to 2 decimal places
//   };

//   return (
//     <div>
//       <div id="map" style={{ height: '400px' }}></div>
//       <div>
//         <p>Distance: {distance} km</p>
//         <p>Time Required: {timeRequired} ms</p>
//         <p>Time Left: {timeLeft} ms</p>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;


  import React, { useEffect, useRef, useState } from 'react';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  import movingMarkerIcon from '../placeholder.png'; // Path to your moving marker image

  const MapComponent = () => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const [distance, setDistance] = useState(0);
    const [travelTime, setTravelTime] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);

    useEffect(() => {
      const map = L.map('map').setView([17.4326, 78.4546], 17);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      mapRef.current = map;

      const marker = L.marker([17.4326, 78.4546], {
        icon: L.icon({ iconUrl: movingMarkerIcon, iconSize: [32, 32] })
      }).addTo(map);

      markerRef.current = marker;

      const destination = [17.4368, 78.3944];
      const duration = 60000; // Duration in milliseconds-time required to reach the destination  1min=60000ms


        // Calculate and update the distance between starting point and ending point
        const currentDistance = calculateDistance(marker.getLatLng(), destination);
        setDistance(currentDistance);

      
        // const now = Date.now();
        const start = Date.now();


    
      const end = start + duration;

      const moveMarker = () => {
        const now = Date.now();
        const progress = (now - start) / duration;

        if (now >= end) {
          marker.setLatLng(destination);
          clearInterval(moveInterval);
          alert('Destination reached')
        } else {
          const lat = interpolate(marker.getLatLng().lat, destination[0], progress);
          const lng = interpolate(marker.getLatLng().lng, destination[1], progress);
          marker.setLatLng([lat, lng]);

          // Calculate and update the travel time
          const elapsedTime = now - start;
          setTravelTime(elapsedTime/1000/60);
          // Calculate and update the time remaining to reach the destination
          const remainingTime = end - now;
          setTimeRemaining(remainingTime/1000/60);
        
           
          
        }
      };

      const interpolate = (start, end, progress) => {
        return start + (end - start) * progress;
      };

      const moveInterval = setInterval(moveMarker, 1000 / 30); // Move the marker 30 times per second

      return () => {
        clearInterval(moveInterval);
        
        map.remove();
      };
    }, []);

    const calculateDistance = (pointA, pointB) => {
      const lat1 = pointA.lat;
      const lon1 = pointA.lng;
      const lat2 = pointB[0];
      const lon2 = pointB[1];

      const R = 6371; // Radius of the Earth in km
      const dLat = deg2rad(lat2 - lat1);
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;

      return distance;
    };

    const deg2rad = (deg) => {
      return deg * (Math.PI / 180);
    };

    return (
      <div>
        <div id="map" style={{ height: '400px' }}></div>
        <div>
          Distance: {distance.toFixed(2)} km<br />
          distance travelled: {travelTime.toFixed(2)} minutes<br />
          Time Remaining: {timeRemaining.toFixed(2)} minutes
        
        </div>
      </div>
    );
  };

  export default MapComponent;


