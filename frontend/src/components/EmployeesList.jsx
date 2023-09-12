import { useEffect } from "react";
import { useState } from "react";
import { deleteEmployee, employeesList } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    employeesList()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    deleteEmployee(id)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="employees-list">
      <h2 className="heading-secondary">Employees list</h2>
      <div class="add-container">
        <button className="btn-add" onClick={addEmployee}>
          Add employee
        </button>
      </div>
      <table className="table">
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
                  className="btn-manage btn-delete"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
                <button
                  className="btn-manage btn-edit"
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
