// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Admin from './components/Admin';
import EventManagement from './components/EventManagement';
import Bookings from './components/Bookings';
import CustomerFeedback from './components/CustomerFeedback';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/event-management" element={<EventManagement />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/customer-feedback" element={<CustomerFeedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;