const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'vendor'], required: true },
  phone: String,
  address: String,
  city: String,
  pincode: { type: String, required: true },
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

module.exports ={UserModel};