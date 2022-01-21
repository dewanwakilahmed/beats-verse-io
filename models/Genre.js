const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = Genre = mongoose.model("genre", GenreSchema);
