import '../index.css';

function LeftSection({ isSignupOpen, onSignupClick, onLoginClick, SignupComponent, onCancel }) {
  return (
    <div className="left-section">
      <div className="logo">Vintara</div>
      <div className="tagline">Connect. Share. Discover.</div>
      <p className="description">
        A new social experience designed to share important moments and connect with people who share your interests.
      </p>
      {!isSignupOpen && (
        <>
          <button className="cta-button" onClick={onSignupClick}>
            Create Account
          </button>
          <p className="login-link">
            Already have an account? <a href="#" onClick={onLoginClick}>Log In</a>
          </p>
        </>
      )}
      {isSignupOpen && (
        <div className="form-wrapper">
          <SignupComponent onCancel={onCancel} />
        </div>
      )}
    </div>
  );
}

export default LeftSection;