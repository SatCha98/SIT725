// src/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('✅ MongoDB Connected!');
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});

// Sample Route
app.get('/', (req, res) => {
    res.send('👋 Hello from the server!');
});

// Routes (Example)
const itemRoutes = require('./routes/itemRoutes'); // adjust path if needed
app.use('/api/items', itemRoutes);
