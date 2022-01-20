const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to BEATS VERSE IO Database
connectDB();

app.get("/", (req, res) => res.send("BEATS VERSE IO API is running..."));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`BEATS VERSE IO server is running on port ${PORT}...`)
);
