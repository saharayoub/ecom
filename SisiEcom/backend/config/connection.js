const mongoose = require('mongoose');

const dbURI = "mongodb://localhost:27017/user";  // Update this line with your connection string.

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error("Database connection error:", err);
        process.exit(1);  // Exit process with failure
    }
};

module.exports = connectDB;
