import React, { useState, useEffect } from "react";

function PSignup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [basicCost, setBasicCost] = useState(0);
  const [timeSlots, setTimeSlots] = useState(Array(24).fill(0)); // Initialize 24 time slots with 0 services
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    if (
      !fullName ||
      !email ||
      !password ||
      !serviceType ||
      !serviceDescription ||
      !phoneNumber ||
      !basicCost
    ) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Professional account created successfully!");

    // Clear form fields
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setServiceType("");
    setServiceDescription("");
    setPhoneNumber("");
    setBasicCost(0);
    setTimeSlots(Array(24).fill(0));
  };

  const handleTimeSlotChange = (index, value) => {
    const updatedSlots = [...timeSlots];
    updatedSlots[index] = value;
    setTimeSlots(updatedSlots);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row w-full gap-6">
        {/* Left Panel: Professional Details */}
        <div className="card bg-base-100 w-full lg:w-1/2 shadow-lg p-6">
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4">Professional Details</h1>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Select Service Type</span>
              </label>
              <select
                className="select select-bordered"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                required
              >
                <option disabled selected>
                  Choose a category
                </option>
                <option>Home Services</option>
                <option>Personal Care</option>
                <option>Healthcare</option>
              </select>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Service Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Describe your services"
                value={serviceDescription}
                onChange={(e) => setServiceDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="input input-bordered"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Service Cost (in USD)</span>
              </label>
              <input
                type="number"
                placeholder="Enter service cost"
                className="input input-bordered"
                value={basicCost}
                onChange={(e) => setBasicCost(e.target.value)}
                required
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {success && <p className="text-green-500 text-sm mb-2">{success}</p>}

            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </form>
        </div>

        {/* Right Panel: Time Slots */}
        <div className="card bg-base-100 w-full lg:w-1/2 shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Time Slots</h1>
          <div className="overflow-x-auto">
            <table className="table table-bordered w-full">
              <thead>
                <tr>
                  <th>Hour</th>
                  <th>Services Available</th>
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((slot, index) => (
                  <tr key={index}>
                    <td>
                      {index}:00 - {index + 1}:00
                    </td>
                    <td>
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        value={slot}
                        onChange={(e) =>
                          handleTimeSlotChange(index, parseInt(e.target.value) || 0)
                        }
                        min="0"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PSignup;
