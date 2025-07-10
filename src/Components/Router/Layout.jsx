

import React from 'react';
import Footer from '../../Components/Footer';
import {  Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
     
     

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

