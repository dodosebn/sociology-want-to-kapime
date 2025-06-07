// components/dashboard/Sidebar/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>LOGO HERE</h3>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/submissions">Submissions</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
