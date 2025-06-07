import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ← Import navigation hook
import '../styles/SignIn.css';
import CustomButton from '../containers/button/CustomButton';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [emailSent] = useState(false);
  const navigate = useNavigate(); // ← Set up navigation

  // OLD submission logic (just sends email)
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSent(true);
    }
  };
  */

  // NEW: Navigate to dashboard on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate successful login
      navigate('/dashboard');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <a href="/" className="back-link">&larr; Go back to home</a>
        <h1>Welcome back!</h1>
        <p className="subtitle">Sign In into your account for full access:</p>

        <form onSubmit={handleSubmit}>
          <div className="input-with-button">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CustomButton
              title="Send Link"
              buttonClassName="auth-btn"
              backgroundColor="#FEBDD0"
              textColor="#333"
              onClick={handleSubmit}
            />
          </div>
        </form>

        {emailSent && (
          <p className="success-message">
            Login link was sent successfully, check your email.
          </p>
        )}

        <p className="signup-message">
          Don't have an account yet? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
