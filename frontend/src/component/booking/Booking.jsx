import React, { useState } from "react";

function Booking() {
  // State for the list of bookings
  const [bookings, setBookings] = useState([
    {
      id: "#123456",
      service: "Electrical Repair",
      serviceOwner: "John Doe",
      timeSlot: "10:00 AM - 12:00 PM",
    },
    {
      id: "#789101",
      service: "Plumbing Repair",
      serviceOwner: "Jane Smith",
      timeSlot: "02:00 PM - 04:00 PM",
    },
  ]);

  // Function to handle deleting a booking
  const handleDelete = (id) => {
    setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {/* Dynamically render booking cards */}
      {bookings.map((booking) => (
        <div key={booking.id} className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform">
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-semibold mb-4">Booked Service</h2>

            {/* Booking ID */}
            <p className="text-lg mb-2">
              <span className="font-bold">Booking ID:</span> {booking.id}
            </p>

            {/* Service Information */}
            <p className="text-lg mb-2">
              <span className="font-bold">Service:</span> {booking.service}
            </p>

            {/* Service Owner */}
            <p className="text-lg mb-2">
              <span className="font-bold">Service Owner:</span> {booking.serviceOwner}
            </p>

            {/* Time Slot */}
            <p className="text-lg mb-4">
              <span className="font-bold">Time Slot:</span> {booking.timeSlot}
            </p>

            {/* Delete Button */}
            <div className="card-actions justify-end mt-6">
              <button
                onClick={() => handleDelete(booking.id)}
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Booking;
