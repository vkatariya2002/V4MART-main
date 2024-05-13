// Install Nodemailer
// npm install nodemailer

const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vipul.j.brudite@gmail.com',
    pass: 'wlgtypzmadhrywuj'
  }
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: 'vipul.j.brudite@gmail.com',
      to: to,
      subject: subject,
      text: text
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendEmail };
