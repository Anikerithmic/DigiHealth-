import React from 'react';

const ManagePatients = () => {
  return (
    <div className="manage-patients">
      <h2>Manage Patients</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example of patient data (Replace with actual dynamic data) */}
          <tr>
            <td>Sameer Desai</td>
            <td>sameer@gmail.com</td>
            <td>22</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManagePatients;
