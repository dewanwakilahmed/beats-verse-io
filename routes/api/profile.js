const express = require("express");
const router = express.Router();

// @route    GET api/profile
// @desc     Test Profile Route
// @access   Public
router.get("/", (req, res) => res.send("Test Profile Route"));

module.exports = router;
