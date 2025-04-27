import React, { useState, useEffect , useContext } from 'react';
import './coponentCss/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const AppNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setRole(parsedUser.role);
    }
  });


  const handleLogout = () => {
    localStorage.clear();
    setRole(null);
    navigate('/');
  };

  const renderLinks = () => {
    switch (role) {
      case 'user':
        return (
          <>
            <li><Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
            <li><Link to="/schedule" onClick={() => setMenuOpen(false)}>Schedule Pickup</Link></li>
            <li><Link to="/history" onClick={() => setMenuOpen(false)}>Pickup History</Link></li>
            <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        );
      case 'vendor':
        return (
          <>
            <li><Link to="/vendor/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
            <li><Link to="/requests" onClick={() => setMenuOpen(false)}>Pickup Requests</Link></li>
            <li><Link to="/routes" onClick={() => setMenuOpen(false)}>Manage Routes</Link></li>
            <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
            <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
          </>
        );
      default:
        return (
          <>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link></li>
            <li><Link to="/ForVendors" onClick={() => setMenuOpen(false)}>For Vendors</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login / Register</Link></li>
          </>
        );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">🌿EcoRecycle</Link>
      </div>

      <ul className={`navbar__links ${menuOpen ? 'active' : ''}`}>
        {renderLinks()}
      </ul>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default AppNavbar;
