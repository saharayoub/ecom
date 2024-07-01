// userController.js

const router = require('../routes/userRoutes');
const businessCentralApi = require('../Services/businessCentralApi');
exports.createUserInBC = async (req, res) => {
    try {
        // Données du nouvel utilisateur provenant de la requête
        const userData = {
            Id: req.body.Id || '',
            Name: req.body.Name || '',
            LastName: req.body.LastName || '',
            Email: req.body.Email || '',
            Address: req.body.Address || '',
            PhoneNumber: req.body.PhoneNumber || '',
            Password: req.body.Password || ''
        };

        // Validation basique des données (vous pouvez ajouter plus de validation si nécessaire)
        if (!userData.Name || !userData.LastName || !userData.Email || !userData.Password) {
            return res.status(400).send('Missing required fields');
        }

        // Appel à l'API Business Central pour créer un nouvel utilisateur
        const response = await businessCentralApi.post('/companies(979b39de-9861-ee11-8df6-6045bdac9c29)/CustomerAuthentications', userData);

        // Réponse de l'API Business Central
        res.json(response.data);
    } catch (error) {
        console.error('Error creating user:', error);

        // Inclure plus de détails sur l'erreur dans la réponse pour aider au débogage
        res.status(500).send({ message: 'Error creating user', error: error.message });
    }
};

