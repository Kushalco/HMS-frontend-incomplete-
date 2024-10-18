import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Component() {
  const { patientId } = useParams()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    if (patientId) {
      fetch(`http://localhost:8080/api/appointment/patient/${patientId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.json()
        })
        .then((data) => {
          setAppointments(data)
          setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    }
  }, [patientId])

  if (loading) return <div className="text-center py-10 text-lg">Loading appointments...</div>
  if (error) return <div className="text-center py-10 text-lg text-red-600">Error: {error}</div>

  const renderAppointment = (appointment) => (
    <div key={appointment.appointmentId} className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">Appointment Details</h3>
      <p className="mb-2"><span className="font-medium">Patient:</span> {appointment.patient?.name || "N/A"}</p>
      <p className="mb-2"><span className="font-medium">Doctor:</span> {appointment.doctor?.name || "N/A"}</p>
      <p className="mb-2"><span className="font-medium">Specialization:</span> {appointment.doctor?.specialization || "N/A"}</p>
      <p className="mb-2"><span className="font-medium">Date:</span> {new Date(appointment.date).toDateString()}</p>
      <p className="mb-4"><span className="font-medium">Time:</span> {appointment.time}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">
        Update
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Appointments for Patient ID: {patientId}</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <button 
            className={`px-4 py-2 rounded-full border ${
              activeTab === 'all' 
                ? 'bg-blue-500 text-white border-blue-600' 
                : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All Appointments
          </button>
          {appointments.map((appointment, index) => (
            <button 
              key={appointment.appointmentId}
              className={`px-4 py-2 rounded-full border ${
                activeTab === index 
                  ? 'bg-blue-500 text-white border-blue-600' 
                  : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab(index)}
            >
              Appointment {index + 1}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 rounded-lg p-6">
          {activeTab === 'all' ? (
            appointments.length === 0 ? (
              <p className="text-center text-gray-600">No appointments found for this patient.</p>
            ) : (
              appointments.map(renderAppointment)
            )
          ) : (
            renderAppointment(appointments[activeTab])
          )}
        </div>
      </div>
    </div>
  )
}