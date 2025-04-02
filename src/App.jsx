import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home.jsx';
import LeftSection from './components/LeftSection.jsx';
import RightSection from './components/RightSection.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import './index.css';

function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la pantalla de carga
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      const authToken = localStorage.getItem('vintaraAuthToken');
      if (authToken) {
        navigate('/home', { replace: true });
      }
      setIsLoading(false); // Ocultar la pantalla de carga después de verificar
    }, 800);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
  }, [navigate]);

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <LeftSection
                isSignupOpen={isSignupOpen}
                onSignupClick={handleSignupClick}
                onLoginClick={handleLogin}
                SignupComponent={Signup}
                onCancel={() => setIsSignupOpen(false)}
              />
              <RightSection />
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;