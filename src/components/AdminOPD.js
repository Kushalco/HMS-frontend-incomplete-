import React, { useEffect, useState } from 'react';

export default function AdminOPDDashboard() {
  const [appointmentsCount, setAppointmentsCount] = useState(0); 
  const [doctorsCount, setDoctorsCount] = useState(0); // State to store appointments count

  // Fetch appointments data from the backend
  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:5454/tjhs/api/appointment'); // Update with your backend URL
      if (response.ok) {
        const appointments = await response.json();
        setAppointmentsCount(appointments.length); // Set the number of appointments
      } else {
        console.error('Failed to fetch appointments');
      }
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

//   const fetchDoctors = async () => {
//     try {
//       const response = await fetch('http://localhost:5454/tjhs/api/doctors'); // Update with your backend URL
//       if (response.ok) {
//         const appointments = await response.json();
//         setAppointmentsCount(appointments.length); // Set the number of appointments
//       } else {
//         console.error('Failed to fetch appointments');
//       }
//     } catch (error) {
//       console.error('Error fetching appointments:', error);
//     }
//   };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin OPD Dashboard</h1>
        <p className="mt-2 text-lg text-gray-600">Overview of OPD operations</p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Appointments Card */}
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg shadow-lg p-6 text-white transition-all hover:shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Appointments</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold">{appointmentsCount}</div> {/* Display dynamic count */}
          <p className="text-sm mt-1 opacity-75">4 unconfirmed</p>
        </div>

        {/* Doctors Card */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg shadow-lg p-6 text-white transition-all hover:shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Doctors</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold">12</div>
          <p className="text-sm mt-1 opacity-75">2 on leave</p>
        </div>

        {/* Patients Card */}
        <div className="bg-gradient-to-br from-orange-400 to-amber-600 rounded-lg shadow-lg p-6 text-white transition-all hover:shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Patients</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold">143</div>
          <p className="text-sm mt-1 opacity-75">12 new this week</p>
        </div>

        {/* Bills Card */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg shadow-lg p-6 text-white transition-all hover:shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Bills</h2>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <div className="text-3xl font-bold">$5,240</div>
          <p className="text-sm mt-1 opacity-75">$1,200 pending</p>
        </div>
      </div>
    </div>
  );
}
