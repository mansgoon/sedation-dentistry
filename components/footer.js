'use client'
import React from "react";

const FooterSection = ({ title, items }) => (
  <div className="flex flex-col mt-1 max-sm:mx-auto max-sm:text-center">
    <div className="text-xl tracking-wider text-white">{title}</div>
    <div className="mt-9 text-lg tracking-widest leading-9 text-zinc-400">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);

const footerSections = [
  {
    title: "Patient Information",
    items: ["About Us", "History", "Before / Afters", "Contact Us"],
  },
  {
    title: "Services",
    items: ["Preventive Care", "Implant Dentistry", "Cosmetic Dentistry", "Sedation Dentistry"],
  },
];

export const Footer = () => {
  return (
    <footer className="flex gap-5 justify-between items-start px-16 pt-20 pb-9 mt-32 w-full bg-stone-900 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      {footerSections.map((section, index) => (
        <FooterSection key={index} {...section} />
      ))}
      <div className="flex flex-col mt-1 max-sm:mx-auto max-sm:text-center">
        <a href="/contact">
        <div className="text-xl tracking-wider text-white">Contact us</div>
        </a>
        <div className="mt-9 text-lg tracking-widest leading-7 text-zinc-400">
          325 Central Parkway West
          <br />
          Mississauga, ON L5B3X9
        </div>
        <div className="flex gap-5 mt-5">
          <div className="flex flex-col items-center self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/696ffb9137b1d6b661a2a6b46a1670d18169e0c4ffad2f1063dfb30209d675a8?apiKey=ea3aca9057654e45a61207978509cdea&"
              alt="Phone icon"
              className="w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/35e1e9ef41381842e12ca31779d5d68c5348ff2a564fe5e08aa4b17f95b7bd11?apiKey=ea3aca9057654e45a61207978509cdea&"
              alt="Email icon"
              className="mt-3 w-6 aspect-square"
            />
          </div>
          <div className="text-lg tracking-widest leading-9 text-zinc-400">
            905-277-2641
            <br />
            info@awakeorasleep.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;