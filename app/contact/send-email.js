import emailjs from 'emailjs-com';

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, date, time, messageBox } = req.body;

    const templateParams = {
      firstName,
      lastName,
      email,
      phoneNumber,
      date,
      time,
      messageBox,
    };

    try {
      // Send the email using EmailJS
      const response = await emailjs.send('service_mcmzjiq', 'template_1u9osbn', templateParams, {
        publicKey: 'StAA8K8n28xAZCT07',
      });

      console.log('SUCCESS!', response.status, response.text);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.log('FAILED...', error);
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}