import React, { useState } from "react";

function Plogin() {
  // State hooks for form handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Logged in with", { email, password });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Left section: Welcome message */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold ">Login to Your Account</h1>
          <p className="py-6 ">
            Welcome back! Please enter your credentials to access your account.
          </p>
        </div>

        {/* Right section: Login form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl rounded-lg">
          <form className="card-body" onSubmit={handleSubmit}>
            {/* Email input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-primary w-full p-3 rounded-md"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password input */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-lg font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered input-primary w-full p-3 rounded-md"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label mt-2">
                <a href="#" className="label-text-alt text-sm text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Submit button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full py-3 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
                Login
              </button>
            </div>
          </form>
{/* 
        Optional: Social login options
<div className="mt-6 text-center">
  <p className="text-sm text-gray-600 mb-2">or login with</p>
  <div className="flex justify-center gap-6 mt-4"> */}
    {/* Facebook Button */}
    {/* <button className="btn btn-outline btn-sm btn-circle bg-blue-600 text-white hover:bg-blue-700 w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md">
      <i className="fab fa-facebook-f text-xl">Facebook</i>
    </button> */}

    {/* Google Button */}
    {/* <button className="btn btn-outline btn-sm btn-circle bg-red-600 text-white hover:bg-red-700 w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md">
      <i className="fab fa-google text-xl">Google</i>
    </button>
  </div>
</div> */}

        </div>
      </div>
    </div>
  );
}

export default Plogin;
