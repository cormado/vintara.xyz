import { motion } from 'framer-motion';

function RightSection() {
  return (
    <motion.div
      className="right-section"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="features-title">Why Vintara?</h2>
      <motion.div
        className="feature-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="feature-item">
          <h3>Spaces</h3>
          <p>Create a public chat to meet new people</p>
        </div>
        <div className="feature-item">
          <h3>Privacy</h3>
          <p>Vintara doesn’t access your private messages or personal data</p>
        </div>
        <div className="feature-item">
          <h3>Posts</h3>
          <p>Create, find, and share text, photos, and videos</p>
        </div>
        <div className="feature-item">
          <h3>Workspaces</h3>
          <p>Create a private space for your company or group</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default RightSection;