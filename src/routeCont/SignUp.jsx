import React, { useState } from 'react';
import '../styles/SignIn.css';
import CustomButton from '../containers/button/CustomButton';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSent(true);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <a href="/" className="back-link">&larr; Go back to home</a>
        <h1>Become a Subscriber</h1>
        <p className="subtitle">Create an account for full access:</p>

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
                title="Subscribe"
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
          Don't have an account yet? <a href="/sign-in">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
