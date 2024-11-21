import React from "react";
import Singup from "./component/signup/Singup";
import Plogin from "./component/login/Plogin";
import Psingup from "./component/signup/Psingup";
import Userlogin from "./component/login/Userlogin";
import Userhome from "./component/landingpage/Userhome";
import Phome from "./component/landingpage/Phome";
import Dasboard from "./component/dashboard/Dasboard";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Mainbox from "./component/mainbox/Mainbox";
import Navbar from "./component/navbar/Navbar";
import Cardiac from "./component/services/healthcare/cardiac/Cardiac";
import Derma from "./component/services/healthcare/derma/Derma";
import Diabeties from "./component/services/healthcare/diabeties/Diabeties";
import Carpenter from "./component/services/home/carpenter/Carpenter";
import Electrician from "./component/services/home/electrician/Electrician";
import Plumber from "./component/services/home/plumber/Plumber";
import Massage from "./component/services/personalcare/massage/Massage";
import Parlour from "./component/services/personalcare/parlour/Parlour";
import Saloon from "./component/services/personalcare/saloon/Saloon";
import Painter from "./component/services/home/painter/Painter";
import Booking from "./component/booking/Booking";
import Porder from "./component/professional/Porder";
import Pmainpage from "./component/professional/pmainpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Routes with Navbar */}
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route path="/" element={<Mainbox />} />
            <Route path="/cardiac" element={<Cardiac />} />
            <Route path="/derma" element={<Derma />} />
            <Route path="/diabeties" element={<Diabeties />} />
            <Route path="/carpenter" element={<Carpenter />} />
            <Route path="/electrician" element={<Electrician />} />
            <Route path="/painter" element={<Painter />} />
            <Route path="/plumber" element={<Plumber />} />
            <Route path="/massage" element={<Massage />} />
            <Route path="/parlour" element={<Parlour />} />
            <Route path="/saloon" element={<Saloon />} />
            <Route path="/booking" element={<Booking />} />
          </Route>

          {/* Routes without Navbar */}
          <Route path="/userhome" element={<Userhome />} />
          <Route path="/porder" element={<Porder />} />
          <Route path="/pmainpage" element={<Pmainpage />} />
          <Route path="/phome" element={<Phome />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/plogin" element={<Plogin />} />
          <Route path="/psingup" element={<Psingup />} />
          <Route path="/userlogin" element={<Userlogin />} />

          <Route path="*" element={<Navigate to="/userhome" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
