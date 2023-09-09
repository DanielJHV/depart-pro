import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createDepartment,
  getDepartmentById,
  updateDepartment,
} from "../services/DepartmentService";

function Department() {
  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");

  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDepartmentById(id)
      .then((response) => {
        setDepartmentName(response.data.departmentName);
        setDescription(response.data.description);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function saveDepartment(e) {
    e.preventDefault();

    const department = { departmentName, description };

    if (id) {
      updateDepartment(id, department)
        .then((response) => {
          console.log(response.data);
          navigator("/departments");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createDepartment(department)
        .then((response) => {
          navigator("/departments");
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function pageTitle() {
    if (id) {
      return <h2 className="heading-secondary">Edit department</h2>;
    } else {
      return <h2 className="heading-secondary">Add department</h2>;
    }
  }

  return (
    <form className="form">
      {pageTitle()}
      <div className="form-section">
        <label>Department name</label>
        <input
          type="text"
          name="departmentName"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          autoComplete="off"
        ></input>
      </div>

      <div className="form-section">
        <label>Description</label>

        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="off"
        ></input>
      </div>
      <button className="btn-save" onClick={(e) => saveDepartment(e)}>
        Save
      </button>
    </form>
  );
}

export default Department;
