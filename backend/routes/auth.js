const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');
const JWT_SECRET = 'medrecisanawsome$site';

// Route 1 : Create a user using: POST "/api/auth/createUser". doesnt require Auth
router.post('/createUser', [
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Password must be atleast 5 characters.').isLength({ min: 5 }),
   body('aadharNo', 'Enter valid Aadhar Number').isInt().isLength({ min: 12 }),
   body('phone', 'Enter valid Phone Number').isInt().isLength({ min: 10 }),
], async (req, res) => {
   let success = false;
   // If there are errors return bad req and the errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
   }
   try {
      // check whether the user with the same email exist already
      let user = await User.findOne({ email: req.body.email });
      if (user) {
         return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
      }

      const salt = await bcrypt.genSalt(10);
      const securePass = await bcrypt.hash(req.body.password, salt);

      // Create a new User
      user = await User.create({
         name: req.body.name,
         email: req.body.email,
         password: securePass,
         age: req.body.age,
         gender: req.body.gender,
         bloodGrp: req.body.bloodGrp,
         aadharNo: req.body.aadharNo,
         phone: req.body.phone,
      });

      const data = {
         user: {
            id: user.id
         }
      }
      const authToken = jwt.sign(data, JWT_SECRET);

      success = true;
      res.json({ success, authToken });

   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

// Route 2 :  Authenticate a user using: POST "/api/auth/login". require Auth
router.post('/login', [
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
   let success = false;
   // If there are errors return bad req and the errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   const { email, password } = req.body;
   try {
      let user = await User.findOne({ email });
      if (!user) {
         return res.status(400).json({ success, error: "Invalid Credentials" });
      }

      // compare password
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
         return res.status(400).json({ success, error: "Invalid Credentials" });
      }

      const data = {
         user: {
            id: user.id
         }
      }
      const authToken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authToken });

   } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }

})

// Route 3 :  Get loggedin user details using: POST "/api/auth/getUser". require Auth
router.post('/getUser', fetchUser , async (req, res) => {
   // If there are errors return bad req and the errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   try {
      const userID = req.user.id;
      const user = await User.findById(userID).select("-password");
      res.send(user)
   } catch (error) {
      console.error(err);
      res.status(500).send("Internal Server Error");
   }
})

module.exports = router;