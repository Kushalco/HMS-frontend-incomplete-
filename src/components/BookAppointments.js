import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookAppointment } from '../apiservices/bookAppointment';
import { ChevronDown } from 'lucide-react';

export default function BookAppointments() {
  const [formData, setFormData] = useState({
    patient: { name: '', dob: '' },
    doctor: { name: '', specialization: '' },
    date: '',
    time: '',
    contactNumber: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  useEffect(() => {
    console.log('Modal open state:', isModalOpen);
  }, [isModalOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('patient.')) {
      const field = name.split('.')[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        patient: { ...prevFormData.patient, [field]: value },
      }));
    } else if (name.startsWith('doctor.')) {
      const field = name.split('.')[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        doctor: { ...prevFormData.doctor, [field]: value },
      }));
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const resetForm = () => {
    setFormData({
      patient: { name: '', dob: '' },
      doctor: { name: '', specialization: '' },
      date: '',
      time: '',
      contactNumber: '',
    });
  };

const checkAvailability = async () => {
    try {
        // eslint-disable-next-line no-template-curly-in-string
        const response = await fetch(`http://localhost:8080/api/appointment/check?name=${formData.doctor.name}&specialization=${formData.doctor.specialization}&date=${formData.date}&time=${formData.time}`
        );
        if (!response.ok) throw new Error('Network response was not ok');
        const isAvailable = await response.json();
        return isAvailable; // Return true if available, false if not
    } catch (error) {
        console.error('Error checking availability:', error);
        return false; // Assume unavailable on error
    }
};
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setErrorMessage(''); // Reset previous errors

  try {
    const isAvailable = await checkAvailability(); // Check doctor's availability

    if (!isAvailable) {
      setErrorMessage('This doctor is not available at the selected time. Please choose a different time.');
      setIsErrorModalOpen(true); // Open error modal if unavailable
      resetForm(); 
      return; // Stop further execution if not available
    }

    const response = await bookAppointment(formData); // Proceed with booking if available

    if (response.status === 200 || response.status === 201) {
      setSuccessMessage('Appointment booked successfully!');
      setIsModalOpen(true); // Open success modal
      resetForm(); // Reset form after successful submission
    } else {
      throw new Error('Failed to book appointment');
    }
  } catch (error) {
    console.error('Error booking appointment:', error);
    setErrorMessage('There was an error booking your appointment. Please try again.');
    setIsErrorModalOpen(true); // Open error modal on failure
  }
};

  
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav id="main-nav" className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <Link to="/" className="flex items-center pl-2 mr-10">
            <span>Home</span>
          </Link>
          <ul className="flex items-center justify-between flex-grow">
            <li><Link to="/doctors-list" className="ml-8">Doctors List</Link></li>
            <li className="ml-8"><Link to="/appointments">Appointments</Link></li>
            <li className="ml-8"><Link to="/history">History</Link></li>
            <li className="relative ml-8">
              <button className="flex items-center" aria-haspopup="true" aria-expanded="false">
                Department <ChevronDown className="ml-1" />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex-grow flex items-start justify-center px-4 pt-16">
        <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Book Appointment</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Patient Fields */}
              <div>
                <label htmlFor="patient.patientName" className="block mb-1 ml-2 text-sm font-medium text-gray-700">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="patient.name"
                  value={formData.patient.name}
                  onChange={handleChange}
                  placeholder="Patient Name"
                  className="flex h-10 w-full rounded-md border"
                  required
                />
              </div>

              <div>
                <label htmlFor="patient.dob" className="block mb-1 ml-2 text-sm font-medium text-gray-700">
                  Patient DOB
                </label>
                <input
                  type="text"
                  name="patient.dob"
                  value={formData.patient.dob}
                  onChange={handleChange}
                  placeholder="Patient DOB"
                  className="flex h-10 w-full rounded-md border"
                  required
                />
              </div>

              {/* Doctor Fields */}
              <div>
                <label htmlFor="doctor.name" className="block mb-1 ml-2 text-sm font-medium text-gray-700">
                  Doctor Name
                </label>
                <input
                  type="text"
                  name="doctor.name"
                  value={formData.doctor.name}
                  onChange={handleChange}
                  placeholder="Doctor Name"
                  className="flex h-10 w-full rounded-md border"
                  required
                />
              </div>

              <div>
                <label htmlFor="doctor.specialization" className="block mb-1 ml-2 text-sm font-medium text-gray-700">
                  Doctor Specialization
                </label>
                <input
                  type="text"
                  name="doctor.specialization"
                  value={formData.doctor.specialization}
                  onChange={handleChange}
                  placeholder="Specialization/General"
                  className="flex h-10 w-full rounded-md border"
                  required
                />
              </div>

              {/* Date and Time */}
              <div>
                <label htmlFor="date" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border"
                  required
                />
              </div>

              <div>
                <label htmlFor="time" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactNumber" className="block mb-1 ml-2 text-sm font-medium text-gray-700">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Patient Contact Number"
                  className="flex h-10 w-full rounded-md border"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white w-full h-10 rounded-md hover:bg-blue-600"
              >
                Book Appointment
              </button>
            </form>

            {/* Success Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-4 rounded shadow-md">
                  <h2 className="text-lg font-bold">{successMessage}</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Error Modal */}
            {isErrorModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-red-100 p-4 rounded shadow-md">
                  <h2 className="text-lg font-bold text-red-600">{errorMessage}</h2>
                  <button
                    onClick={() => setIsErrorModalOpen(false)}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
