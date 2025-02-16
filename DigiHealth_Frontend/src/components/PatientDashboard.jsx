// import React, { useState } from "react";
// import Card from "@/components/ui/card";
// import Button from "@/components/ui/button";
// import { Calendar } from "lucide-react";
// import Modal from "@/components/ui/AppointmentModal";
// import SuccessPage from "./SuccessPage";

// const doctorsList = [
//   { id: 1, name: "Dr. Doctor 1", specialty: "Cardiologist", available: true },
//   { id: 2, name: "Dr. Doctor 2", specialty: "Dermatologist", available: false },
//   { id: 3, name: "Dr. Doctor 3", specialty: "Neurologist", available: true },
//   { id: 4, name: "Dr. Doctor 4", specialty: "Pediatrician", available: true },
//   { id: 5, name: "Dr. Doctor 5", specialty: "Orthopedic", available: false },
// ];

// const PatientDashboard = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState(null);
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedTime, setSelectedTime] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const bookAppointment = () => {
//     if (selectedDoctor && selectedDoctor.available && selectedDate && selectedTime) {
//       setAppointments([...appointments, { doctor: selectedDoctor, date: selectedDate, time: selectedTime }]);
//       setIsModalOpen(false);
//       setIsSuccess(true);
//       setTimeout(() => setIsSuccess(false), 3000);
//     }
//   };

//   return (
//     <div className="p-4 sm:p-6 lg:p-8 text-white bg-gray-900 min-h-screen">
//       {isSuccess ? (
//         <SuccessPage />
//       ) : (
//         <div className="max-w-7xl mx-auto">
//           <div className="space-y-2">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Welcome, Patient</h1>
//             <p className="text-sm sm:text-base text-gray-400">Book appointments with doctors easily</p>
//           </div>
          
//           <div className="mt-4 sm:mt-6">
//             <label className="block text-sm sm:text-base text-gray-400">Select Doctor</label>
//             <select
//               className="bg-gray-800 p-2 w-full mt-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//               onChange={(e) => setSelectedDoctor(doctorsList.find(d => d.id == e.target.value))}
//             >
//               <option value="">-- Choose a Doctor --</option>
//               {doctorsList.map(doctor => (
//                 <option key={doctor.id} value={doctor.id}>
//                   {doctor.name} - {doctor.specialty} {doctor.available ? "(Available)" : "(Not Available)"}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           {selectedDoctor && selectedDoctor.available && (
//             <Button 
//               className="mt-4 bg-green-500 hover:bg-green-600 text-sm sm:text-base transition-colors duration-200" 
//               onClick={() => setIsModalOpen(true)}
//             >
//               Book Appointment
//             </Button>
//           )}

//           <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//             <div className="p-4 sm:p-6">
//               <h2 className="text-lg sm:text-xl font-semibold">Book Appointment</h2>
//               <div className="space-y-4 mt-4">
//                 <div>
//                   <label className="block text-sm sm:text-base">Select Date</label>
//                   <input
//                     type="date"
//                     className="bg-gray-800 p-2 w-full mt-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//                     onChange={(e) => setSelectedDate(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm sm:text-base">Select Time</label>
//                   <input
//                     type="time"
//                     className="bg-gray-800 p-2 w-full mt-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
//                     onChange={(e) => setSelectedTime(e.target.value)}
//                   />
//                 </div>
//                 <Button 
//                   className="bg-blue-500 hover:bg-blue-600 w-full text-sm sm:text-base transition-colors duration-200" 
//                   onClick={bookAppointment}
//                 >
//                   Confirm Booking
//                 </Button>
//               </div>
//             </div>
//           </Modal>

//           <div className="mt-6 sm:mt-8">
//             <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">Your Appointments</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
//               {appointments.map((appt, index) => (
//                 <Card key={index} className="p-4 bg-gray-800 hover:bg-gray-750 transition-colors duration-200">
//                   <h3 className="text-base sm:text-lg font-semibold">{appt.doctor.name}</h3>
//                   <div className="mt-2 space-y-1">
//                     <p className="text-sm sm:text-base text-gray-400">Specialty: {appt.doctor.specialty}</p>
//                     <p className="text-sm sm:text-base text-gray-400">Date: {appt.date}</p>
//                     <p className="text-sm sm:text-base text-gray-400">Time: {appt.time}</p>
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PatientDashboard;

import React, { useState } from "react";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Modal from "@/components/ui/AppointmentModal";
import SuccessPage from "./SuccessPage";

const doctorsList = [
  { id: 1, name: "Dr. Doctor 1", specialty: "Cardiologist", available: true },
  { id: 2, name: "Dr. Doctor 2", specialty: "Dermatologist", available: false },
  { id: 3, name: "Dr. Doctor 3", specialty: "Neurologist", available: true },
  { id: 4, name: "Dr. Doctor 4", specialty: "Pediatrician", available: true },
  { id: 5, name: "Dr. Doctor 5", specialty: "Orthopedic", available: false },
];

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const bookAppointment = () => {
    if (selectedDoctor && selectedDoctor.available && selectedDate && selectedTime) {
      setAppointments([...appointments, { doctor: selectedDoctor, date: selectedDate, time: selectedTime, status: "Pending" }]);
      setIsModalOpen(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 text-white bg-gray-900 min-h-screen">
      {isSuccess ? (
        <SuccessPage />
      ) : (
        <div className="max-w-7xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Welcome, Patient</h1>
            <p className="text-sm sm:text-base text-gray-400">Book appointments with doctors easily</p>
          </div>
          
          <div className="mt-4 sm:mt-6">
            <label className="block text-sm sm:text-base text-gray-400">Select Doctor</label>
            <select
              className="bg-gray-800 p-2 w-full mt-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSelectedDoctor(doctorsList.find(d => d.id == e.target.value))}
            >
              <option value="">-- Choose a Doctor --</option>
              {doctorsList.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty} {doctor.available ? "(Available)" : "(Not Available)"}
                </option>
              ))}
            </select>
          </div>
          
          {selectedDoctor && selectedDoctor.available && (
            <Button 
              className="mt-4 bg-green-500 hover:bg-green-600 text-sm sm:text-base transition-colors duration-200" 
              onClick={() => setIsModalOpen(true)}
            >
              Book Appointment
            </Button>
          )}

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold">Book Appointment</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm sm:text-base">Select Date</label>
                  <input
                    type="date"
                    className="bg-gray-800 p-2 w-full mt-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm sm:text-base">Select Time</label>
                  <input
                    type="time"
                    className="bg-gray-800 p-2 w-full mt-2 rounded text-sm sm:text-base focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) => setSelectedTime(e.target.value)}
                  />
                </div>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 w-full text-sm sm:text-base transition-colors duration-200" 
                  onClick={bookAppointment}
                >
                  Confirm Booking
                </Button>
              </div>
            </div>
          </Modal>

          <div className="mt-6 sm:mt-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold">Your Appointments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {appointments.map((appt, index) => (
                <Card key={index} className="p-4 bg-gray-800 hover:bg-gray-750 transition-colors duration-200">
                  <h3 className="text-base sm:text-lg font-semibold">{appt.doctor.name}</h3>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm sm:text-base text-gray-400">Specialty: {appt.doctor.specialty}</p>
                    <p className="text-sm sm:text-base text-gray-400">Date: {appt.date}</p>
                    <p className="text-sm sm:text-base text-gray-400">Time: {appt.time}</p>
                    <p className="text-sm sm:text-base text-gray-400">Status: {appt.status}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientDashboard;
