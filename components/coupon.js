'use client'
import React, { useState, useEffect } from "react";

function FormInput({ type, placeholder, name, className, required }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
      className={className}
      required={required}
      aria-label={placeholder}
    />
  );
}

export function Coupon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenCoupon = localStorage.getItem('hasSeenCoupon');
    if (!hasSeenCoupon) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenCoupon', 'true'); // Set localStorage item to prevent future popups
    setIsVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic here
    console.log('Form submitted');
  };

  if (!isVisible) {
    return null; // Don't render the popup if it's not visible
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="box-border flex flex-col p-10 mx-auto rounded-lg bg-white max-w-[1200px] min-h-[100px] relative ml-5 mr-5 max-md:m-20 max-sm:m-5">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:scale-105 transition-transform duration-100"
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
        <section className="box-border flex flex-col grow shrink-0 self-stretch p-10 w-full rounded-lg max-w-[1200px] min-h-[100px]">
          <div className="box-border flex flex-col shrink-0 my-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col justify-center w-6/12 max-md:ml-0 max-md:w-full">
                <h2 className="box-border relative shrink-0 mt-5 h-auto text-3xl font-bold max-md:mx-auto text-[#282828]">100$ OFF COUPON</h2>
                <p className="box-border relative shrink-0 mt-5 h-auto max-md:mx-auto text-neutral-500">Enter your email to receive the coupon.</p>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email-popup" className="sr-only">Enter your email</label>
                  <FormInput type="text" placeholder="Enter your email" name="email-popup" className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1" required={false} />
                  <div className="box-border flex relative flex-row shrink-0 gap-8 mt-5">
                    <button type="submit" className="box-border relative shrink-0 px-6 py-4 mr-4 text-xs text-center rounded appearance-none cursor-pointer bg-[#5BA3BB] text-[white] font-bold max-md:mx-auto max-md:mt-5 max-sm:mx-auto max-sm:mt-5 hover:bg-[#057BA2] hover:scale-105 transition-transform duration-100">Submit</button>
                    <button type="button" className="py-1 text-sm border-b-2 border-solid border-[#5BA3BB] text-[#5BA3BB] max-md:hidden max-sm:hidden hover:text-[#057BA2] hover:scale-105 transition-transform duration-100" onClick={handleClose}>No Thanks</button>
                  </div>
                </form>
              </div>
              <div className="flex flex-col justify-center w-6/12 max-md:ml-0 max-md:w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a" alt="" className="box-border object-cover overflow-hidden shrink-0 w-full aspect-[1.42] min-h-[20px] min-w-[20px] max-md:mt-5 max-sm:mt-5" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
