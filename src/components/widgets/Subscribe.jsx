import React, { useState } from 'react';
import './widget-style.css'; 
import CustomButton from '../../containers/button/CustomButton';

const Subscribe = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Dummy validation example
      if (!formData.email.includes('@')) {
        throw new Error('Invalid email address');
      }

      setSuccess(true);
      setFormData({ name: '', email: '' }); // Clear form
    } catch (err) {
      setError(err.message || 'Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="sub-container">
  <div className="subscribe-wrapper">
    <svg className="epcl-plane" width="100" height="106" viewBox="0 0 112 116" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M112 3L5.75 62.375L43.25 68.625L52.625 115.5L65.125 78L90.125 96.75L112 3Z" fill="#FEBDD0" />
      <path d="M58.9007 75.0919L46.996 110.806L37.9903 65.7769L37.9226 65.4385L37.5822 65.3818L1.4882 59.3661L105.506 1.2386L84.0621 93.1404L59.675 74.85L59.12 74.4338L58.9007 75.0919Z" fill="#FEBDD0" stroke="black" />
      <path d="M58.9007 75.0919L46.996 110.806L38.0442 66.0467L103.717 3.35861L58.951 74.985L58.9195 75.0354L58.9007 75.0919Z" fill="#FF84A8" stroke="black" />
    </svg>
    <div className="subscribe-content">
      <h5 className="title">Subscribe to our Newsletter</h5>
      {/* <p>
        Subscribe to our email newsletter and unlock access to <b>members-only</b> content and <b>exclusive updates.</b>
      </p> */}

      <form className="subscribe-form" data-members-form="subscribe" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="inputbox"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            className="inputbox"
            required
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <CustomButton
            type="submit"
            title={loading ? 'Submitting...' : 'Submit'}
            backgroundColor="#FEBDD0"
            textColor="#000"
            centerContent={true}
            buttonClassName="sub-btn-item"
            onClick={handleSubmit}
           
            style={{ 
              width: '100%', 
              pointerEvents: loading ? 'none' : 'auto' }}
          />
          {loading && <span className="loader"></span>}
        </div>

        {error && (
          <p className="error-detail" data-members-error="">
            {error}
          </p>
        )}
        {success && (
          <p className="success-message">
            Subscription was sent successfully, check your email <i className="fa fa-envelope-o"></i>
          </p>
        )}
      </form>

      <div className="clear"></div>
    </div>
    </div>
    </div>
  );
};

export default Subscribe;
