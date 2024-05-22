import axios from 'axios';

const API_URL = 'https://api.preprod.konnect.network/api/v2/payments/';
const API_KEY = '66452513ce4231596230c6db:nk4bYqz7rgiYvDcOiGu8v5o9j8NTM22l';

export const checkPayment = async (paymentId) => {
    try {
        const response = await axios.get(`${API_URL}${paymentId}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
        });

        const data = response.data; // Convert JSON to object
        return data.payment.successfulTransactions === 1;
    } catch (error) {
        console.error('Error checking payment:', error);
        return false;
    }
};

export const initPayment = async (payment) => {
    try {
        const response = await axios.post(`${API_URL}init-payment`, buildJsonPayload(payment), {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
            },
        });

        const data = response.data;
        return {
            payUrl: data.payUrl || '',
            paymentId: data.paymentRef || '',
        };
    } catch (error) {
        console.error('Error initializing payment:', error);
        return null;
    }
};

const buildJsonPayload = (payment) => {
    return {
        receiverWalletId: '66452513ce4231596230c6e2',
        token: 'TND',
        amount: payment.amount * 1000,
        description: `Payment for ${payment.status}`,
        acceptedPaymentMethods: ['wallet', 'bank_card'],
        firstName : payment.user.firstName,
        lastName: payment.user.lastName,
        email: payment.user.email,
        orderId: payment.id,
        successUrl: window.location.origin + '/payment-success',
        failUrl: window.location.origin + '/payment-fail',
    };
};
