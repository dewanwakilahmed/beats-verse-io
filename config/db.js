const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("BEATS VERSE IO Database has been successfully connected...");
  } catch (error) {
    console.log("ERROR: Could not connect to BEATS VERSE IO Database!");
    console.error(error.message);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
