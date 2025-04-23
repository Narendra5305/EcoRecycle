const {UserModel} = require('../models/user.model');

const searchVendors = async (req, res) => {
    const { city, pincode } = req.query;
    try {
      const query = { role: 'vendor' };
      if (city) query.city = city;
      if (pincode) query.pincode = pincode;
  
      const vendors = await UserModel.find(query).select('-password');
      res.status(200).json(vendors);
      
    } catch (error) {
      res.status(500).json({ error: "There has been an error in searchVendors", message: error.message });
    }
  };
  
module.exports ={searchVendors} ;
