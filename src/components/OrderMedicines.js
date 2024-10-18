import React, { useState } from 'react';
import { submitMedicineOrder } from '../apiservices/submitorders'; // Import the service function

export default function OrderMedicines() {

  const [isSidebarOpen,setIsSidebarOpen]=useState(false);
  const[isDropdownOpen,setIsDropdownOpen]=useState(false);
  const [formData, setFormData] = useState({
    medId: '',
    patientId: '',
    quantity: 1,
    prescriptionId: '',
    address: '',
    contactNumber: '',
  });

  const [message, setMessage] = useState(''); // To track success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    console.log('Form Data:', formData); // Log form data to inspect
    try {
        const response = await submitMedicineOrder(formData); // Send form data to backend
        console.log('Order submitted successfully:', response);
        // Optionally reset form or display success message
        setMessage('Order Placed Success Fully')
        //It makes the form clear 
        setFormData({
          medId:'',
          patientId:'',
          quantity:1,
          address:'',
          contactNumber:'',
        });

        //clears message after 2 secs
        setTimeout(() => {
          setMessage(''); // Clear the message after 3 seconds
        }, 3000);
    } catch (error) {
        console.error('Error submitting order:', error);
        // Handle error (e.g., display error message)
    }
};

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};

const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
};

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Order Medicine</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            {/* Optionally display success or error messages */}
            {message && <p className="text-center text-red-500">{message}</p>}
          </div>
          <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Order Here</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Input fields remain unchanged */}
                <div>
                  <label htmlFor="medId" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Medicine Name/ID</label>
                  <input 
                    type="text"
                    name="medId"
                    value={formData.medId}
                    onChange={handleChange}
                    placeholder="Medicine Name"
                    className="flex h-10 w-full rounded-md border"
                  />
                </div>
                <div>
                  <label htmlFor="patientId" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Patient ID</label>
                  <input
                    type="text"
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    placeholder="Patient ID"
                    className="flex h-10 w-full rounded-md border"
                  />
                </div>
                <div>
                  <label htmlFor="quantity" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    className="flex h-10 w-full rounded-md border"
                  />
                </div>
                <div>
                  <label htmlFor="prescriptionId" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Prescription ID</label>
                  <input
                    type="text"
                    name="prescriptionId"
                    value={formData.prescriptionId}
                    onChange={handleChange}
                    placeholder="Prescription ID"
                    className="flex h-10 w-full rounded-md border"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Delivery Address"
                    className="flex min-h-[80px] w-full rounded-md border"
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className="flex h-10 w-full rounded-md border"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
