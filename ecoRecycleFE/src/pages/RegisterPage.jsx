// Register.js
import React, { useState } from 'react';
import { useRegisterMutation } from '../services/api';
import { useNavigate } from 'react-router-dom';

import './pageCss/register.css'; 

const Register = () => {
    const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.role || !formData.pincode) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      await register(formData).unwrap();
      navigate('/login'); // Redirect to login page after successful registration
      alert('Registration successful!');
      
    } catch (err) {
      console.error('Registration error:', err);
      alert('Error during registration');
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input className="form-input" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input className="form-input" type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
      <input className="form-input" type="password" name="password" placeholder="Password *" value={formData.password} onChange={handleChange} required />
      
      <select className="form-select" name="role" value={formData.role} onChange={handleChange} required>
        <option value="">Select Role *</option>
        <option value="user">User</option>
        <option value="vendor">Vendor</option>
      </select>

      <input className="form-input" type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input className="form-input" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <input className="form-input" type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} />
      <input className="form-input" type="text" name="pincode" placeholder="Pincode *" value={formData.pincode} onChange={handleChange} required />

      <button className="submit-btn" type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>

      {error && <p className="error-text">Error: {error?.data?.message || error.message}</p>}
    </form>
  );
};

export default Register;
