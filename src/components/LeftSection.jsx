import { motion } from 'framer-motion';

function LeftSection({ onSignup, onLogin }) {
  return (
    <motion.div
      className="left-section"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="logo"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Vintara
      </motion.div>
      <div className="tagline">Connect. Share. Discover.</div>
      <p className="description">
        A new social experience designed to share important moments and connect with people who share your interests.
      </p>
      <motion.button
        className="cta-button"
        onClick={onSignup}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Create Account
      </motion.button>
      <p className="login-link">
        Already have an account? <a href="#" onClick={onLogin}>Log In</a>
      </p>
    </motion.div>
  );
}

export default LeftSection;