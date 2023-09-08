import { useEffect, useState } from "react";
import { getAllDepartments } from "../services/DepartmentService";

function DepartmentsList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getAllDepartments()
      .then((response) => {
        console.log(response.data);
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="departments-list">
      <h2 className="heading-secondary">Departments list</h2>
      <div class="add-container">
        <button class="btn-add">Add department</button>
      </div>
      <table className="table">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Manage</th>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.departmentName}</td>
              <td>{department.description}</td>
              <td>
                <button
                  className="btn-manage btn-delete"
                  //   onClick={() => deleteDepartment(department.id)}
                >
                  Delete
                </button>
                <button
                  className="btn-manage btn-edit"
                  //   onClick={() => updateEmployee(department.id)}
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

export default DepartmentsList;
