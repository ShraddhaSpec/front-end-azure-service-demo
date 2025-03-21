import axios from "axios";

//const axios = require("axios"); // Fixing "Cannot use import statement outside a module" in GitHub Actions
//const API_URL = "https://localhost:7085/api/Employee"; // Adjust based on your .NET API URL
const API_URL = "https://azureservicedemoapi-e2e4apfsedajbwb7.canadacentral-01.azurewebsites.net/api/Employee"; // Adjust based on your .NET API URL

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
