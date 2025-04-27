const express = require('express');
const { searchVendors } = require('../controllers/vendorController');

const VendorRouter = express.Router();

VendorRouter.get('/search', searchVendors);


module.exports = {VendorRouter};
