'use strict';

const express = require('express');
const router = express.Router();

// POST route for user signup
router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Handle user signup logic here
    // For example, save the user info to the database
    res.status(201).send({ message: 'User signed up successfully!' });
});

// POST route for user login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Handle user login logic here
    // For example, check credentials and return a token
    res.status(200).send({ message: 'User logged in successfully!' });
});

module.exports = router;
