'use client'
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import CouponCircle from './CouponCircle'; 
import emailjs from 'emailjs-com';


function FormInput({ type, placeholder, name, className, required }) {
    return (
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={name}
                className={`pl-10 max-md:w-full ${className}`}
                required={required}
                aria-label={placeholder}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
            </div>
        </div>
    );
}

export function Coupon() {
    const [isVisible, setIsVisible] = useState(false);
    const [isCircleVisible, setIsCircleVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const hasSeenCoupon = localStorage.getItem('hasSeenCoupon');
        if (!hasSeenCoupon) {
            setIsVisible(true);
        } else {
            setIsCircleVisible(true);
        }
    }, []);

    const handleClose = () => {
        localStorage.setItem('hasSeenCoupon', 'true'); // Set localStorage item to prevent future popups
        setIsVisible(false);
        setIsCircleVisible(true);
    };

    const handleReopen = () => {
        setIsVisible(true);
        setIsCircleVisible(false);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setLoading(true);
    
      // Get the email input value
      const email = event.target.elements['email-popup'].value;
    
      // EmailJS configuration
      const serviceID = 'service_mcmzjiq';
      const templateID = 'template_8qsfeyn';
      const userID = 'hZQClQ56Ff1XYUW3H';
    
      // EmailJS template parameters
      const templateParams = {
        to_email: email,
      };
    
      // Send the email using EmailJS
      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((response) => {
          console.log('Email sent successfully!', response.status, response.text);
          // Optionally, you can show a success message to the user
          handleClose();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          // Optionally, you can show an error message to the user
        })
        .finally(() => {
          setLoading(false);
        });
    };

    return (
        <>
            {isVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-0">
                    <div className="box-border flex flex-col p-6 sm:p-10 mx-auto rounded-lg bg-white max-w-[900px] w-full relative overflow-y-auto max-h-[90vh] sm:max-h-none">
                        <button
                            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 cursor-pointer hover:scale-105 close-button transition-transform duration-100"
                            onClick={handleClose}
                            aria-label="Close"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <section className="box-border flex flex-col grow shrink-0 self-stretch w-full rounded-lg max-w-[1200px]">
                            <div className="box-border flex flex-col shrink-0 my-5">
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col justify-center w-6/12 max-md:ml-0 max-md:w-full">
                                        <h2 className="box-border relative shrink-0 mt-5 h-auto text-4xl max-sm:text-3xl max-sm:text-center font-bold max-md:mx-auto text-[#282828]">
                                            Claim your <span className="text-[#5BA3BB]">$100</span><br />Discount today!
                                        </h2>
                                        <p className="box-border relative shrink-0 mt-5 h-auto max-md:mx-auto text-neutral-500 max-sm:text-center">Enter your email to receive the coupon.</p>
                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor="email-popup" className="sr-only">Enter your email</label>
                                            <FormInput type="text" placeholder="Enter your email" name="email-popup" className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1" required={false} />
                                            <div className="box-border flex relative flex-row shrink-0 gap-8 mt-5">
                                                <button
                                                    type="submit"
                                                    className="box-border relative shrink-0 px-6 py-4 mr-4 text-xs text-center rounded appearance-none cursor-pointer bg-[#5BA3BB] text-[white] font-bold max-md:mx-auto  max-sm:mx-auto hover:bg-[#057BA2] hover:scale-105 transition-transform duration-100 max-md:w-full max-sm:w-full flex items-center justify-center"
                                                >
                                                    Submit
                                                    {loading && <FontAwesomeIcon icon={faSpinner} spin className="ml-2" />}
                                                </button>
                                                <button
                                                  type="button"
                                                  style={{
                                                      paddingTop: '0.25rem',
                                                      paddingBottom: '0.25rem',
                                                      fontSize: '0.875rem',
                                                      borderBottom: '2px solid #5BA3BB',
                                                      color: '#5BA3BB',
                                                      cursor: 'pointer',
                                                      transition: 'transform 0.1s',
                                                  }}
                                                  onClick={handleClose}
                                                  className="max-md:hidden max-sm:hidden hover:text-[#057BA2] hover:scale-105"
                                              >
                                                  No Thanks
                                              </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex flex-col justify-center w-6/12 max-md:ml-0 max-md:w-full">
                                        <img loading="lazy" src="https://sedationdentistry.ca/wp-content/uploads/2016/10/pop-up.jpg" alt="" className="box-border rounded overflow-hidden shadow-xl shrink-0 w-full aspect-[2.5] min-h-[20px] min-w-[20px] max-md:mt-10 max-sm:mt-10" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )}
            {isCircleVisible && <CouponCircle onClick={handleReopen} notificationCount={1}/>}
        </>
    );
}
