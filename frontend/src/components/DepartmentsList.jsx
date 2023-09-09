import { useEffect, useState } from "react";
import { getAllDepartments } from "../services/DepartmentService";
import { useNavigate } from "react-router-dom";
import { deleteDepartment } from "../services/DepartmentService";

function DepartmentsList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    listOfDepartments();
  }, []);

  const navigator = useNavigate();

  function listOfDepartments() {
    getAllDepartments()
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addDepartment() {
    navigator("/add-department");
  }

  function updateDepartment(id) {
    navigator(`/edit-department/${id}`);
  }

  function removeDepartment(id) {
    deleteDepartment(id)
      .then((response) => {
        console.log(response.data);
        listOfDepartments();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="departments-list">
      <h2 className="heading-secondary">Departments list</h2>
      <div className="add-container">
        <button className="btn-add" onClick={addDepartment}>
          Add department
        </button>
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
                  onClick={() => removeDepartment(department.id)}
                >
                  Delete
                </button>
                <button
                  className="btn-manage btn-edit"
                  onClick={() => updateDepartment(department.id)}
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
