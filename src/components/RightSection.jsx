import '../index.css';

function RightSection() {
  return (
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
          <h3>Posts</h3>
          <p>Create, find, and share text, photos, and videos</p>
        </div>
        <div className="feature-item">
          <h3>Workspaces</h3>
          <p>Create a private space for your company or group</p>
        </div>
      </div>
    </div>
  );
}

export default RightSection;