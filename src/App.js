// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage'; // Your existing HomePage component
import PatientDashboard from './components/PatientDashboard'; // Import the PatientDashboard component
import BookAppointments from './components/BookAppointments';
import OrderMedicines from './components/OrderMedicines';
import Pharmacy from './components/Pharmacy';
import PatientRegister from './components/Patient';
import Medicinedetails from './components/medicinedetails';
import PatientLogin from './components/patientLogin';
import PatientAppointments from './components/PatientAppointments';
import DoctorEntry from './components/DoctorEntry';
import DoctorList from './components/DoctorList';
import AdminDashboard from './components/Admin';
function App() {
  return (
    <Router>
      <div className="App">
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/BookAppointments" element={<BookAppointments />} /> {/* Appointment Booking */}
          <Route path="/patient-dashboard/:patientId/OrderMedicines" element={<OrderMedicines/>} /> {/* Medicine Orders*/}
          <Route path="/Pharmacy" element={<Pharmacy/>} /> {/* Submitting medicine details*/}
          <Route path="/medicinedetails" element={<Medicinedetails/>} /> {/* Submitting medicine details*/}
          <Route path="/Patient" element={<PatientRegister/>} /> {/* Home Page */}
          <Route path="/patientLogin" element={<PatientLogin />} />
          <Route path="/patient-dashboard/:patientId" element={<PatientDashboard />} />
          <Route path="/patient-dashboard/:patientId/PatientAppointments" element={<PatientAppointments />} />
          <Route path="/DoctorEntry" element={<DoctorEntry />}></Route>
          <Route path="/DoctorList" element={<DoctorList/>}></Route>
          <Route path="/Admin" element={<AdminDashboard/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
