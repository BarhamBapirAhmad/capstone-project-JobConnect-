"use client";

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '15px'
};

const CustomMap = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  return (
    <div className="border-2 border-black rounded-2xl w-3/4 h-[550px] ml-16">
      <LoadScript googleMapsApiKey="AIzaSyA4avoHb0VTMcnkyVlKINDbbeqzIhOBcE4">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerLocation}
          zoom={13}
          options={{
            disableDefaultUI: true,
            gestureHandling: "greedy",
          }}
        >
          <Marker position={markerLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default CustomMap;
