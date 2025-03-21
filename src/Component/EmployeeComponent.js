import React, { useEffect, useState } from 'react'
import { getEmployees } from '../Service/api.js';

export const EmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);
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
