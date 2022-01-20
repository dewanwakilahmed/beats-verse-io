const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`BEATS VERSE IO server is running on port ${PORT}...`)
);
