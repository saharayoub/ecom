const userController = require('../controllers/userController');

exports.createUser = async (req, res) => {
    try {
        await userController.createUser(req, res);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('An error occurred while creating user');
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
