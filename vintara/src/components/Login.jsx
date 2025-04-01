import { motion } from 'framer-motion';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('vintaraAuthToken', 'fake-token');
    window.location.href = '/home';
  };

  return (
    <motion.div
      className="auth-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="auth-box">
        <h2>Log In to Vintara</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <motion.button
            type="submit"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log In
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

export default Login;