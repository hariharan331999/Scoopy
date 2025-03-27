const mongoose = require('mongoose');

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
    // ✅ Add CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        // Preflight request handling
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { first_name, last_name, email, phone_number, message } = req.body;

        if (!first_name || !last_name || !email || !phone_number || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        try {
            if (!mongoose.connection.readyState) {
                await mongoose.connect(process.env.MONGO_URI, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                });
            }

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
            console.error("Error:", error);
            res.status(500).json({ error: 'Failed to save message' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
