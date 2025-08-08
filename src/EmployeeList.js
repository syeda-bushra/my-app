import React from 'react';
import './EmployeeList.css';
import { useState } from 'react';

const EmployeeList = () => {
  const [searchEmp, setSearchEmp] = useState('');
  const employees = [
    {
      id: 'DSC001',
      name: 'Sana',
      department: 'HR',
      title: 'HR Manager',
      joiningDate: '06-5-2025',
      contact: 'sana@gmail.com',
    },
    {
      id: 'DSC002',
      name: 'Shizra Ahmed',
      department: 'IT',
      title: 'Frontend Developer',
      joiningDate: '15-3-2021',
      contact: 'shizra@gmail.com',
    },
    {
      id: 'DSC003',
      name: 'Dua e Zainab',
      department: 'Finance',
      title: 'Accountant',
      joiningDate: '06-4-2025',
      contact: 'dua@gmail.com',
    },
    {
      id: 'DSC004',
      name: 'Daniyal Hashmi',
      department: 'IT',
      title: 'Backend Developer',
      joiningDate: '02-2-2023',
      contact: 'daniyal@gmail.com',
    },
    {
      id: 'DSC005',
      name: 'Sobia Islam',
      department: 'Marketing',
      title: 'Marketing Specialist',
      joiningDate: '23-9-2024',
      contact: 'sobia@gmail.com',
    },
    {
      id: 'DSC006',
      name: 'Maira Usman',
      department: 'HR',
      title: 'Recruiter',
      joiningDate: '12-2-2022',
      contact: 'maira@gmail.com',
    },
    {
      id: 'DSC007',
      name: 'Abdullah Usman',
      department: 'IT',
      title: 'UI/UX Designer',
      joiningDate: '10-4-2023',
      contact: 'abdullah@gmail.com',
    },
    {
      id: 'DSC008',
      name: 'Muskan Abro',
      department: 'Customer Support',
      title: 'Support Agent',
      joiningDate: '04-7-2025',
      contact: 'muskan@gmail.com',
    },
    {
      id: 'DSC009',
      name: 'Ayesha Ali',
      department: 'Sales',
      title: 'Sales Executive',
      joiningDate: '09-9-2024',
      contact: 'ayesha@gmail.com',
    },
    {
      id: 'DSC010',
      name: 'Syeda Bushra',
      department: 'IT',
      title: 'Junior Software Engineer',
      joiningDate: '1-8-2025',
      contact: 'bushra@gmail.com',
    },

    
  ];
    const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchEmp.toLowerCase())
   
  );

  return (
   
    <div>
      <h1>Search Employees</h1>
    
      <input
        type="text"
        placeholder="Search by name..."
        value={searchEmp}
        onChange={(e) => setSearchEmp(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px', width: '100%', maxWidth: '400px' }}
      />
      <h2><strong>Employee List</strong></h2>
<ul>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map((employee) => (
            <li key={employee.id}>
              <ul>
                <li><strong>Employee ID:</strong> {employee.id}</li>
                <li><strong>Name:</strong> {employee.name}</li>
                <li><strong>Department:</strong> {employee.department}</li>
                <li><strong>Designation:</strong> {employee.title}</li>
                <li><strong>Date of Joining:</strong> {employee.joiningDate}</li>
                <li><strong>Contact:</strong> {employee.contact}</li>
              </ul>
              <hr />
            </li>
          ))
        ) : (
          <li>No employees found.</li>
        )}
      </ul>
    </div>
  );
};

export default EmployeeList;
