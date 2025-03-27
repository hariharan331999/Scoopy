import mongoose from 'mongoose';

// MongoDB Connection (Singleton)
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log('MongoDB already connected');
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        throw new Error('MongoDB connection failed');
    }
};

// MongoDB Schema
const ContactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default async function handler(req, res) {
    // ✅ CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { first_name, last_name, email, phone_number, message } = req.body;

        if (!first_name || !last_name || !email || !phone_number || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        try {
            // ✅ Use Singleton MongoDB Connection
            await connectDB();

            const newContact = new Contact({
                firstName: first_name,
                lastName: last_name,
                email: email,
                phone: phone_number,
                message: message
            });

            await newContact.save();
            res.status(201).json({ message: 'Message saved successfully!' });

        } catch (error) {
            console.error("Error saving contact:", error);
            res.status(500).json({ error: 'Failed to save message', details: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
