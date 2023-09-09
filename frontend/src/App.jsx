import "./App.css";
import EmployeesList from "./components/EmployeesList";
import Header from "./components/Header";
import Employee from "./components/Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DepartmentsList from "./components/DepartmentsList";
import Department from "./components/Department";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeesList />}></Route>
          <Route path="/employees" element={<EmployeesList />}></Route>
          <Route path="/add-employee" element={<Employee />}></Route>
          <Route path="/edit-employee/:id" element={<Employee />}></Route>
          <Route path="/departments" element={<DepartmentsList />}></Route>
          <Route path="/add-department" element={<Department />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
