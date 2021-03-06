const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to BEATS VERSE IO Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false })); // Request & Body Validation

app.get("/", (req, res) => res.send("BEATS VERSE IO API is running..."));

// Define Routes
app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`BEATS VERSE IO server is running on port ${PORT}...`)
);
