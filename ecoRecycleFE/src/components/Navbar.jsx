import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./coponentCss/Navbar.css";

const Navbar = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo" onClick={() => handleNavigation("/")}>🌿 EcoRecycle</span>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {!user && (
          <>
            <span onClick={() => handleNavigation("/login")}>Login</span>
            <span onClick={() => handleNavigation("/register")}>Register</span>
          </>
        )}
        {user && user.role === 'user' && (
          <>
            <span onClick={() => handleNavigation("/user/dashboard")}>Dashboard</span>
            <span onClick={() => handleNavigation("/user/schedule")}>Schedule Pickup</span>
            <span onClick={() => handleNavigation("/user/requests")}>My Requests</span>
            <span onClick={() => handleNavigation("/logout")}>Logout</span>
          </>
        )}
        {user && user.role === 'vendor' && (
          <>
            <span onClick={() => handleNavigation("/vendor/dashboard")}>Dashboard</span>
            <span onClick={() => handleNavigation("/vendor/requests")}>Assigned Pickups</span>
            <span onClick={() => handleNavigation("/logout")}>Logout</span>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
