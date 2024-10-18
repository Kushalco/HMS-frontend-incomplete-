import React, { useState } from 'react'

export default function DoctorEntry() {
  const [name, setName] = useState('')
  const [mobileNo, setMobileNo] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [schedule, setSchedule] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const doctor = {
      name,
      mobileNo,
      specialization,
      schedule,
    }

    try {
      const response = await fetch('http://localhost:8080/api/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctor),
      })

      if (response.ok) {
        alert('Doctor added successfully!')
        // Reset the form
        setName('')
        setMobileNo('')
        setSpecialization('')
        setSchedule('')
      } else {
        const errorData = await response.json()
        alert(`Error: ${errorData.message}`)
      }
    } catch (error) {
      console.error('Error adding doctor:', error)
      alert('Error adding doctor. Please try again later.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Add Doctor</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">
              Doctor Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNo" className="block text-sm font-medium text-blue-700 mb-1">
              Mobile No
            </label>
            <input
              id="mobileNo"
              type="tel"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="specialization" className="block text-sm font-medium text-blue-700 mb-1">
              Specialization
            </label>
            <input
              id="specialization"
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <label htmlFor="schedule" className="block text-sm font-medium text-blue-700 mb-1">
              Schedule
            </label>
            <input
              id="schedule"
              type="text"
              value={schedule}
              onChange={(e) => setSchedule(e.target.value)}
              className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Add Doctor
          </button>
        </form>
      </div>
    </div>
  )
}