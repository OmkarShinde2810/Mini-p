import React from 'react'

function Userlogin() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Left Column (Text) */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6 text-lg ">
            Welcome back! Please enter your credentials to access your account.
            </p>
          </div>

          {/* Right Column (Form) */}
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-lg">
            <form className="card-body p-8">
              {/* Email Input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered input-lg w-full p-3 text-lg"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-lg font-medium">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered input-lg w-full p-3 text-lg"
                  required
                />
                <label className="label mt-2">
                  <a href="#" className="label-text-alt text-blue-600 hover:text-blue-800">Forgot password?</a>
                </label>
              </div>

              {/* Login Button */}
              <div className="form-control mt-6">
                <button className="btn btn-primary w-full py-3 text-xl font-semibold transition-all hover:bg-blue-700">
                  Login
                </button>
              </div>
            </form>

            {/* Optional: Social login options */}
            {/* <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 mb-2">or login with</p>
              <div className="flex justify-center gap-6 mt-4"> */}
                {/* Facebook Button */}
                {/* <button className="btn btn-outline btn-sm btn-circle bg-blue-600 text-white hover:bg-blue-700 w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md">
                  <i className="fab fa-facebook-f text-xl"></i>
                </button> */}

                {/* Google Button
                <button className="btn btn-outline btn-sm btn-circle bg-red-600 text-white hover:bg-red-700 w-12 h-12 flex items-center justify-center transition-colors duration-300 shadow-md">
                  <i className="fab fa-google text-xl"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userlogin
