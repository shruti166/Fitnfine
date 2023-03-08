const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userSchema");
const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();
const { Router } = require("express");
const userRouter = express.Router();

// @route  GET users/register
// @desc   Get all users
// @access Public
userRouter.post("/register", async (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});


// @route  GET users/login
// @desc   LogIn user
// @access Public
userRouter.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //Find user by email

    User.findOne({email})
    .then(user => {
      
        //Check for user

        if(!user) {
            return res.status(404).json({email: 'User not found'});
        }

        //Check Password

        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(isMatch) {
                //User matched

                const payload = {id: user.id, name: user.name}

                //Sign token
                jwt.sign(
                    payload, process.env.secretKey, { expiresIn: 3600 }, (err, token)=> {
                        res.json({
                            success: true,
                            token: token
                        })
                });
            } else {
                return res.status(400).json({password: 'Password incorrect'})
            }
        })
    })
})

module.exports = userRouter;
