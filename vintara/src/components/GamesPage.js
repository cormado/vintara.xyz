import React, { useState } from 'react';
import '../styles/GamesPage.css';
import Calculator from './Calculator';

function GamesPage({ userName, onResetApp }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeItem, setActiveItem] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const items = [
    {
      id: 1,
      title: "Zombies Recall",
      description: "Test your memory against zombie hordes",
      image: "zombierecall.png",
      category: "game"
    },
    {
      id: 2,
      title: "Calculator",
      description: "Simple calculator for your daily needs",
      image: "calculator.png",
      category: "app"
    }
  ];
  
  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const games = filteredItems.filter(item => item.category === "game");
  const apps = filteredItems.filter(item => item.category === "app");

  const handleItemOpen = (item) => {
    setLoading(true);
    // Simular tiempo de carga
    setTimeout(() => {
      setActiveItem(item);
      setLoading(false);
    }, 1500);
  };

  const handleBack = () => {
    setActiveItem(null);
  };

  const handleExit = () => {
    if (window.confirm("¿Estás seguro de que deseas salir? Se borrarán todos tus datos guardados.")) {
      localStorage.removeItem('vintaraUserName');
      onResetApp();
    }
  };

  // Si hay un juego activo, mostrar su contenido
  if (activeItem) {
    return (
      <div className="games-container">
        <header className="games-header">
          <h1>Vintara</h1>
          <button className="back-button" onClick={handleBack}>Back</button>
          <div className="user-section">
            <p className="user-greeting">Hello, {userName}!</p>
            <button className="exit-button" onClick={handleExit}>Exit</button>
          </div>
        </header>
        
        <div className="active-content">
          {activeItem.title === "Calculator" && <Calculator />}
          {activeItem.title === "Zombies Recall" && <div className="placeholder-content">Zombie Recall Game Content Will Go Here</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={`games-container ${loading ? 'loading' : ''}`}>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-circle"></div>
        </div>
      )}
      
      <header className="games-header">
        <h1>Vintara</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="user-section">
          <p className="user-greeting">Hello, {userName}!</p>
          <button className="exit-button" onClick={handleExit}>Exit</button>
        </div>
      </header>
      
      {/* Games Section */}
      <section className="content-section">
        <h2 className="section-title">Games</h2>
        <div className="items-grid">
          {games.length > 0 ? (
            games.map(game => (
              <div className="item-card" key={game.id}>
                <div className="item-logo">
                  <img src={game.image} alt={game.title} />
                </div>
                <h3 className="item-title">{game.title}</h3>
                <div className="item-info">
                  <p className="item-description">{game.description}</p>
                  <button className="play-button" onClick={() => handleItemOpen(game)}>Play</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No games found</p>
          )}
        </div>
      </section>
      
      {/* Applications Section */}
      <section className="content-section">
        <h2 className="section-title">Applications</h2>
        <div className="items-grid">
          {apps.length > 0 ? (
            apps.map(app => (
              <div className="item-card" key={app.id}>
                <div className="item-logo">
                  <img src={app.image} alt={app.title} />
                </div>
                <h3 className="item-title">{app.title}</h3>
                <div className="item-info">
                  <p className="item-description">{app.description}</p>
                  <button className="play-button" onClick={() => handleItemOpen(app)}>Open</button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No applications found</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default GamesPage;