import React, { useState, useEffect } from "react";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [timeSlots, setTimeSlots] = useState(Array(24).fill(0)); // 24 time slots initialized to 0
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Clear success or error messages after 5 seconds
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

    if (!fullName || !email || !password) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Account created successfully!");

    // Clear form fields
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTimeSlots(Array(24).fill(0)); // Reset time slots
  };

  const handleTimeSlotChange = (index, value) => {
    const updatedSlots = [...timeSlots];
    updatedSlots[index] = value;
    setTimeSlots(updatedSlots);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full">
        {/* Left Side: Form */}
        <div className="card bg-base-100 w-full lg:w-1/2 shadow-2xl p-6">
          <form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
            <div className="form-control">
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

            <div className="form-control">
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

            <div className="form-control">
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

            <div className="form-control">
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

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Already have an account?{" "}
                <a href="/login" className="text-primary link link-hover">
                  Log in
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Right Side: Time Slots */}
        <div className="card bg-base-100 w-full lg:w-1/2 shadow-2xl p-6">
          <h1 className="text-2xl font-bold mb-4">Available Time Slots</h1>
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

export default Signup;
