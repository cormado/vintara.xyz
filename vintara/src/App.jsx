import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import './index.css';

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const authToken = localStorage.getItem('vintaraAuthToken');
      if (authToken) {
        navigate('/home');
      } else {
        document.getElementById('loadingScreen').style.display = 'none';
      }
    }, 800);
  }, [navigate]);

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <>
      <LoadingScreen />
      <div className="container">
        <LeftSection onSignup={handleSignup} onLogin={handleLogin} />
        <RightSection />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;