import React, { useRef, useEffect } from "react";
import { Viewer, Entity, CameraFlyTo } from "resium";
import { Cartesian3, Color } from "cesium";

import { Ion } from "cesium";

// Set the base URL for Cesium's assets
window.CESIUM_BASE_URL = "/Cesium";

Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ODA5ZjU3My04YjBiLTRkNDYtYWQxOS0yOTIyYWYwMTEzOGMiLCJpZCI6MjQyNzUwLCJpYXQiOjE3MjY3NjYyNDJ9.iLQzGjIZDz4ylg2_27L5CbHohY8x7Uv996q-sKY5rCM";

const SatelliteVisualization = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (viewerRef.current) {
      console.log("Cesium viewer loaded.");
    }
  }, []);

  return (
    <Viewer full ref={viewerRef}>
      {/* Example of adding a satellite entity */}
      <Entity
        name="Satellite 1"
        position={Cartesian3.fromDegrees(-75.0, 50.0, 1000000.0)}
        point={{ pixelSize: 10, color: Color.RED }}
        description="Example satellite"
      />
      {/* Automatically fly the camera to the satellite's position */}
      <CameraFlyTo
        destination={Cartesian3.fromDegrees(-75.0, 45.0, 1000000.0)}
        duration={3}
      />
    </Viewer>
  );
};

export default SatelliteVisualization;
