'use strict';

const express = require('express');
const router = express.Router();

// Sample data for products
let products = [];

// GET route for fetching all products
router.get('/', (req, res) => {
    res.json(products);
});

// POST route for adding a new product
router.post('/', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

module.exports = router;
