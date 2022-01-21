const mongoose = require("mongoose");

const GuildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

module.exports = Guild = mongoose.model("guild", GuildSchema);
