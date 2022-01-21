const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "genre",
  },
  guild: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "guild",
  },
  xp: {
    type: Number,
    default: 0,
  },
  rank: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "rank",
  },
  hp: {
    type: Number,
    default: 100,
  },
  gold: {
    type: Number,
    default: 50,
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
