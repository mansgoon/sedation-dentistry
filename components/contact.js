'use client'
import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ContactSection() {
  return (
    <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
      <h2 className="box-border relative shrink-0 mt-5 h-auto text-7xl font-extrabold text-center text-[#282828]">
        Get in Touch
      </h2>
      <p className="box-border relative shrink-0 mx-auto mt-5 h-auto font-light text-zinc-400 max-sm:mx-auto max-sm:text-sm max-sm:text-center">
        Book an Appointment to treat your teeth right now.
      </p>
    </section>
  );
}

function ContactForm() {
    const [selectedDate, setSelectedDate] = React.useState(null);
    return (
      <div className="box-border flex relative flex-col shrink-0 pb-8 mr-52 mt-10 h-auto rounded-lg border-2 border-solid border-[#5BA3BB] max-md:mx-5 max-sm:mx-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 mt-5 h-auto">
              <label htmlFor="firstName" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First name"
                name="firstName"
                className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 mt-5 h-auto">
              <label htmlFor="lastName" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last name"
                name="lastName"
                className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
                required
              />
            </div>
          </div>
        </div>
        <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
          <label htmlFor="email" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@email.com"
            name="email"
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
            className="box-border flex relative flex-col shrink-0 p-2.5 mt-5 rounded border border-solid border-zinc-400 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1" 
            required
          />
        </div>
        <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
            <label htmlFor="date" className="box-border relative shrink-0 mt-5 h-auto text-zinc-800">
            Select date
            </label>
            <DatePicker
            id="date"
            name="date"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="box-border flex relative flex-col shrink-0 w-full mt-5 rounded border border-solid border-zinc-400 text-[#282828] focus:outline-none focus:ring-1 caret-zinc-800 p-2.5"
            placeholderText="Select a date"
            />
        </div>
        <div className="box-border flex relative flex-col shrink-0 pb-8 mx-5 h-auto">
          <label htmlFor="messageBox" className="box-border relative shrink-0 mt-5 h-auto font-medium text-zinc-800">
            Message
          </label>
          <textarea
            id="messageBox"
            placeholder="Describe what you'd like to discuss. e.g. sedation, extraction, root canal..."
            name="messageBox"
            className="box-border flex relative flex-col shrink-0 px-2.5 pt-2.5 pb-20 mt-5 rounded border border-solid border-stone-300 caret-zinc-800 text-[#282828] focus:outline-none focus:ring-1"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="box-border relative shrink-0 px-6 py-4 mx-auto mt-5 text-base font-bold text-center rounded appearance-none cursor-pointer bg-[#5BA3BB] text-white hover:bg-[#057BA2] hover:scale-105 transition-all duration-100 transform"
        >
          Submit
        </button>
      </div>
    );
  }

function Footer() {
  return (
    <footer className="flex gap-5 justify-between items-start px-16 pt-20 pb-9 mt-32 w-full bg-stone-900 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-1 max-sm:mx-auto max-sm:text-center">
        <h3 className="text-xl tracking-wider text-white">Patient Information</h3>
        <nav className="mt-9 text-lg tracking-widest leading-9 text-zinc-400">
          <ul>
            <li>About Us</li>
            <li>History</li>
            <li>Before / Afters</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col mt-1 max-sm:mx-auto max-sm:text-center">
        <h3 className="text-xl tracking-wider text-white">Services</h3>
        <nav className="mt-9 text-lg tracking-widest leading-9 text-zinc-400">
          <ul>
            <li>Preventive Care</li>
            <li>Implant Dentistry</li>
            <li>Sedation Dentistry</li>
            <li>Oral Surgery</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col mt-1 max-sm:mx-auto max-sm:text-center">
        <h3 className="text-xl tracking-wider text-white">Contact us</h3>
        <address className="mt-9 text-lg tracking-widest leading-7 text-zinc-400">
          325 Central Parkway West<br />
          Mississauga, ON L5B3X9
        </address>
        <div className="flex gap-5 mt-5">
          <div className="flex flex-col items-center self-start">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/696ffb9137b1d6b661a2a6b46a1670d18169e0c4ffad2f1063dfb30209d675a8?apiKey=ea3aca9057654e45a61207978509cdea&" alt="" className="w-6 aspect-square" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e1e9ef41381842e12ca31779d5d68c5348ff2a564fe5e08aa4b17f95b7bd11?apiKey=ea3aca9057654e45a61207978509cdea&" alt="" className="mt-3 w-6 aspect-square" />
          </div>
          <div className="text-lg tracking-widest leading-9 text-zinc-400">
            <a href="tel:905-277-2641">905-277-2641</a><br />
            <a href="mailto:info@awakeorasleep.com">info@awakeorasleep.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function ContactPage() {
  return (
    <div className="flex flex-col pt-7 bg-[#edf8fc]">
      <div
        className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]"
      >
        <ContactSection />
      </div>
      <div className="box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto">
        <div className="box-border flex relative flex-col shrink-0 mt-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="box-border flex relative flex-col shrink-0 pb-8 mb-auto h-auto">
                <div className="box-border flex relative flex-col shrink-0 pb-8 mt-5 ml-52 h-auto max-md:mx-5 max-sm:mx-5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                    alt="Dentist office interior"
                    className="box-border object-cover overflow-hidden shrink-0 mt-5 w-full rounded-lg border-2 border-solid aspect-[1.42] border-[#5BA3BB] min-h-[20px] min-w-[20px]"
                  />
                <div className="box-border relative pl-5 mt-8 rounded-lg border-solid shadow-lg h-[125px] opacity-[1] border-2 bg-white">
                asd
                </div>
                <div className="box-border flex relative flex-col shrink-0 mt-8 rounded-lg border-solid shadow-lg h-[125px] opacity-[1] border-2 bg-white" />
                <div className="box-border flex relative flex-col shrink-0 mt-8 rounded-lg border-solid shadow-lg h-[125px] opacity-[1] border-2 bg-white" />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="box-border flex relative flex-col shrink-0 pb-8 mb-auto h-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}