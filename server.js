const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to BEATS VERSE IO Database
connectDB();

app.get("/", (req, res) => res.send("BEATS VERSE IO API is running..."));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`BEATS VERSE IO server is running on port ${PORT}...`)
);
