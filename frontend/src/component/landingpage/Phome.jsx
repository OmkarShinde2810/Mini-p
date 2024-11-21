import React from "react";
import { Link } from "react-router-dom";

function Phome() {
  return (
    <>
    {/* Navbar */}
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1 justify-center lg:justify-start">
        <a className="btn btn-ghost text-2xl font-bold text-center">QuickFIXERS</a>
      </div>
      <div className="flex-none">
        {/* Hamburger Icon for Mobile */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-primary btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-center"
          >
            <li>
              <Link to="/phome">Professional Login</Link>
            </li>
            <li>
              <Link to="/userlogin">Login</Link>
            </li>
            <li>
              <Link to="/singup">Sign-up</Link>
            </li>
          </ul>
        </div>

        {/* Full Buttons for Larger Screens */}
        <ul className="menu menu-horizontal px-1 gap-4 hidden lg:flex justify-center">
          <Link to="/psingup" className="btn ">Professional Login</Link>
          <Link to="/userlogin" className="btn ">Login</Link>
          <Link to="/singup" className="btn ">Sign-up</Link>
        </ul>
      </div>
    </div>

    {/* Hero Section */}
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
        <img
          src="https://images.pexels.com/photos/9462614/pexels-photo-9462614.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="max-w-full lg:max-w-md rounded-lg shadow-2xl"
          alt="Hero"
        />
        <div className="text-center lg:text-center mt-8 lg:mt-0 lg:pr-10">
          <h1 className="text-4xl lg:text-5xl font-bold">On Time, Done Right!</h1>
          <p className="py-4 text-lg">
            Connecting customers and technicians for quick, safe, and affordable bookings.
          </p>
          <Link to="/plogin" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>

    {/* Services Section */}
    <div className="container mx-auto p-6">
      <h2 className="text-center text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Home Services Card */}
        <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
          <figure className="aspect-w-4 aspect-h-3">
            <img
              src="https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=600.webp"
              alt="Home Services"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-semibold">Home Services</h2>
            <p className="">
              Professional home repair and maintenance services tailored for your needs.
            </p>
          </div>
        </div>

        {/* Personal Care Card */}
        <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
          <figure className="aspect-w-4 aspect-h-3">
            <img
              src="https://images.pexels.com/photos/4202329/pexels-photo-4202329.jpeg?auto=compress&cs=tinysrgb&w=600.webp"
              alt="Personal Care"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-semibold">Personal Care</h2>
            <p className="">
              High-quality personal care services to keep you looking and feeling great.
            </p>
          </div>
        </div>

        {/* Healthcare Card */}
        <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden">
          <figure className="aspect-w-4 aspect-h-3">
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600.webp"
              alt="Healthcare"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-semibold">HealthCare</h2>
            <p className="">
              Reliable healthcare services to meet your needs with expert professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Phome;
