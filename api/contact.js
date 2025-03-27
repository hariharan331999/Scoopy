import mongoose from 'mongoose';

// ✅ MongoDB Connection Singleton
const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log('✅ MongoDB already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,    // Timeout after 5 seconds
        });
        console.log('✅ MongoDB Connected');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        throw new Error('MongoDB connection failed');
    }
};

// ✅ MongoDB Schema
const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, message } = req.body;

        if (!firstName || !lastName || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        try {
            // ✅ Use Singleton MongoDB Connection
            await connectDB();

            const newContact = new Contact({
                firstName,
                lastName,
                email,
                phone,
                message
            });

            await newContact.save();
            res.status(201).json({ message: 'Message saved successfully!' });

        } catch (error) {
            console.error("❌ Error saving contact:", error);
            res.status(500).json({ error: 'Failed to save message', details: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
