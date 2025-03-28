const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to save contact
router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        await newContact.save();
        res.status(201).json({ message: 'Contact saved successfully', data: newContact });

    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;
