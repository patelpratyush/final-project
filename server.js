const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./utils/errorHandler');

require('dotenv').config();
connectDB();

const app = express();

const PORT = process.env.PORT || 5002;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please use a different port.`);
    } else {
        console.error('Server error:', err);
    }
    process.exit(1); // Exit the application in case of error
});
