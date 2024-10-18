import React, { useEffect, useState } from 'react'
import { UserIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

export default function DoctorList() {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedDoctor, setExpandedDoctor] = useState(null)

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/doctors')
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setDoctors(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setLoading(false)
      }
    }

    fetchDoctors()
  }, [])

  const toggleDoctor = (doctorId) => {
    setExpandedDoctor(expandedDoctor === doctorId ? null : doctorId)
  }

  if (loading) return <div className="text-center p-4">Loading doctors...</div>
  if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>

  return (
    <div className="min-h-screen bg-sky-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Doctor List</h1>
      {doctors.length === 0 ? (
        <p className="text-center text-gray-500">No doctors found.</p>
      ) : (
        <div className="max-w-2xl mx-auto space-y-4">
          {doctors.map((doctor) => (
            <div key={doctor.doctorId} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none hover:bg-gray-50"
                onClick={() => toggleDoctor(doctor.doctorId)}
              >
                <span className="font-medium text-lg text-blue-700">{doctor.name}</span>
                {expandedDoctor === doctor.doctorId ? (
                  <ChevronUpIcon className="w-5 h-5 text-blue-500" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-blue-500" />
                )}
              </button>
              {expandedDoctor === doctor.doctorId && (
                <div className="px-6 py-4 bg-blue-50">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                        <UserIcon className="w-12 h-12 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-blue-700 mb-1">
                        <span className="font-medium">Mobile:</span> {doctor.mobileNo}
                      </p>
                      <p className="text-blue-700 mb-1">
                        <span className="font-medium">Specialization:</span> {doctor.specialization}
                      </p>
                      <p className="text-blue-700">
                        <span className="font-medium">Schedule:</span> {doctor.schedule}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}