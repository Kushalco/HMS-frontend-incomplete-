// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Your existing HomePage component
import PatientDashboard from './components/PatientDashboard'; // Import the PatientDashboard component
import BookAppointments from './components/BookAppointments';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/PatientDashboard" element={<PatientDashboard />} /> {/* Patient Dashboard */}
          <Route path="/BookAppointments" element={<BookAppointments />} /> {/* Patient Dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
