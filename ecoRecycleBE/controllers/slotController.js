const {SlotModel}  = require('../models/slot.model');


const createSlot = async (req, res) => {
    const { date, time, city, pincode } = req.body;

    console.log("Received data:", req.body); 
    const slot = new SlotModel({
      vendor: req.user._id,
      date,
      time,
      city,
      pincode,
      isBooked: false,  
    });
    await slot.save();
    res.status(201).json(slot);
};



  
const getAvailableSlots = async (req, res) => {
    const { pincode, city } = req.query;
    const query = { isBooked: false }; 
    if (city) query.city = city; 
    if (pincode) query.pincode = pincode; 
  
    try {
      const slots = await SlotModel.find(query).populate('vendor', 'name email');
      res.status(200).json(slots);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving available slots', error: error.message });
    }
  };
  

const bookSlot = async (req, res) => {
    try {
      const slot = await SlotModel.findById(req.params.id); // Corrected to findById
      if (!slot || slot.isBooked) {
        return res.status(400).json({ message: 'Slot not available' });
      }
  
      slot.isBooked = true;
      slot.bookedBy = req.user._id; 
      await slot.save();
      res.status(200).json({ message: 'Booked successfully', slot });
    } catch (error) {
      res.status(500).json({ message: 'Error booking slot', error: error.message });
    }
  };
  


module.exports ={createSlot ,getAvailableSlots ,bookSlot} ;