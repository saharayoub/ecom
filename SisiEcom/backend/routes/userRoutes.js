const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const axios = require('axios');

// Configurer le transporteur Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Enregistrer l'utilisateur
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password, address, phoneNb } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword, address, phoneNb });

        await newUser.save();

        // Envoyer un email de confirmation après l'inscription
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Welcome to Our Platform',
            text: `Hello ${firstName},\n\nThank you for registering on our platform. We are glad to have you!\n\nBest regards,\nTeam`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        // Envoyer les données utilisateur à Business Central
        const bcResponse = await axios.post(
            `${process.env.BC_URL}/companies(${process.env.BC_COMPANY_ID})/CustomerAuthentications`,
            {
                firstName,
                lastName,
                email,
                address,
                phoneNb
            },
            {
                auth: {
                    username: process.env.BC_USERNAME,
                    password: process.env.BC_PASSWORD
                }
            }
        );

        console.log('Business Central response:', bcResponse.data);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Connecter l'utilisateur
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
