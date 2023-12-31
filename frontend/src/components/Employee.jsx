import { useState, useEffect } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { getAllDepartments } from "../services/DepartmentService";

function Employee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    getAllDepartments()
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setDepartmentId(response.data.departmentId);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveEmployee(e) {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstName, lastName, email, departmentId };

      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    if (departmentId) {
      errorsCopy.department = "";
    } else {
      errorsCopy.department = "Department is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="heading-secondary">Edit employee</h2>;
    } else {
      return <h2 className="heading-secondary">Add employee</h2>;
    }
  }

  return (
    <form className="form">
      {pageTitle()}
      <div className="form-section">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="off"
        ></input>
        {errors.firstName && (
          <div className="invalid-input">{errors.firstName}</div>
        )}
      </div>

      <div className="form-section">
        <label>Last name</label>

        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="off"
        ></input>
        {errors.lastName && (
          <div className="invalid-input">{errors.lastName}</div>
        )}
      </div>

      <div className="form-section">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        ></input>
        {errors.email && <div className="invalid-input">{errors.email}</div>}
      </div>

      <div className="form-section">
        <label>Select department</label>
        <select
          className="select"
          value={departmentId}
          onChange={(e) => setDepartmentId(e.target.value)}
        >
          <option value="Select Department">Select department</option>
          {departments.map((department) => {
            return (
              <option key={department.id} value={department.id}>
                {department.departmentName}
              </option>
            );
          })}
        </select>
        {errors.department && (
          <div className="invalid-input">{errors.department}</div>
        )}
      </div>
      <button className="btn-save" onClick={saveEmployee}>
        Save
      </button>
    </form>
  );
}

export default Employee;
