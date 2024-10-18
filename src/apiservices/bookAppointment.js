import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Spring Boot backend URL

export const bookAppointment = async (appData) => {
  try {
    const response = await axios.post(`${API_URL}/appointment`, appData, {
      headers: {
        'Content-Type': 'application/json', // Ensure JSON format
      },
    });

    // Check if the response status is success (e.g., 200 OK or 201 Created)
    if (response.status === 200 || response.status === 201) {
      console.log('Appointment successfully booked:', response.data);
      return response; // Return full response to handle it in React
    } else {
      throw new Error('Unexpected response status: ' + response.status);
    }
  } catch (error) {
    console.error('Error submitting appointment:', error.response || error);
    throw error; // Rethrow the error to be caught in the component
  }
};
