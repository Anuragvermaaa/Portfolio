import React from 'react';
import './InitialLoader.css'; // Assuming you create this CSS file

const InitialLoader = () => {
  return (
    <div className="initial-loading-container">
      <div className="loading-spinner"></div>
      <p>Loading initial content...</p>
    </div>
  );
};

export default InitialLoader;