const express = require("express");
const router = express.Router();

// @route    GET api/users
// @desc     Test Users Route
// @access   Public
router.get("/", (req, res) => res.send("Test Users Route"));

module.exports = router;
