import { useEffect } from "react";
import { useState } from "react";
import { employeesList } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    employeesList()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  return (
    <div className="employees-list">
      <h2 className="heading-secondary">Employees list</h2>
      <div class="add-container">
        <button class="btn-add" onClick={addEmployee}>
          Add employee
        </button>
      </div>
      <table className="employees-table thead-light">
        <thead>
          <th>ID</th>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Manage</th>
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
              <td>
                <button
                  className="btn-edit"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
