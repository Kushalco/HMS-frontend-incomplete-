import React, { useState } from 'react';
import { Calendar, ShoppingBag, FileText, Activity, ChevronDown, Menu, X,ShoppingCart, CheckCircle, Truck, History, Clock } from 'lucide-react';
import {Link} from 'react-router-dom'
export default function Pharmacy() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white">
        <ul className="flex justify-between items-center p-4 w-full">
          <li>
            <button onClick={toggleSidebar} className="flex items-center">
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
          <Link to='/Pharmacy'>
          <li>
            <a href="/Pharmacy" className="hover:text-gray-300">
              Pharmacy
            </a>
          </li>
          </Link>
          <li>
            <a href="/doctors" className="hover:text-gray-300">
              Doctors
            </a>
          </li>
          <li>
            <a href="/patient-corner" className="hover:text-gray-300">
              Patient Corner
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/Login" className="hover:text-gray-300">
              Login/Register
            </a>
          </li>
        </ul>
      </nav>
      {isSidebarOpen && (
        <div className="fixed top-120 left-0 h-full w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 ease-in-out">
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
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Pharmacy</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            
            <div className="grid grid-cols-2 gap-4">
              <Link to='/medicinedetails'>
              <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square">
                <h2 className="text-lg font-semibold text-blue-800">Pharmacist Corner</h2>
              </div>
              </Link>
              <Link to = '/OrderMedicines'>
              <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square">
                <ShoppingCart className="h-8 w-8 text-blue-500 mb-2" />
                <h2 className="text-lg font-semibold text-green-800">Order Medicine</h2>
              </div>
              </Link>
              <div className="bg-purple-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square">
                <History className="h-8 w-8 text-purple-500 mb-2" />
                <h2 className="text-lg font-semibold text-purple-800">Check History</h2>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex flex-col items-center justify-center aspect-square">
                <Clock className="h-8 w-8 text-yellow-500 mb-2" />
                <h2 className="text-lg font-semibold text-yellow-800">Check Expiry</h2>
              </div>
            </div>
          </div>
          </div>
      </main>
    </div>
  );
}