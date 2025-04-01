import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="home-container">
      <motion.header
        className="home-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="logo">Vintara</div>
        <button
          className="cta-button"
          onClick={() => {
            localStorage.removeItem('vintaraAuthToken');
            window.location.href = '/';
          }}
        >
          Log Out
        </button>
      </motion.header>
      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1>Welcome to Vintara!</h1>
        <p>Your social network dashboard. Create, share, and connect with others.</p>
        <div className="feed-placeholder">
          <p>Feed coming soon! Stay tuned for updates.</p>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;