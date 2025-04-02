import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('vintaraAuthToken', 'simulated-token');
    console.log('Login data:', formData);
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="left-section">
        <div className="logo">Vintara</div>
        <div className="tagline">Connect. Share. Discover.</div>
        <p className="description">
          A new social experience designed to share important moments and connect with people who share your interests.
        </p>
        <div className="form-wrapper">
          <form className="signup-form" onSubmit={handleLoginSubmit}>
            <h2>Log In to Vintara</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="cta-button">
              Log In
            </button>
            <p className="login-link">
              Don’t have an account? <a href="/">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
      <div className="right-section">
        <h2 className="features-title">Why Vintara?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <h3>Spaces</h3>
            <p>Create a public chat to meet new people</p>
          </div>
          <div className="feature-item">
            <h3>Privacy</h3>
            <p>Vintara doesn’t access your private messages or personal data</p>
          </div>
          <div className="feature-item">
            <h3>Chats</h3>
            <p>Connect with friends and colleagues</p>
          </div>
          <div className="feature-item">
            <h3>Workspaces</h3>
            <p>Create a private space for your company or group</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;