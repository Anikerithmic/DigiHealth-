import React from 'react';

const ManageDoctors = () => {
  return (
    <div className="manage-doctors">
      <h2>Manage Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Specialization</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example of doctor data (Replace with actual dynamic data) */}
          <tr>
            <td>Dr.Dinesh</td>
            <td>drdinesh@gmail.com</td>
            <td>Cardiology</td>
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

export default ManageDoctors;
