const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require("../../models/User");

// @route    POST api/user/register
// @desc     Register User
// @access   Public
router.post(
  "/register",
  [
    check("name", "Name is required!").not().isEmpty(),
    check("email", "Email is required!").isEmail(),
    check(
      "password",
      "Password should contain at least 8 characters!"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    // Validation Check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if User already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists!" });
      }

      // Fetch User's Gravatar from Email
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });

      // Create New User Instance
      user = new User({ name, email, avatar, password });

      // Encrypt Password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save New User Instance
      await user.save();

      // Return JWT

      res.send("User Registered Successfully!");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error!");
    }

    res.send("Register User Route");
  }
);

module.exports = router;
