
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/user/Dashboard";
import SchedulePickup from "./pages/user/SchedulePickup";
import UserRequests from "./pages/user/UserRequests" ;
import VendorDashboard from "./pages/vendor/VendorDashboard"
import VendorRequests from "./pages/vendor/PickupRequests";
import Logout from "./pages/logout";
import Login from "./pages/LoginPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import HowItWorks from "./pages/HowItsWorks";
import ForVendors from "./pages/forVendors";



function App() {
  const user = JSON.parse(localStorage.getItem("user")); 

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/how-it-works" element={< HowItWorks/>} />
        <Route path="/forVendors" element={<ForVendors />} />

        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/schedule" element={<SchedulePickup />} />
        <Route path="/user/requests" element={<UserRequests />} />


        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/requests" element={<VendorRequests />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>

      <Footer/>

    </Router>
  );
}

export default App;
