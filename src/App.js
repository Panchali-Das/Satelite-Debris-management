import React, { useState } from "react";
import HomePage from "./Homepage"; // Basic HTML page
import SatelliteVisualization from "./SatelliteVisualization"; // Updated Cesium component

const App = () => {
  const [showCesium, setShowCesium] = useState(false);

  // Function to switch to the Cesium view
  const switchToCesium = () => {
    setShowCesium(true);
  };

  return (
    <div className="App">
      {/* Render the HomePage or SatelliteVisualization based on the state */}
      {showCesium ? (
        <SatelliteVisualization />
      ) : (
        <HomePage switchToCesium={switchToCesium} />
      )}
    </div>
  );
};

export default App;
