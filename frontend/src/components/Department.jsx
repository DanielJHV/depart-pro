import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Department() {
  const [departmentName, setDepartmentName] = useState("");
  const [description, setDescription] = useState("");

  const navigator = useNavigate();

  function saveDepartment(e) {
    e.preventDefault();

    const department = { departmentName, description };
    console.log(department);
    navigator("/departments");
  }

  //   function validateForm() {
  //     let valid = true;

  //     const errorsCopy = { ...errors };

  //     if (firstName.trim()) {
  //       errorsCopy.firstName = "";
  //     } else {
  //       errorsCopy.firstName = "First name is required";
  //       valid = false;
  //     }

  //     if (lastName.trim()) {
  //       errorsCopy.lastName = "";
  //     } else {
  //       errorsCopy.lastName = "Last name is required";
  //       valid = false;
  //     }

  //     if (email.trim()) {
  //       errorsCopy.email = "";
  //     } else {
  //       errorsCopy.email = "Email is required";
  //       valid = false;
  //     }

  //     setErrors(errorsCopy);
  //     return valid;
  //   }

  return (
    <form className="form">
      {/* {pageTitle()} */}
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
