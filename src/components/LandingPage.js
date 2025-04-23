import React, { useState } from 'react';
import '../styles/LandingPage.css';

function LandingPage({ onNameSubmit }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name);
    }
  };

  return (
    <div className="landing-container">
      <div className="landing-card">
        <h1>Hello, What's your name?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="name-input"
            autoFocus
          />
          <button type="submit" className="submit-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;