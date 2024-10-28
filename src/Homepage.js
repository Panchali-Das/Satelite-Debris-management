import React from "react";
import "./HomePage.css"; // Custom CSS for the page

const HomePage = ({ switchToCesium }) => {
  return (
    <div className="home-page">
      <h1>Welcome to Astro Track</h1>
      <h2>Your debris tracking platform</h2>
      <p>Click here to switch to Cesium globe.</p>

      {/* Button to switch to the Cesium globe */}
      <button className="switch-button" onClick={switchToCesium}>
        View Satellite Globe
      </button>
    </div>
  );
};

export default HomePage;
