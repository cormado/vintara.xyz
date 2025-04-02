import '../index.css';

function Home() {
  // Datos simulados de chats
  const publicChats = [
    { id: 1, name: 'Tech Enthusiasts', lastMessage: 'Hey, anyone going to the tech meetup?', timestamp: '2h ago' },
    { id: 2, name: 'Gaming Hub', lastMessage: 'New game release tomorrow!', timestamp: '5h ago' },
  ];

  const privateChats = [
    { id: 1, friend: 'Alex', lastMessage: 'Hey, how’s it going?', timestamp: '1h ago' },
    { id: 2, friend: 'Sarah', lastMessage: 'Can we meet tomorrow?', timestamp: '3h ago' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('vintaraAuthToken');
    localStorage.removeItem('userProfileImage');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  // Obtener la foto de perfil y el nombre de usuario desde localStorage
  const profileImage = localStorage.getItem('userProfileImage');
  const username = localStorage.getItem('username') || 'User';

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div>
          <div className="logo">Vintara</div>
          <div className="user-profile">
            <div className="profile-image-container">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-image" />
              ) : (
                <div className="profile-placeholder">{username.charAt(0)}</div>
              )}
            </div>
            <div className="profile-username">{username}</div>
          </div>
          <nav className="sidebar-nav">
            <a href="/home" className="sidebar-link active">
              Home
            </a>
            <a href="#" className="sidebar-link">
              Workspaces
            </a>
          </nav>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Sección de Chats Públicos */}
        <div className="chat-section">
          <h2 className="section-title">Public Chats</h2>
          <div className="chat-list">
            {publicChats.map((chat) => (
              <div key={chat.id} className="chat-item">
                <div className="chat-info">
                  <div className="chat-name">{chat.name}</div>
                  <div className="chat-last-message">{chat.lastMessage}</div>
                </div>
                <div className="chat-timestamp">{chat.timestamp}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de Chats Privados */}
        <div className="chat-section">
          <h2 className="section-title">Private Chats</h2>
          <div className="chat-list">
            {privateChats.map((chat) => (
              <div key={chat.id} className="chat-item">
                <div className="chat-info">
                  <div className="chat-name">{chat.friend}</div>
                  <div className="chat-last-message">{chat.lastMessage}</div>
                </div>
                <div className="chat-timestamp">{chat.timestamp}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;