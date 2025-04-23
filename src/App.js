import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Welcome from './components/Welcome';
import GamesPage from './components/GamesPage';

function App() {
  const [userName, setUserName] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  const [showGames, setShowGames] = useState(false);

  useEffect(() => {
    // Verificar si ya hay un nombre guardado en localStorage
    const savedName = localStorage.getItem('vintaraUserName');
    if (savedName) {
      setUserName(savedName);
      setShowWelcome(true);
      
      // Cambiar a la página de juegos después de 3 segundos
      setTimeout(() => {
        setShowGames(true);
      }, 3000);
    }
  }, []);

  const handleNameSubmit = (name) => {
    localStorage.setItem('vintaraUserName', name);
    setUserName(name);
    setShowWelcome(true);
    
    // Cambiar a la página de juegos después de 3 segundos
    setTimeout(() => {
      setShowGames(true);
    }, 3000);
  };
  
  const handleResetApp = () => {
    setUserName('');
    setShowWelcome(false);
    setShowGames(false);
  };

  return (
    <div className="App">
      {!showWelcome && !showGames && (
        <LandingPage onNameSubmit={handleNameSubmit} />
      )}
      
      {showWelcome && !showGames && (
        <Welcome userName={userName} />
      )}
      
      {showGames && (
        <GamesPage userName={userName} onResetApp={handleResetApp} />
      )}
    </div>
  );
}

export default App;