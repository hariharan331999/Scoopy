require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import Routes
const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('Backend is running...');
});

// Server Listener
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const app = require('./server');

// Export the server handler for Vercel
module.exports = app;