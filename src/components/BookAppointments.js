'use client'

import { useState } from 'react'
import {Link }from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function BookAppointments() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const departments = [
    'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Oncology',
    'Dermatology', 'Ophthalmology', 'Gynecology', 'Urology', 'Psychiatry'
  ]

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav id="main-nav" className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <ul className="flex items-center justify-between flex-grow">
          <button onClick={toggleSidebar} className="flex items-center pl-2 mr-10">
            {isSidebarOpen ? <X className="mr-2" /> : <Menu className="mr-2" />}
            <span>Home</span>
          </button>
            <li><Link href="/doctors-list" className="ml-8">Doctors List</Link></li>
            <li className="ml-8"><Link href="/appointments">Appointments</Link></li>
            <li className="ml-8"><Link href="/history">History</Link></li>
            <li className="relative ml-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                Department <ChevronDown className="ml-1" />
              </button>
              {isOpen && (
                <ul
                  className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10"
                  role="menu"
                >
                  {departments.map((dept, index) => (
                    <li key={index} role="menuitem">
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100">{dept}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed  text-white top-110 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-64 h-full bg-gray-800 duration-300`}>
        <div className="p-6 ">
          <ul className="space-y-4">
            <li>
            <a href="#" className="block py-2 ">
              Profile Info
            </a>
            </li>
            <li>
            <a href="#" className="block py-2">
              Appointments
            </a>
          </li>
          <li>          
            <a href="#" className="block py-2">
              Available Medicines
            </a>
          </li>
          </ul>
        </div>
      </div>

      <main className="flex-grow flex items-start justify-center px-4 pt-16">
        <div id="appointment-form" className="bg-white rounded-lg shadow-md border border-gray-200 p-8 w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-6 text-center">Book an Appointment</h1>
          <form className="space-y-6">
            <div className="max-w-md mx-auto">
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Patient Name</label>
              <input type="text" id="patientName" name="patientName" placeholder="Enter patient's full name" className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 border border-gray-200" />
            </div>
            <div className="max-w-md mx-auto">
              <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">Patient ID</label>
              <input type="text" id="patientId" name="patientId" placeholder="Found in profile if registered" className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 border border-gray-200" />
            </div>
            <div className="max-w-md mx-auto">
              <label htmlFor="doctorName" className="block text-sm font-medium text-gray-700">Doctor Name</label>
              <input type="text" id="doctorName" name="doctorName" placeholder="Enter doctor's full name" className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 border border-gray-200" />
            </div>
            <div className="max-w-md mx-auto">
              <label htmlFor="doctorId" className="block text-sm font-medium text-gray-700">Doctor ID</label>
              <input type="text" id="doctorId" name="doctorId" placeholder="Available in Doctor's List" className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 border border-gray-200" />
            </div>
            <div className="max-w-md mx-auto">
              <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization (if any)</label>
              <input type="text" id="specialization" name="specialization" placeholder="Enter doctor's specialization" className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 border border-gray-200" />
            </div>
            <div className="max-w-md mx-auto">
              <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700">Date</label>
              <input type="date" id="appointmentDate" name="appointmentDate" className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 border border-gray-200" />
            </div>
            <div className="max-w-md mx-auto">
              <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700">Time</label>
              <input type="time" id="appointmentTime" name="appointmentTime" className="mt-1 px-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 border border-gray-200" />
            </div>
            <div className="max-w-md mx-auto">
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}