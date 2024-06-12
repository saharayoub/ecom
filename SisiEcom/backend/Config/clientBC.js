// clientBC.js
const axios = require('axios');

const bcApi = axios.create({
    baseURL: 'http://localhost:7248/BC230/api/publisherName/apiGroup/v2.0/companies(979b39de-9861-ee11-8df6-6045bdac9c29)',
    headers: {
        'Content-Type': 'application/json',
    },
});

module.exports = bcApi;
