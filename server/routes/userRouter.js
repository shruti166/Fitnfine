const express = require('express');
const User = require('../models/userSchema');
const userRouter = express.Router();


userRouter.post('/register', async(req, res) => {
    const { name, email, password } = req.body;
     
})

module.exports = userRouter