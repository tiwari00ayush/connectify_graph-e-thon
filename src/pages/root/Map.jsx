import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
const Map = () => {
  const TOKEN = import.meta.VITE_MAP_ID;
  console.log(TOKEN);
  const [viewPort, setViewPort] = useState({
    latitude: 28.6448,
    longitude: 72.216,
    zoom: 6,
  });
  return (
    <div className="w-full h-screen">
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken={TOKEN}
        width={"100%"}
        height={"100%"}
        transitionDuration={"200"}
        mapStyle={"mapbox://styles/tiwari-ayush/clw1puco502gl01qv9om4c6cv"}
      ></ReactMapGl>
    </div>
  );
};

export default Map;
