import { useEffect } from "react";
import { useState } from "react";
import { employeesList } from "../services/EmployeeService";

function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    employeesList()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="employees-list">
      <h2 className="heading-secondary">Employees list</h2>
      <table className="employees-table">
        <thead>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>
                <a href={`mailto: ${employee.email}`}>{employee.email}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
