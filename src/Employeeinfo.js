import React, { useState } from 'react';
import './Employeeinfo.css'; 
function Employeeinfo() {
  const [employee, setEmployee] = useState({
    name: '',
    age: '',
    profession: '',
    location: '',
  });

  const [employeeList, setEmployeeList] = useState([]);

const handleChange=(e)=>{
    const { name, value } = e.target;
    setEmployee(prev => ({...prev,[name]: value }));
  }

  function handleAdd(e) {
    e.preventDefault();

    if (!employee.name || !employee.age || !employee.profession || !employee.location) {
      alert("Please fill all fields");
      return;
    }

    setEmployeeList(prevList => [...prevList, employee]);
    setEmployee({
      name: '',
      age: '',
      profession: '',
      location: '',
    });
  }

  return (
    <div style={{ padding: '30px' }}>
      <h1 className="heading">Add Employee</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
        /><br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={employee.age}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={employee.profession}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={employee.location}
          onChange={handleChange}
        /><br /><br />

        <button type="submit" className="add-button">Add</button>

      </form>

      <br /><br />
      <h2 className="heading2"><strong>Employee List</strong></h2>
      {employeeList.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employeeList.map((emp, index) => (
            <li key={index}>
              {emp.name} | {emp.age} | {emp.profession} | {emp.location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Employeeinfo;
