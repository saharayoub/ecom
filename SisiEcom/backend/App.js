const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/connection');
const userRoutes = require('./routes/userRoutes');
const businessCentralApi = require('./Services/businessCentralApi');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/create-user', async (req, res) => {
    try {
        const userData = req.body;
        await createUser(userData);
        res.status(201).send('Utilisateur créé et intégré avec succès');
    } catch (err) {
        console.error('Erreur lors de la création de l\'utilisateur:', err);
        res.status(500).send('Erreur lors de la création de l\'utilisateur');
    }
});

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
