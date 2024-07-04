const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNb: {
        type: String,
        required: true,
    },
});

UserSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, email: this.email }, process.env.JWTPRIVATEKEY, { expiresIn: "7d" });
    return token;
};

const User = mongoose.model('User', UserSchema);

const validate = (data) => {
    const Schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity({
            min: 8,
            max: 30,
            lowerCase: 1,
            upperCase: 1,
            numeric: 1,
            symbol: 1,
            requirementCount: 4
        }).required().label("Password"),
        address: Joi.string().required().label("Address"),
        phoneNb: Joi.string().required().label("Phone Number"),
    });
    return Schema.validate(data);
};

module.exports = { User, validate };
