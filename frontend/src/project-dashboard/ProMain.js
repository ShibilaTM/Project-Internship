import React from 'react';
import Sidebar from './Sidebar';
import './Sidebar.css';  // Import your styles

const ProMain = ({ children }) => {
  return (
    <div className="pro-main">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

export default ProMain;


