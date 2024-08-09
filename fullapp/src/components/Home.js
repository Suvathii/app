// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Event Management</h1>
      <p>Plan and manage your events with ease.</p>
      <nav>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/event-management">Event Management</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
          <li><Link to="/customer-feedback">Customer Feedback</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
