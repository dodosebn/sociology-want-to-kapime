import React from 'react';
import Sidebar from '../components/dashboard/Sidebar/Sidebar';
import NavBar from '../components/dashboard/navbar/NavBar'; 
import './DashboardLayout.css'; 

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <NavBar />
        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
