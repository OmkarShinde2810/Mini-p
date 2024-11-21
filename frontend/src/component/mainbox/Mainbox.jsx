import React from "react";
import { Link } from "react-router-dom";

function Mainbox() {
  return (
    <>
      {/* Select dropdown at the top */}
     

      {/* Cards for services */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {/* Home Services */}
        <button
          onClick={() =>
            document.getElementById("modal_home_services").showModal()
          }
        >
          <div className="card bg-base-100 w-80 shadow-xl hover:shadow-2xl transition-all">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/professional-cleaning-service-team-duties-accessories-flat-composition-with-man-woman-uniform-sweeping-floor-illustration_1284-29299.jpg?ga=GA1.2.2089504932.1727368319&semt=ais_hybrid"
                alt="Home Services"
                className="rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Home Services
                {/* <div className="badge badge-secondary ml-2"></div> */}
              </h2>
              <p>
                Discover premium home services for cleaning, repairs, and more.
              </p>
            </div>
          </div>
        </button>

        {/* Personal Care */}
        <button
          onClick={() =>
            document.getElementById("modal_personal_care").showModal()
          }
        >
          <div className="card bg-base-100 w-80 shadow-xl hover:shadow-2xl transition-all">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/beautician-concept-illustration_114360-23962.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                alt="Personal Care"
                className="rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Personal Care
                {/* <div className="badge badge-accent ml-2">POPULAR</div> */}
              </h2>
              <p>
                Take care of yourself with top-notch personal care services.
              </p>
            </div>
          </div>
        </button>

        {/* Healthcare */}
        <button
          onClick={() =>
            document.getElementById("modal_healthcare").showModal()
          }
        >
          <div className="card bg-base-100 w-80 shadow-xl hover:shadow-2xl transition-all">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/doctor-concept-illustration_114360-1072.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                alt="Healthcare"
                className="rounded-t-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">
                Healthcare
                {/* <div className="badge badge-primary ml-2">TRENDING</div> */}
              </h2>
              <p>Access the best healthcare services and medical facilities.</p>
            </div>
          </div>
        </button>
      </div>

      {/* Modals */}
      {/* Home Services Modal */}
      <dialog id="modal_home_services" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-lg mb-4">Home Services</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link to="plumber" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/premium-vector/plumbing-service-concept_108855-6244.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Plumber</p>
              </div>
            </Link>
            <Link to="carpenter" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-vector/woodworker-concept-illustration_114360-2773.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Carpenter</p>
              </div>
            </Link>
            <Link to="painter" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/premium-vector/painter-man-painting-house-wall-with-roller-brush-worker-guy-using-paintroller-paint-cans_625536-153.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Painter</p>
              </div>
            </Link>
            <Link to="electrician" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-vector/electrician-concept-illustration_114360-2781.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Electrician</p>
              </div>
            </Link>
          </div>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() =>
                document.getElementById("modal_home_services").close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      {/* Personal Care Modal */}
      <dialog id="modal_personal_care" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-lg mb-4">Personal Care</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <Link to="massage" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/premium-vector/massage-spa-woman-having-massage_1363545-113.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Massage</p>
              </div>
            </Link>

            <Link to="parlour" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-vector/hairdresser-team-concept-illustration_114360-10901.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Parlour</p>
              </div>
            </Link>
            <Link to="saloon" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-vector/barbershop-team-concept-illustration_114360-10892.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Saloon</p>
              </div>
            </Link>
          </div>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() =>
                document.getElementById("modal_personal_care").close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>

      {/* Healthcare Modal */}
      <dialog id="modal_healthcare" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-lg mb-4">Healthcare</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <Link to="derma" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/premium-vector/girl-with-cosmetic-eye-patches_575838-509.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Derma</p>
              </div>
            </Link>
            <Link to="cardiac" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/free-vector/hypertension-abstract-concept_335657-3220.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Cardiac</p>
              </div>
            </Link>
            <Link to="diabeties" target="_blank" rel="noopener noreferrer">
              <div className="text-center">
                <img
                  src="https://img.freepik.com/premium-vector/cartoon-concept-with-diabetes-treatment-woman-suffering-from-dizziness_1284-53870.jpg?ga=GA1.1.2089504932.1727368319&semt=ais_hybrid"
                  alt="Plumber"
                  className="rounded-lg w-full"
                />
                <p>Diabeties</p>
              </div>
            </Link>
            
          </div>
          <div className="modal-action">
            <button
              className="btn"
              onClick={() =>
                document.getElementById("modal_healthcare").close()
              }
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Mainbox;
