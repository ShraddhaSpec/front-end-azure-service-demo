import axios from "axios";

const API_URL = "https://localhost:7085/api/Employee"; // Adjust based on your .NET API URL

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];
  }
};

export const getEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching employee:", error);
    return null;
  }
};
