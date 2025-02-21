import React, { useState } from "react";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Calendar, Check, X, User } from "lucide-react";

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "Patient 1", date: "2025-02-18", time: "10:00 AM", status: "Pending", details: "Routine checkup" },
    { id: 2, patient: "Patient 2", date: "2025-02-19", time: "11:30 AM", status: "Approved", details: "Follow-up consultation" },
    { id: 3, patient: "Patient 3", date: "2025-02-20", time: "02:00 PM", status: "Cancelled", details: "Missed appointment" },
    { id: 4, patient: "Patient 4", date: "2025-02-21", time: "01:15 PM", status: "Pending", details: "General diagnosis" },
  ]);

  const updateStatus = (id, newStatus) => {
    setAppointments(
      appointments.map(appt => appt.id === id ? { ...appt, status: newStatus } : appt)
    );
  };

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold">Welcome, Doctor</h1>
      <p className="text-gray-400">Manage your appointments efficiently</p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="p-4 bg-gray-800 flex items-center gap-4">
          <Calendar className="text-yellow-500" size={32} />
          <div>
            <p className="text-lg font-semibold">{appointments.length}</p>
            <p className="text-gray-400">Total Appointments</p>
          </div>
        </Card>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Appointments</h2>
        <div className="mt-4 grid grid-cols-1 gap-4">
          {appointments.map((appt) => (
            <Card key={appt.id} className="p-4 bg-gray-800">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold cursor-pointer text-blue-400" onClick={() => alert(`Viewing profile of ${appt.patient}`)}>
                  {appt.patient}
                </h3>
                <span className={`text-sm px-2 py-1 rounded ${
                  appt.status === "Pending" ? "bg-yellow-500 text-black" :
                  appt.status === "Approved" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}>
                  {appt.status}
                </span>
              </div>
              <p className="text-gray-400 mt-2">Date: {appt.date} | Time: {appt.time}</p>
              <p className="text-gray-400">Details: {appt.details}</p>
              {appt.status === "Pending" && (
                <div className="mt-4 flex gap-2">
                  <Button className="bg-green-500 hover:bg-green-600" onClick={() => updateStatus(appt.id, "Approved")}>
                    <Check className="mr-2" size={16} /> Approve
                  </Button>
                  <Button className="bg-red-500 hover:bg-red-600" onClick={() => updateStatus(appt.id, "Cancelled")}>
                    <X className="mr-2" size={16} /> Cancel
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
