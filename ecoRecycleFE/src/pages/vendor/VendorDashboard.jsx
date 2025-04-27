

import React, { useState } from 'react';
import { useCreateSlotMutation, useGetAvailableSlotsQuery } from '../../services/api'; 
import './VendorDashboard.css'; 



const VendorDashboard = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    city: '',
    pincode: '',
  });

  const [createSlot] = useCreateSlotMutation();
  
  const { data: slots = [], refetch } = useGetAvailableSlotsQuery();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            await createSlot(formData).unwrap();

            console.log("working")

            alert('Slot created successfully!');
            setFormData({ date: '', time: '', city: '', pincode: '' });
            
            refetch(); // Refresh slots
            } catch (error) {
            console.error(error);
            alert('Failed to create slot');
        }
  };


  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Vendor Dashboard</h1>

      <div className="create-slot-container">
        <h2 className="section-title">Create Slot</h2>
        <form className="create-slot-form" onSubmit={handleSubmit}>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="form-input"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="City"
            onChange={handleChange}
            className="form-input"
          />
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            placeholder="Pincode"
            onChange={handleChange}
            className="form-input"
          />
          <button type="submit" className="submit-button">Create Slot</button>
        </form>
      </div>

      <div className="slots-container">
        <h2 className="section-title">Available Slots</h2>
        <table className="slots-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Vendor</th>
            </tr>
          </thead>
          <tbody>
            {slots.map((slot) => (
              <tr key={slot._id}>
                <td>{slot.date}</td>
                <td>{slot.time}</td>
                <td>{slot.city || '-'}</td>
                <td>{slot.pincode || '-'}</td>
                <td>{slot.vendor?.name || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default VendorDashboard ;