// recaptcha.js
import axios from 'axios';

const RECAPTCHA_SECRET_KEY = '6LffsPEpAAAAAPBCnAc057wACuxCx60_5jWmRzVC';

export async function verifyRecaptcha(recaptchaResponse) {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`
    );
    return response.data.success;
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return false;
  }
}