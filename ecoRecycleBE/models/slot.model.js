const mongoose = require('mongoose');


const slotSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  city: String,
  pincode: String,
  isBooked: { type: Boolean, default: false },
  bookedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
}, { timestamps: true });


const SlotModel = mongoose.model('Slot', slotSchema);


module.exports ={SlotModel} ;