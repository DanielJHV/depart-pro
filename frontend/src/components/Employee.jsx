import { useState } from "react";

function Employee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  function saveEmployee(e) {
    e.preventDefault();

    const employee = { firstName, lastName, email };
    console.log(employee);
  }

  return (
    <form className="employee-form">
      <div className="employee-section">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="off"
        ></input>
      </div>

      <div className="employee-section">
        <label>Last name</label>

        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          autoComplete="off"
          required
        ></input>
      </div>

      <div className="employee-section">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
        ></input>
      </div>
      <button className="btn-save" onClick={saveEmployee}>
        Save
      </button>
    </form>
  );
}

export default Employee;
