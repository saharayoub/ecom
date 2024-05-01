// controllers/userController.js
const User = require('../models/User');

const userController = {
    createUser: async (req, res) => {
        try {
            const { firstName, lastName, email, password, address, isAdmin, phoneNb } = req.body;
            const newUser = new User({
                firstName,
                lastName,
                email,
                password,
                address,
                isAdmin,
                phoneNb
            });
            await newUser.save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { firstName, lastName, email, password, address, isAdmin, phoneNb } = req.body;
            const user = await User.findByIdAndUpdate(req.params.id, {
                firstName,
                lastName,
                email,
                password,
                address,
                isAdmin,
                phoneNb
            }, { new: true });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json({ message: "User deleted" });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = userController;
