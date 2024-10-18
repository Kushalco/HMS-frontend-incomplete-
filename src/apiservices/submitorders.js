import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Spring Boot backend URL

// Function to send form data to backend
export const submitMedicineOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_URL}/medicine-orders`, orderData, {
      headers: {
        'Content-Type': 'application/json', // Make sure you're sending JSON data
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error submitting order:', error);
    throw error;
  }
};
