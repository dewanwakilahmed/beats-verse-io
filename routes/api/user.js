const express = require("express");
const router = express.Router();

// @route    GET api/user
// @desc     Test Users Route
// @access   Public
router.get("/", (req, res) => res.send("Test User Route"));

module.exports = router;
