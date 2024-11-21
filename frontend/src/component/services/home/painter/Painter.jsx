import React from 'react';
import { useState } from "react";
function Painter() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const[data,setdata]=useState([]);
  

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleBooking = (barber) => {
    if (!selectedTime || !selectedCity) {
      alert("Please select a city and time slot.");
      return;
    }
    setSelectedBarber(barber);
    setAppointmentBooked(true); // Show the modal when booking
  };

  const handleCloseModal = () => {
    setAppointmentBooked(false); // Close the modal when the user clicks close
  };

  const handleConfirmBooking = () => {
    // Handle appointment confirmation logic here
    alert(`Your appointment with ${selectedBarber.name} is confirmed for ${selectedTime} in ${selectedCity}.`);
    setAppointmentBooked(false); // Close the modal after confirming
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Dropdown for selecting city and time slots */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
        <div className="w-full max-w-xs">
          <label className="block text-lg font-medium mb-2">Select Your City:</label>
          <select
            className="select select-bordered w-full text-lg font-semibold"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="" disabled>Select your city</option>
            <option value="Karad">Karad</option>
            <option value="Malkapur">Malkapur</option>
            <option value="Kale">Kale</option>
            <option value="Banavdi">Banavdi</option>
            <option value="Masoor">Masoor</option>
          </select>
        </div>

        <div className="w-full max-w-xs">
          <label className="block text-lg font-medium mb-2">Select Time Slot:</label>
          <select
            className="select select-bordered w-full text-lg font-medium"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            <option value="" disabled>Select a time slot</option>
            <option value="00:00 to 02:00">00:00 to 02:00</option>
            <option value="02:00 to 04:00">02:00 to 04:00</option>
            <option value="04:00 to 06:00">04:00 to 06:00</option>
            <option value="06:00 to 08:00">06:00 to 08:00</option>
            <option value="08:00 to 10:00">08:00 to 10:00</option>
            <option value="10:00 to 12:00">10:00 to 12:00</option>
            <option value="12:00 to 14:00">12:00 to 14:00</option>
            <option value="14:00 to 16:00">14:00 to 16:00</option>
            <option value="16:00 to 18:00">16:00 to 18:00</option>
            <option value="18:00 to 20:00">18:00 to 20:00</option>
            <option value="20:00 to 22:00">20:00 to 22:00</option>
            <option value="22:00 to 24:00">22:00 to 24:00</option>
          </select>
        </div>
      </div>

      {/* Barber Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {data.map((barber, index) => (
          <div key={index} className="flex justify-center">
            <div
              className="card bg-base-100 w-full max-w-sm shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              onClick={() => handleBooking(barber)} // Barber card click
            >
              <div className="card-body p-4 flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-24 h-24 rounded-full border-4 border-gray-300"
                  />
                </div>
                <h2 className="card-title text-xl font-semibold mb-2">{barber.name}</h2>
                <p className="text-base mb-2">Email: {barber.email}</p>
                <p className="text-base mb-4">Phone: {barber.phone}</p>
                <p className="mt-2 text-base mb-4">{barber.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Appointment Success Modal */}
      {appointmentBooked && (
        <dialog open className="modal">
          <div className="modal-box w-11/12 max-w-5xl bg-base-100 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-4">Appointment Booking</h3>
            <p className="py-4">
              You're about to book an appointment with {selectedBarber.name} for {selectedTime} in {selectedCity}.
            </p>
            <div className="modal-action flex justify-between">
              <form method="dialog">
                <button className="btn" onClick={handleCloseModal}>Cancel</button>
              </form>
              <button className="btn btn-primary text-white bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-lg transition duration-300" onClick={handleConfirmBooking}>
                Book Appointment
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Painter;
