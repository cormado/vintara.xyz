import React from 'react';
import '../styles/Welcome.css';

function Welcome({ userName }) {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome {userName}</h1>
        <div className="loader"></div>
        <p>Loading games...</p>
      </div>
    </div>
  );
}

export default Welcome;