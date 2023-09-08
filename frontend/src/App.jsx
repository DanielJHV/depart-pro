import "./App.css";
import EmployeesList from "./components/EmployeesList";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<EmployeesList />}></Route>
          <Route path="/employees" element={<EmployeesList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
