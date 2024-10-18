import {Link }from 'react-router-dom'

export default function BookAppointments() {

return (
<main className="flex-grow flex items-start justify-center px-4 pt-16">
<div id="appointment-form" className="bg-white rounded-lg shadow-md border border-gray-200 p-8 w-full max-w-2xl">
  <h1 className="text-2xl font-bold mb-6 text-center">Enter Medicine details</h1>
  <form className="space-y-6">
    <div className="max-w-md mx-auto">
      <label htmlFor="patientName" className="block text-sm font-medium text-gray-700">Medicine Id</label>
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
);
}