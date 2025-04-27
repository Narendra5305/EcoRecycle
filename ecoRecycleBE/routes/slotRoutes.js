const express = require('express');
const {createSlot ,getAvailableSlots ,bookSlot} = require('../controllers/slotController');
const {auth}  = require('../middleware/authMiddleware');



const SlotRouter = express.Router();


SlotRouter.post('/create', auth , createSlot); 


SlotRouter.get('/available', getAvailableSlots);  


SlotRouter.post('/book/:id', auth, bookSlot);         


module.exports = {SlotRouter};
