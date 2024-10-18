import React, {useState,useEffect} from 'react'
import { submitMedicinedetails } from '../apiservices/submitMedicinedetails'
export default function Medicinedetails() {
    const [formData, setFormData] = useState({
      medicineId: '',
      medicineName: '',
      price: 0.0,
      quantityInStock: 0,
      expiryDate: '',
    });
  
    // const [message, setMessage] = useState(''); // To track success or error messages

    useEffect(() => {
        if (Notification.permission !== "granted") {
          Notification.requestPermission();
        }
      }, []);
    
      // Function to show notifications
      const showNotification = (title, body) => {
        if (Notification.permission === "granted") {
          new Notification(title, { body });
        }
      };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent page reload on form submission
      console.log('Form Data:', formData); // Log form data to inspect
      try {
          const response = await submitMedicinedetails(formData); // Send form data to backend
          console.log('Details submitted successfully:', response);
          // Optionally reset form or display success message
                // Show success notification
            showNotification('Success', 'Medicine details submitted successfully.');
          //setMessage('Submitted Success Fully')
          //It makes the form clear 
          setFormData({
            medicineId: '',
            medicineName: '',
            price: 0.0,
            quantityInStock:0,
            expiryDate: '',
          });
  
          //clears message after 2 secs
        //   setTimeout(() => {
        //     setMessage(''); // Clear the message after 3 seconds
        //   }, 3000);
      } catch (error) {
          console.error('Error submitting details:', error);
          // Handle error (e.g., display error message)
          showNotification('Error', 'Failed to submit medicine details.');
      }
  };
  
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <main className="flex-grow p-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Enter medicine details</h1>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4">
              {/* Optionally display success or error messages */}
              {/* {message && <p className="text-left text-red-500 mb-8 ">{message}</p>} */}
            </div>
            <div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Enter Here</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Input fields remain unchanged */}
                  <div>
                    <label htmlFor="medicineId" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Medicine Name/ID</label>
                    <input 
                      type="text"
                      name="medicineId"
                      value={formData.medicineId}
                      onChange={handleChange}
                      placeholder="Medicine Id"
                      className="flex h-10 w-full rounded-md border"
                    />
                  </div>
                  <div>
                    <label htmlFor="medicineName" className="block mb-1 ml-2 text-sm font-medium text-gray-700">medicineName</label>
                    <input
                      type="text"
                      name="medicineName"
                      value={formData.medicineName}
                      onChange={handleChange}
                      placeholder="medicineName"
                      className="flex h-10 w-full rounded-md border"
                    />
                  </div>
                  <div>
                    <label htmlFor="price" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Price</label>
                    <input
                      type="number"
                      name="price"
                      step="any"
                      min="0"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Price"
                      className="flex h-10 w-full rounded-md border"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantityInStock" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Quantity is Stock</label>
                    <input
                      type="text"
                      name="quantityInStock"
                      value={formData.quantityInStock}
                      onChange={handleChange}
                      placeholder="quantityInStock"
                      className="flex h-10 w-full rounded-md border"
                    />
                  </div>
                  <div>
                    <label htmlFor="expiryDate" className="block mb-1 ml-2 text-sm font-medium text-gray-700">Expiry Date</label>
                    <textarea
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="expiryDate"
                      className="flex min-h-[80px] w-full rounded-md border"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Submit Details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  