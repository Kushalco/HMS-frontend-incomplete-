import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react'; // This imports all required icons at once
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex justify-end gap-4 p-2">
      <Link to="/Admin">   
        <button className="px-4 py-2 text-white bg-indigo-600 rounded-full hover:bg-green-700">
          Admin
        </button>
      </Link>
      <Link to="/DoctorList">
        <button className="px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700">
          Find a Doctor
        </button>
      </Link>
       <Link to="/BookAppointments">      
            <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
                Request Appointment
            </button>
        </Link>
      </div>
      <nav className="bg-gray-800 text-white">
        <ul className="flex justify-between items-center p-4 w-full">
          <li>
            <button onClick={toggleSidebar} className="flex items-center pl-2">
            {isSidebarOpen ? <X className="mr-2" /> : <Menu className="mr-2" />}
            <span className="hover:text-gray-300" onClick={toggleSidebar}>
              Home
            </span>
            </button>
          </li>
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-gray-300"
            >
              Departments
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    OPD
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                    Pathology
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="/doctors" className="hover:text-gray-300">
              Doctors
            </a>
          </li>
          <li>
            <a href="/Pathology" className="hover:text-gray-300">
              Pathology
            </a>
          </li>
          <Link to='/Pharmacy'>
          <li>
            <a href="/Pharmacy" className="hover:text-gray-300">
              Pharmacy
            </a>
          </li>
          </Link>
          <li>
            <Link to="/patientLogin">
            <p className="hover:text-gray-300">
              Patient Corner
            </p>
            </Link>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      {isSidebarOpen && (
        <div className="fixed top-120 left-0 h-full w-64  bg-gray-900 text-white p-4 transform transition-transform duration-300 ease-in-out">
          <a href="#" className="block py-2 hover:bg-gray-800">
            Profile Info
          </a>
          <a href="#" className="block py-2 hover:bg-gray-800">
            Appointments
          </a>
          <a href="#" className="block py-2 hover:bg-gray-800">
            Available Medicines
          </a>
        </div>
      )}
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold text-center">Welcome to the Homepage</h1>
      </main>
    </div>
  );
}