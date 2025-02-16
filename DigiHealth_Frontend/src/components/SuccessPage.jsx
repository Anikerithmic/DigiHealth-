import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <CheckCircle className="text-green-500 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4 text-center">
        Appointment Booked Successfully!
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-2 text-center max-w-sm md:max-w-md">
        Your appointment has been confirmed. You can view details in your dashboard.
      </p>
      <button
        className="mt-6 bg-blue-500 px-4 sm:px-6 py-2 rounded-md text-sm sm:text-base text-white hover:bg-blue-600 transition-colors duration-200 w-full sm:w-auto max-w-xs"
        onClick={() => navigate("/patient-dashboard")}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default SuccessPage;