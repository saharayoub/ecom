// app.js
const express = require('express');
const connectDB = require('./config/connection');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/users', userRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
