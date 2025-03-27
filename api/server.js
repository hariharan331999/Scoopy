require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "your-fallback-uri";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,   // 5 seconds timeout for DB server selection
    socketTimeoutMS: 45000,           // 45 seconds socket inactivity timeout
    keepAlive: true,                  // Keep connection alive
    maxPoolSize: 10                    // Use connection pooling
};

// Cache the connection
let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        console.log('✅ Using existing MongoDB connection');
        return;
    }

    try {
        await mongoose.connect(MONGO_URI, options);
        isConnected = true;
        console.log('✅ MongoDB Connected');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error);
    }
};

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Connection Error:', err));

// Define Contact Schema
const ContactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

// Explicitly specify 'contacts' collection inside 'test' database
const Contact = mongoose.model('Contact', ContactSchema, 'contacts');

// API Endpoint
app.post('/api/contact', async (req, res) => {
    try {
        console.log("Received data:", req.body);

        const { first_name, last_name, email, phone_number, message } = req.body;

        if (!first_name || !last_name || !email || !phone_number || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newContact = new Contact({
            firstName: first_name,
            lastName: last_name,
            email: email,
            phone: phone_number,
            message: message
        });

        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ error: 'Failed to save message' });
    }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
connectDB();