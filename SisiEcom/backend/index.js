// app.js
const express = require('express');
const connectDB = require('./config/connection');
const userRoutes = require('./routes/userRoutes');

const app = express();


connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/users', userRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
