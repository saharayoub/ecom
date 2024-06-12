const mongoose = require('mongoose');

const dbConfig = {
    user: 'Saharayoub',
    password: 'sahar123',
    host: 'luxe.gv17j5k.mongodb.net',
    database: 'Luxe',
    url: "mongodb://0.0.0.0:27017/Luxe"
};

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}/${dbConfig.database}`);
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
