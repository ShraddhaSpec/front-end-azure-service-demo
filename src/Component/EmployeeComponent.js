import React, { useEffect, useState } from 'react'
// import { getEmployees } from '../Service/api';

import axios from "axios";

export const EmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const API_URL = "https://localhost:7085/api/Employee"; // Adjust based on your .NET API URL

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const getEmployees = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error fetching employees:", error);
      return [];
    }
  };

  return (
    <div>
    <h2>Employee List</h2>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.firstName} {emp.lastName}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
