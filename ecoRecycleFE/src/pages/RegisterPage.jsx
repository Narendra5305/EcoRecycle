// Register.js
import React, { useState } from 'react';
import { useRegisterMutation } from '../services/api';

const Register = () => {
  const [register, { isLoading, error }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
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
    try {
      await register(formData);
      alert('Registration successful');
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <input type="text" name="role" placeholder="Role" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <input type="text" name="pincode" placeholder="Pincode" onChange={handleChange} />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default Register;
