// const nodemailer=require('nodemailer')



const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,// Enter your Gmail email address
        pass: process.env.PASSWORD// Enter your Gmail password
    }
});

// Define email options
let mailOptions = {
    from: process.env.EMAIL,// Sender address
    to: 'judeclement71@gmail.com', // Receiver address
    subject: 'Hello from Node.js!', // Subject line
    text: 'This is a test email sent from Node.js using nodemailer.' // Plain text body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent successfully:', info.response);
});
