const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB is Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed ❌', error.message);
  }
};

module.exports = {connectDB};
