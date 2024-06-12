const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/connection');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.use(express.json());

// Connect to MongoDB Atlas
connectDB()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Connection to MongoDB failed:', error.message);
        process.exit(1);
    });

// Use user routes
app.use('/api/users', userRoutes);

// Handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('An error occurred:', err.message);
    res.status(500).send('An error occurred');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
