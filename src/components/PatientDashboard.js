import React, { useState,useEffect } from 'react';
import { Calendar, ShoppingBag, FileText, Activity, ChevronDown, Menu, X } from 'lucide-react';

import {Link,useParams} from 'react-router-dom';

export default function PatientDashboard() {
  const {patientId}=useParams();
  const [patient,setPatient] = useState(null);
  const [loading, setLoading]= useState(true);
  const [error,setError]=useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() =>{
    const fetchPatientData = async () => {
      try{
        const response = await fetch(`http://localhost:8080/api/patients/${patientId}`);
        if(!response.ok)throw new Error('Failed to fetch Patient Data');
        const data = await response.json();
        setPatient(data);
      }catch(error){
        console.error('Error fetching patient:',error);
        setError('Failed to load');
      }finally{
        setLoading(false);
      }
    };
    fetchPatientData();
  }, [patientId]);
  //Appointment page

  if(loading)return <p className='text-center mt-10'>Loading Patient Data</p>
  if(error)return <p className='text-center text-red-500 mt-10'>{error}</p>
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex justify-end gap-4 p-2 bg-white">
        <button className="px-4 py-2 text-white bg-green-600 rounded-full hover:bg-green-700">
            Find a Doctor
        </button>
        <Link to='/BookAppointments'>        
          <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Request Appointment
          </button>
        </Link>
        <Link to='/Patient'>        
          <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Register
          </button>
        </Link>
      </div>
      <nav className="bg-gray-800 text-white">
      <ul className="flex justify-between items-center p-4 w-full">
      <li>
        <button onClick={toggleSidebar} className="flex items-center"> {/* Removed pl-0 ml-0 */}
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
              <span className="ml-1">▼</span>
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
          <Link to='/PatientDashboard'>
          <li>
            <a href="/patient-corner" className="hover:text-gray-300">
              Patient Corner
            </a>
          </li>
          </Link>
          <Link to='/Pharmacy'>
          <li>
            <a href="/Pharmacy" className="hover:text-gray-300">
              Pharmacy
            </a>
          </li>
          </Link>
          <li>
            <a href="/contact" className="hover:text-gray-300">
              Contact Us
            </a>
          </li>
          <li>
            <a href="/Login" className="hover:text-gray-300 ">
            <Link to='/patientLogin'> 
              Login</Link>
              /
            <Link to='/Patient'>
            register</Link>
            </a>
          </li>
        </ul>
      </nav>
      {isSidebarOpen && (
        <div className="fixed top-120 left-0 h-full w-64 bg-gray-900 text-black p-4 transform transition-transform duration-300 ease-in-out">
           <div> {patient && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Patient Information</h2>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Date of Birth:</strong> {patient.dob}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <p><strong>Mobile No:</strong> {patient.mobileNo}</p>
            <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
          </div>
        )}</div>
        </div>
      )}
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Patient Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/*Mother Div for Book Appointments & Order Med*/}
          <div className="bg-blue-100 h-128 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="p-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-10 mt-w-0 flex-1">
                    <Link to="/BookAppointments">
                        <h2 className="text-lg font-medium text-blue-900">Book Appointments</h2>
                    </Link>
                  <p className="mt-1 text-sm text-blue-700">Schedule your next visit</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 px-5 py-3 mt-14">
            <Link to="/BookAppointments">
              <p href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                Book now
              </p>
            </Link>
            </div>
          </div>

          <Link to={`/patient-dashboard/${patient.patientId}/OrderMedicines.js`} className="text-blue-600 hover:underline">
          <div className="bg-green-100 h-128 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="p-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShoppingBag className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <h2 className="text-lg font-medium text-green-900">Order Medicine</h2>
                  <p className="mt-1 text-sm text-green-700">Get your prescriptions filled</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 px-5 py-3 mt-14">
              <p className="text-sm font-medium text-green-600 hover:text-green-500">
                Order now
              </p>
            </div>
          </div>
          </Link>
          <div className="bg-purple-100 h-128 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="p-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <h2 className="text-lg font-medium text-purple-900">View Medical Record</h2>
                  <p className="mt-1 text-sm text-purple-700">Access your health information</p>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 px-5 py-3 mt-14">
              <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                View records
              </a>
            </div>
          </div>
          <Link to={`/patient-dashboard/${patient.patientId}/PatientAppointments`} className="text-blue-600 hover:underline">
          <div className="bg-orange-100 overflow-hidden shadow rounded-lg transition-all duration-300 hover:shadow-lg">
            <div className="p-5">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Activity className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <h2 className="text-lg font-medium text-orange-900">My Appointments</h2>
                  <p className="mt-1 text-sm text-orange-700">Find your Appointments</p>
                </div>
                </div>
                </div>
              <div className="bg-orange-50 px-5 py-3 mt-14">
              <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">
                Track now
              </a>
            </div>
          </div>
          </Link>
        </div>
      </main>
    </div>
  );
}