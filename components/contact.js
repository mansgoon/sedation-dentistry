'use client'
import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays, isAfter, isBefore, isToday, isWeekend } from 'date-fns';
import { useState } from 'react';
import 'react-time-picker/dist/TimePicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faFileMedical, faMaskVentilator } from '@fortawesome/free-solid-svg-icons';
import { Map } from '@/components/map.js';
import emailjs from 'emailjs-com';
import ToastDemo from '@/components/ui/Toast.jsx';
import ReCAPTCHA from 'react-google-recaptcha';
import CustomTimePicker from "./CustomTimePicker";
import { format } from 'date-fns';

function ContactSection() {
  return (
    <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px] animate-fade-in animation-delay-1">
      <h2 className="box-border relative shrink-0 mt-5 h-auto text-7xl font-extrabold text-center text-[#282828]">
        Get in Touch
      </h2>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b91c111f1d616b6fc334635a034ddcffabcc5a879a025724c72710e5a216d0c0?apiKey=ea3aca9057654e45a61207978509cdea&"
        className="aspect-[33.33] fill-slate-400 w-[400px] mx-auto max-sm:w-[240px]"
      />
      <p className="box-border relative shrink-0 mx-auto mt-5 h-auto font-light text-zinc-400 max-sm:mx-auto max-sm:text-sm max-sm:text-center">
        Fill out the following forms before your first appointment
      </p>
      <div className="flex justify-center space-x-4 mt-8">
        <a
          href="https://sedationdentistry.ca/wp-content/uploads/2014/05/medhistoryform.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-48 px-6 py-3 border-2 border-[#5BA3BB] rounded-lg text-[#5BA3BB] hover:bg-[#5BA3BB] hover:text-white transition-colors hover:scale-105 transition-transform duration-200 button-border-gradient"
        >
          <FontAwesomeIcon icon={faFileMedical} className="mr-2" />
          <span className="text-center">Patient History</span>
        </a>
        <a
          href="https://sedationdentistry.ca/wp-content/uploads/2020/07/20191118-SurgiServices-AnaesQuestionnaire-2019_fill-v2_new.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-48 px-6 py-3 border-2 border-[#5BA3BB] rounded-lg text-[#5BA3BB] hover:bg-[#5BA3BB] hover:text-white transition-colors hover:scale-105 transition-transform duration-200 border-gradient"
        >
          <FontAwesomeIcon icon={faMaskVentilator} className="mr-2" />
          <span className="text-center">GA Form</span>
        </a>
      </div>
    </section>
  );
}

// email config settings

emailjs.init('hZQClQ56Ff1XYUW3H');

async function sendEmail(formData, recaptchaResponse) {
  const { firstName, lastName, email, phoneNumber, date, time, messageBox } = formData;

  const templateParams = {
    firstName,
    lastName,
    email,
    phoneNumber,
    date: date ? format(date, 'MMMM dd, yyyy') : '',
    time,
    messageBox,
    'g-recaptcha-response': recaptchaResponse,
  };

  try {
    // Send the email using EmailJS
    const response = await emailjs.send('service_mcmzjiq', 'template_1u9osbn', templateParams);

    console.log('SUCCESS!', response.status, response.text);
    return { success: true };
  } catch (error) {
    console.log('FAILED...', error);
    console.error('Error sending email:', error);
    console.error('Error details:', error.response);
    return { success: false };
  }
}

function getDisabledDates(startDate, endDate) {
  const disabledDates = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    if (isWeekend(currentDate) || isBefore(currentDate, new Date())) {
      disabledDates.push(currentDate);
    }
    currentDate = addDays(currentDate, 1);
  }

  return disabledDates;
}

function ContactForm() {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedTime, setSelectedTime] = React.useState('10:00');
  const [showToast, setShowToast] = useState(false);
  const [toastDate, setToastDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTimeChange = (time) => {
    setFormData({ ...formData, time });
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    date: null,
    time: '10:00 AM', // Ensure the initial time format is correct
    messageBox: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const [recaptchaResponse, setRecaptchaResponse] = useState('');

  const handleRecaptchaChange = (response) => {
    setRecaptchaResponse(response);
  };

  const startDate = new Date();
  const endDate = new Date(2026, 11, 31); // December 31, 2024

  const disabledDates = getDisabledDates(startDate, endDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Check if reCAPTCHA is completed
    if (!recaptchaResponse) {
      alert('Please complete the reCAPTCHA.');
      setLoading(false);
      return;
    }

    // Ensure the time is already in the correct format (AM/PM) as selected by the user
    const formattedTime = formData.time;

    const formDataWithTime12h = {
      ...formData,
      time: formattedTime,
    };

    try {
      const result = await sendEmail(formDataWithTime12h, recaptchaResponse);

      if (result.success) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          date: null,
          time: '10:00 AM',
          messageBox: '',
        });
        setShowToast(true);
        setToastDate(formData.date);
        setRecaptchaResponse(''); // Reset reCAPTCHA response
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="box-border flex relative flex-col shrink-0 pb-8 ml-52 h-auto rounded-lg border-2 border-solid border-[#5BA3BB] max-md:mx-5 max-sm:mx-5 animate-fade-in animation-delay-3">
        <div className="flex gap-5 max-sm:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/2 max-sm:ml-0 max-sm:w-full">
            <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 mt-5 h-auto">
              <label htmlFor="firstName" className="box-border relative shrink-0 mt-5 text-zinc-800 font-medium">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 max-sm:ml-0 max-sm:w-full">
            <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 mt-5 h-auto">
              <label htmlFor="lastName" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800 font-medium">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="box-border flex relative flex-col shrink-0 w-full p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>
        </div>
        <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
          <label htmlFor="email" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@email.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
            required
          />
        </div>
        <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
          <label htmlFor="phoneNumber" className="box-border relative shrink-0 mt-5 h-auto font-medium text-zinc-800">
            Phone number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="+1 (555) 000-0000"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
            required
          />
        </div>
        <div className="flex gap-5 max-sm:flex-col max-md:gap-0">
          <div className="flex flex-col w-1/2 max-sm:ml-0 max-sm:w-full">
            <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
              <label htmlFor="date" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800 font-medium">
                Preferred Date
              </label>
              <DatePicker
                id="date"
                name="date"
                selected={formData.date}
                onChange={handleDateChange}
                minDate={new Date()}
                className="box-border flex relative flex-col shrink-0 w-full mt-5 rounded border border-solid border-zinc-400 text-[#282828] focus:outline-none focus:ring-1 caret-zinc-800 p-2.5"
                placeholderText="Select a date"
                required
                excludeDates={disabledDates}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-1/2 max-sm:ml-0 max-sm:w-full">
            <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
              <label htmlFor="time" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800 font-medium">
                Preferred Time
              </label>
              <CustomTimePicker
                value={formData.time}
                onChange={handleTimeChange}
              />
            </div>
          </div>
        </div>
        <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
          <label htmlFor="messageBox" className="box-border relative shrink-0 mt-5 h-auto font-medium text-zinc-800">
            Message
          </label>
          <textarea
            id="messageBox"
            placeholder="Describe what you'd like to discuss. e.g. sedation, extraction, root canal..."
            name="messageBox"
            value={formData.messageBox}
            onChange={handleChange}
            className="box-border flex relative flex-col shrink-0 px-2.5 pt-2.5 pb-20 mt-5 rounded border border-solid border-stone-300 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
            required
          ></textarea>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="box-border relative shrink-0 px-6 py-4 mt-5 text-base font-bold text-center rounded appearance-none cursor-pointer bg-[#5BA3BB] text-white hover:bg-[#057BA2] hover:scale-105 transition-all duration-100 transform flex items-center justify-center BUTTON button--pulse"
              style={{ width: '304px' }}
            >
              Submit
              {loading && <FontAwesomeIcon icon={faSpinner} spin className="ml-2" />}
            </button>
          </div>
          <ReCAPTCHA
            sitekey="6LffsPEpAAAAAIidIeeQS9D21QOhguR14pKYdlbG"
            onChange={handleRecaptchaChange}
            className="mt-5"
            style={{ display: 'inline-block', width: '304px' }}
          />
        </div>
      </div>
      {showToast && <ToastDemo open={showToast} onOpenChange={setShowToast} date={toastDate} />}
    </form>
  );
}


  export function ContactPage() {
    return (
      <div className="flex flex-col pt-7 bg-[#edf8fc]">
        <div className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]">
          <ContactSection />
        </div>
        <div className="box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto">
          <div className="box-border flex relative flex-col shrink-0 mt-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="box-border flex relative flex-col shrink-0 pb-8 mb-auto h-auto">
                  <ContactForm />
                </div>
              </div>
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="box-border flex relative flex-col shrink-0 pb-8 mb-auto h-auto">
                  <div className="box-border flex relative flex-col shrink-0 pb-8 mr-52 h-auto max-md:mx-5 max-sm:mx-5 animate-fade-in animation-delay-1">
                    <Map />
                    <a href="https://www.google.com/maps/place/Awake+Or+Asleep/@43.5833335,-79.6422659,16z/data=!3m2!4b1!5s0x882b46d757741dad:0xe63706c22d40dff8!4m6!3m5!1s0x882b46d989280177:0xa38f38e830f9d97d!8m2!3d43.5833296!4d-79.639691!16s%2Fg%2F1tf6bp9y?hl=en-US&entry=ttu" target="_blank" rel="noopener noreferrer">
                      <div className="box-border relative pl-5 mt-8 rounded-lg border-solid shadow-lg min-h-[125px] opacity-[1] border-2 bg-white flex items-center">
                        <div className="flex flex-col w-[13%] max-md:w-[53px] justify-center">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6685759ae1e371b58fac334772a9fe2c49e62d373f170a5870cf2425e3b208?apiKey=ea3aca9057654e45a61207978509cdea&"
                            className="shrink-0 self-stretch aspect-square w-[53px] max-md:flex max-sm:flex"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-[83%] max-md:w-auto">
                          <div className="flex flex-col grow">
                            <div className="text-base tracking-wide leading-6 text-zinc-800 font-bold">
                              Office Address
                            </div>
                            <div className="text-base tracking-wide leading-6 text-gray-700 font-medium">
                              325 Central Parkway West,
                              <br />
                              Mississauga, ON L5B3X9
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="box-border relative pl-5 mt-8 rounded-lg border-solid shadow-lg min-h-[125px] opacity-[1] border-2 bg-white flex items-center">
                      <div className="flex flex-col w-[13%] max-md:w-[53px] justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/26c529405889196fd58804778c0a194ede1fea384fc2721c4a1357d11f74452b?apiKey=ea3aca9057654e45a61207978509cdea&"
                          className="shrink-0 self-stretch aspect-square w-[53px] max-md:flex max-sm:flex"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[83%] max-md:w-auto">
                        <div className="flex flex-col grow">
                          <div className="text-base tracking-wide leading-6 text-zinc-800 font-bold">
                            Office Hours
                          </div>
                          <div className="text-base tracking-wide leading-6 text-gray-700 font-medium">
                            Monday - Tuesday (11am - 7pm)
                          </div>
                          <div className="text-base tracking-wide leading-6 text-gray-700 font-medium">
                            Wed - Thurs (8am - 4pm)
                            <br />
                            Friday (8am - 3pm)
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-border relative pl-5 mt-8 rounded-lg border-solid shadow-lg min-h-[125px] opacity-[1] border-2 bg-white flex items-center">
                    <div className="flex flex-col w-[13%] max-md:w-[53px] justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/26309493603664f1d84eb267f41898ab813f246073cd4851ba3560b166b339f4?apiKey=ea3aca9057654e45a61207978509cdea&"
                          className="shrink-0 self-stretch aspect-square w-[53px] max-md:flex max-sm:flex"
                        />
                      </div>
                      <div className="flex flex-col ml-5 w-[83%] max-md:w-auto">
                        <div className="flex flex-col grow">
                          <div className="text-base tracking-wide leading-6 text-zinc-800 font-bold">
                            Phone Number
                          </div>
                          <div className="text-base tracking-wide leading-6 text-gray-700 font-medium">
                            905-277-2641
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
