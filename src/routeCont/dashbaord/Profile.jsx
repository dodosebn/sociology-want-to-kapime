import React, { useState } from 'react';
import '../../styles/Profile.css';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const Profile = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const togglePassword = (key) => {
    setShowPassword((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting profile changes:', form);
  };

  return (
    <div className="profile-container">
      <h2>Update Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <FaUser className="icon-left" />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaUser className="icon-left" />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <FaEnvelope className="icon-left" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <FaLock className="icon-left" />
            <input
              type={showPassword.current ? 'text' : 'password'}
              name="currentPassword"
              placeholder="Current Password"
              value={form.currentPassword}
              onChange={handleChange}
              required
            />
            <span className="icon-right" onClick={() => togglePassword('current')}>
              {showPassword.current ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <FaLock className="icon-left" />
            <input
              type={showPassword.new ? 'text' : 'password'}
              name="newPassword"
              placeholder="New Password"
              value={form.newPassword}
              onChange={handleChange}
            />
            <span className="icon-right" onClick={() => togglePassword('new')}>
              {showPassword.new ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="input-group">
            <FaLock className="icon-left" />
            <input
              type={showPassword.confirm ? 'text' : 'password'}
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              value={form.confirmNewPassword}
              onChange={handleChange}
            />
            <span className="icon-right" onClick={() => togglePassword('confirm')}>
              {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button type="submit" className="submit-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
