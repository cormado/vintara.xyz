import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Signup({ onCancel }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profileImage: null,
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('vintaraAuthToken', 'simulated-token');
    localStorage.setItem('userProfileImage', formData.profileImage); // Guardar la imagen
    localStorage.setItem('username', formData.username); // Guardar el nombre de usuario
    console.log('Signup data:', formData);
    navigate('/home');
  };

  return (
    <form className="signup-form" onSubmit={handleSignupSubmit}>
      <h2>Create Your Account</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
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
      <div className="image-upload">
        <label htmlFor="profileImage" className="image-label">
          {formData.profileImage ? (
            <img src={formData.profileImage} alt="Profile" className="image-preview" />
          ) : (
            <div className="image-placeholder">Add Profile Picture</div>
          )}
        </label>
        <input
          type="file"
          id="profileImage"
          name="profileImage"
          accept="image/*"
          onChange={handleImageChange}
          required
          style={{ display: 'none' }}
        />
      </div>
      <button type="submit" className="cta-button">
        Sign Up
      </button>
      <button type="button" className="cancel-button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default Signup;