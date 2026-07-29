import nodemailer from 'nodemailer';
import env from '../config/env.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: env.EMAIL_USER, pass: env.EMAIL_PASS },
});

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const mailOptions = {
      from: env.EMAIL_USER,
      to: env.EMAIL_TO,
      subject: `New Contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td><td style="padding: 10px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 10px; border: 1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 10px; border: 1px solid #ddd;">${phone || 'N/A'}</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 10px; border: 1px solid #ddd;">${message}</td></tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
  }
};

export const getContacts = async (req, res) => {
  res.json({ success: true, data: [] });
};
