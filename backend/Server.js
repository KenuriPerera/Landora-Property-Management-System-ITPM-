// Load environment variables FIRST
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PropertyRoutes = require('./Routes/PropertyRoutes');

const app = express();

// Debugging: check if env vars are loading
console.log("✅ Loaded Mongo URI:", process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());
app.use('/api/property', PropertyRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to Landora Backend API');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
