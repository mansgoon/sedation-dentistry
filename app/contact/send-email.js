import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, date, time, messageBox } = req.body;

    // Create a transporter using your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com',
      port: 587,
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: 'your-email@example.com',
        to: 'your-company-email@example.com',
        subject: 'New Contact Form Submission',
        text: `
          First Name: ${firstName}
          Last Name: ${lastName}
          Email: ${email}
          Phone Number: ${phoneNumber}
          Date: ${date}
          Time: ${time}
          Message: ${messageBox}
        `,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}