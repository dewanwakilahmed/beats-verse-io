const mongoose = require("mongoose");

const RankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  minXp: {
    type: Number,
    required: true,
  },
  maxXp: {
    type: Number,
    required: true,
  },
  maxHp: {
    type: Number,
    required: true,
  },
});

module.exports = Rank = mongoose.model("rank", RankSchema);
