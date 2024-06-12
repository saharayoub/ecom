const axios = require('axios');

exports.createUser = async (req, res) => {
    try {
        // Appel à l'API Business Central pour créer un nouvel utilisateur
        const response = await axios.post('http://localhost:7248/BC230/api/publisherName/apiGroup/v2.0/companies(979b39de-9861-ee11-8df6-6045bdac9c29)/CustomerAuthentications', req.body);
        
        // Réponse de l'API Business Central
        res.json(response.data);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Error creating user');
    }
};

exports.loginUser = async (req, res) => {
    try {
        res.send('Login successful');
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send('Error logging in user');
    }
};
