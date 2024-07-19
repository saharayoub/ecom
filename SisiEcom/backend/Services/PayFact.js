// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const { PDFDocument } = require('pdf-lib');
// const nodemailer = require('nodemailer');
// const fs = require('fs').promises;
// const path = require('path');
// const { renderFile } = require('ejs'); // Assuming you use EJS for rendering

// const app = express();
// app.use(bodyParser.json());

// const API_URL = 'https://api.preprod.konnect.network/api/v2/payments/';
// const API_KEY = 'your_api_key_here'; // Replace with your actual API key

// // Endpoint to handle payment success webhook from Konnect
// app.post('/webhooks/payment-success', async (req, res) => {
//   try {
//     const paymentId = req.body.paymentId;

//     // Check payment status
//     const paymentSuccessful = await checkPayment(paymentId);

//     if (paymentSuccessful) {
//       // Fetch payment details (assuming you have a method to fetch payment details)
//       const paymentDetails = await fetchPaymentDetails(paymentId);

//       // Generate invoice PDF
//       const pdfBytes = await generateInvoicePDF(paymentDetails);

//       // Send invoice via email
//       await sendInvoiceEmail(paymentDetails.user.email, pdfBytes);

//       res.status(200).send('Invoice sent successfully');
//     } else {
//       res.status(400).send('Payment not successful');
//     }
//   } catch (error) {
//     console.error('Error processing payment success webhook:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Function to check payment status using Konnect API
// const checkPayment = async (paymentId) => {
//   try {
//     const response = await axios.get(`${API_URL}${paymentId}`, {
//       headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': API_KEY,
//       },
//     });

//     const data = response.data;
//     return data.payment.successfulTransactions === 1;
//   } catch (error) {
//     console.error('Error checking payment:', error);
//     return false;
//   }
// };

// // Function to fetch payment details (mock implementation)
// const fetchPaymentDetails = async (paymentId) => {
//   // Implement logic to fetch payment details from your database or API
//   // For example:
//   return {
//     id: paymentId,
//     amount: 100, // Example amount
//     user: {
//       firstName: 'John',
//       lastName: 'Doe',
//       email: 'john.doe@example.com',
//     },
//     // Add other payment details as needed
//   };
// };

// // Function to generate invoice PDF using pdf-lib
// const generateInvoicePDF = async (paymentDetails) => {
//   try {
//     const pdfDoc = await PDFDocument.create();
//     const page = pdfDoc.addPage();
//     const { width, height } = page.getSize();

//     // Example content
//     page.drawText(`Invoice for Payment ID: ${paymentDetails.id}`, {
//       x: 50,
//       y: height - 50,
//       size: 24,
//     });

//     // Example: Embedding image in PDF (replace with your logo)
//     const imagePath = path.resolve(__dirname, 'path/to/your/logo.png');
//     const imageBytes = await fs.readFile(imagePath);
//     const logoImage = await pdfDoc.embedPng(imageBytes);
//     page.drawImage(logoImage, {
//       x: 50,
//       y: height - 100,
//       width: 100,
//       height: 50,
//     });

//     const pdfBytes = await pdfDoc.save();

//     return pdfBytes;
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     throw error;
//   }
// };

// // Function to send invoice email using Nodemailer
// const sendInvoiceEmail = async (recipientEmail, pdfBytes) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'your_email@gmail.com', // Replace with your email
//         pass: 'your_password', // Replace with your password
//       },
//     });

//     const mailOptions = {
//       from: 'your_email@gmail.com',
//       to: recipientEmail,
//       subject: 'Invoice for Your Payment',
//       text: 'Please find your invoice attached.',
//       attachments: [
//         {
//           filename: 'invoice.pdf',
//           content: pdfBytes,
//           encoding: 'base64',
//         },
//       ],
//     };

//     await transporter.sendMail(mailOptions);
//     console.log('Invoice email sent successfully');
//   } catch (error) {
//     console.error('Error sending invoice email:', error);
//     throw error;
//   }
// };

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
