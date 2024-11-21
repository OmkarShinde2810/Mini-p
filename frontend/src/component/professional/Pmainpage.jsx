import React, { useState } from 'react';

function Pmainpage() {
  // State to hold service details
  const [serviceName, setServiceName] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [cost, setCost] = useState('');
  const [services, setServices] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new service object
    const newService = {
      serviceName,
      timeSlot,
      cost,
    };

    // Add new service to the list
    setServices([...services, newService]);

    // Clear the form
    setServiceName('');
    setTimeSlot('');
    setCost('');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Add Your Service</h1>

      {/* Form for adding a service */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Service Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter service name (e.g., Electrical Repair)"
            className="input input-bordered w-full p-3 rounded-md"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Time Slot</span>
          </label>
          <input
            type="text"
            placeholder="Enter available time slot (e.g., 10:00 AM - 12:00 PM)"
            className="input input-bordered w-full p-3 rounded-md"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-medium">Cost</span>
          </label>
          <input
            type="number"
            placeholder="Enter the cost for the service"
            className="input input-bordered w-full p-3 rounded-md"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-4">
          <button
            type="submit"
            className="btn btn-primary w-full py-3 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Add Service
          </button>
        </div>
      </form>

      {/* Display the list of added services */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Added Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform">
              <div className="card-body p-6">
                <h2 className="card-title text-2xl font-semibold mb-4">{service.serviceName}</h2>
                <p className="text-lg mb-2">
                  <span className="font-bold">Time Slot:</span> {service.timeSlot}
                </p>
                <p className="text-lg mb-4">
                  <span className="font-bold">Cost:</span> ${service.cost}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pmainpage;
