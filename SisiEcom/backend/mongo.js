const mongoose = require("mongoose");

const atlasURI = "mongodb+srv://<saharayoub156>:<d8wszmTzt0rHQSMP>@<cluster-url>/<dbname>?retryWrites=true&w=majority";

mongoose.connect(atlasURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("Could not connect to MongoDB Atlas", err));

const newSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
});


const User = mongoose.model("User", newSchema);

module.exports = User;
