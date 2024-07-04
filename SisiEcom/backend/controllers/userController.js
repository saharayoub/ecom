const axios = require('axios');
const businessCentralApi = require('../Services/businessCentralApi');

exports.createUser = async (req, res) => {
    try {
        // Appel à l'API Business Central pour créer un nouvel utilisateur
        const response = await businessCentralApi.post('/CustomerAuthentications', req.body);
        
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
