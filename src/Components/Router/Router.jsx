

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../Router/Layout';
import HomePage from '../../Page/Home'
import AircraftPage from '../../Page/AircraftPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="aircraft" element={<AircraftPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

