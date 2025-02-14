import React, { useState } from "react";
import Card  from "@/components/ui/card";
import Button  from "@/components/ui/button";
import { Calendar, Clock, AlertTriangle } from "lucide-react";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Patient 1", date: "Jan 4, 2025", status: "Scheduled", doctor: "Dr. Doctor 1" },
    { id: 2, patient: "Patient 2", date: "Jan 2, 2025", status: "Pending", doctor: "Dr. Doctor 3" },
    { id: 3, patient: "Patient 3", date: "Jan 4, 2025", status: "Cancelled", doctor: "Dr. Doctor 2" },
    { id: 4, patient: "Patient 4", date: "Jan 8, 2025", status: "Scheduled", doctor: "Dr. Doctor 1" },
    { id: 5, patient: "Patient 5", date: "Jan 6, 2025", status: "Pending", doctor: "Dr. Doctor 4" },
  ]);

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold">Welcome, Admin</h1>
      <p className="text-gray-400">Start day with managing new appointments</p>
      
      <div className="grid grid-cols-3 gap-4 mt-6">
        <Card className="p-4 bg-gray-800 flex items-center gap-4">
          <Calendar className="text-yellow-500" size={32} />
          <div>
            <p className="text-lg font-semibold">92</p>
            <p className="text-gray-400">Total number of scheduled appointments</p>
          </div>
        </Card>
        <Card className="p-4 bg-gray-800 flex items-center gap-4">
          <Clock className="text-blue-500" size={32} />
          <div>
            <p className="text-lg font-semibold">32</p>
            <p className="text-gray-400">Total number of pending appointments</p>
          </div>
        </Card>
        <Card className="p-4 bg-gray-800 flex items-center gap-4">
          <AlertTriangle className="text-red-500" size={32} />
          <div>
            <p className="text-lg font-semibold">56</p>
            <p className="text-gray-400">Total number of cancelled appointments</p>
          </div>
        </Card>
      </div>

      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700 text-gray-400">
              <th className="p-2">Patient</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Doctor</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b border-gray-700">
                <td className="p-2">{appt.patient}</td>
                <td className="p-2">{appt.date}</td>
                <td className={`p-2 text-${appt.status === 'Scheduled' ? 'green' : appt.status === 'Pending' ? 'blue' : 'red'}-500`}>{appt.status}</td>
                <td className="p-2">{appt.doctor}</td>
                <td className="p-2">
                  <Button className="text-green-500">Schedule</Button>
                  <Button className="text-red-500 ml-2">Cancel</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
