const axios = require('axios');

// Replace these variables with your actual values
const tenantId = 'Default';
const clientId = '04660385-5d8a-4c66-9db0-2a651711f460';
const clientSecret = '';
const bcApiUrl = 'http://localhost:7248/BC230/api/publisherName/apiGroup/v2.0';
const companyId = 'CRONUS France S.A.';
const accessToken = '';

// Function to create a customer
// async function createCustomer() {
//     try {
//         // Define the customer data
//         const customerData = {
//             displayName: "John Doe",
//             address: {
//                 street: "123 Elm St",
//                 city: "Somewhere",
//                 state: "NY",
//                 country: "US",
//                 postalCode: "12345"
//             },
//             phoneNumber: "123-456-7890",
//             email: "johndoe@example.com"
//         };

//         // Make the POST request to create a customer
//         const response = await axios.post(
//             {bcApiUrl}/({companyId})/customers,
//             customerData,
//             {
//                 headers: {
//                     //Authorization: Bearer{accessToken},
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );

//         // Log the response data
//         console.log('Customer created successfully:', response.data);
//     } catch (error) {
//         console.error('Error creating customer:', error.response ? error.response.data : error.message);
//     }
// }
async function componentDidMount() {
    // POST request using fetch with async/await
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "Id": "01121217",
            "Name": "tt",
            "LastName": "tt",
            "Email": "te@gmail.com",
            "Address": "612 South Sunset Drive",
            "PhoneNumber": "50322451",
            "Password": "ttt" })
    };
    const response = await fetch('http://localhost:7248/BC230/api/publisherName/apiGroup/v2.0/companies(979b39de-9861-ee11-8df6-6045bdac9c29)/CustomerAuthentications', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
}


