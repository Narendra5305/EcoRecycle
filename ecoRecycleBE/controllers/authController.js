const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {UserModel} = require("../models/user.model");


require('dotenv').config();

const register = async (req, res) => {
    const { name, email, password, role, city, pincode } = req.body;
  
    try {
      
      const userExists = await UserModel.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      
      const hashed = await bcrypt.hash(password, 10);
  
      
      const user = new UserModel({
        name,
        email,
        password: hashed,
        role,
        city,
        pincode,
      });
  
      await user.save();
  
      
      res.status(201).json({ message: 'Registered successfully' });
  
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
  };
  
  
const login = async (req, res) => {
    const { email, password } = req.body;
  
    try {
     
      const user = await UserModel.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
  
      
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  
     
      res.status(200).json({
        token,
        user: { id: user._id, role: user.role, name: user.name, email: user.email }
      });
  
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Server error, please try again later.' });
    }
  };
  
module.exports ={register , login};
