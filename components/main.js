'use client'
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Footer from "./footer.js";

const ServiceItem = ({ imageSrc, title, description }) => (
  <div className="flex flex-col grow pb-5 max-md:mt-10 max-sm:text-center max-md:items-center">
    <img src={imageSrc} alt={title} className="w-10 aspect-square max-sm:mx-auto" />
    <div className="mt-6 text-xl tracking-wider text-[#282828] font-medium">{title}</div>
    <div className="mt-9 text-lg tracking-widest leading-9 text-zinc-400">{description}</div>
  </div>
);

const services = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/80f51565ec0b1a47dd402cc0a46207082412de8dfff25f1dc88ad49ac4d56b7c?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Sedation Dentistry",
    description: "Our experienced team offers sedation dentistry for anxious or special needs kids 2 and up.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cea2579eb30e870dd26f1fcc02bcb11d9aa4a1c320d7b8e3ade83a6ec1e8d1a4?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Restorative Care",
    description: "Fillings, crowns, bridges, and dentures to restore damaged or missing teeth.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/55e4cad9ab13d9c032ebbdf0ad318bcacb32034211c895e15bd3a6ebcff6c90b?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Preventive Care",
    description: "Regular check-ups and fluoride treatments to prevent tooth decay and gum disease.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/df1ebca7a1c00ac379d31fef9a5fed66ba0fc8d294ffdfc415241bd5a2eaa667?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Oral Surgery",
    description: "Extractions, wisdom teeth removal, and other surgical procedures.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7bafd79e3d2560c01b5ee3f6f2161be28ad8d35ab93ae658478acc7d0b85ce18?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Cosmetic Dentistry", 
    description: "Teeth whitening, veneers, and other procedures to improve the appearance of teeth.",
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/82b60fd44b03c3372b4446529773eac6ed0ea516f192ef69836c9b747812c1cf?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Dental Implants",
    description: "Dental implants are a popular and effective way to replace missing teeth.",
  },
];

export function MyComponent() {
  const [displayText, setDisplayText] = useState("");
  const [caretVisible, setCaretVisible] = useState(true);
  const typewriterText = " beautiful, white smile.";

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;

    const typewriterIntervalId = setInterval(() => {
      if (!isDeleting) {
        setDisplayText(typewriterText.slice(0, currentIndex));
        currentIndex++;

        if (currentIndex > typewriterText.length) {
          isDeleting = true;
          setTimeout(() => {
            setCaretVisible(false);
          }, 3000);
          setTimeout(() => {
            setCaretVisible(true);
            isDeleting = true;
          }, 8000);
        }
      } else {
        setDisplayText(typewriterText.slice(0, currentIndex));
        currentIndex--;

        if (currentIndex < 0) {
          isDeleting = false;
          currentIndex = 0;
        }
      }
    }, 100);

    const caretIntervalId = setInterval(() => {
      setCaretVisible((prevState) => !prevState);
    }, 500);

    // Scroll trigger animation
    const scrollTriggerElements = document.querySelectorAll(".scroll-trigger");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    }, observerOptions);

    scrollTriggerElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      clearInterval(typewriterIntervalId);
      clearInterval(caretIntervalId);
    };
  }, []);


  // turns "white" into blue color
  const getColoredText = (text) => {
    const parts = text.split(" ");
    return parts.map((part, index) => {
      if (part.startsWith("w")) {
        return (
          <React.Fragment key={index}>
            <span className="text-[#5BA3BB]">{part}</span>
            {index < parts.length - 1 && " "}
          </React.Fragment>
        );
      } else {
        return (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && " "}
          </React.Fragment>
        );
      }
    });
  };


  // Conditional rendering for type writer code based on screen size (FIX: glitchy on smaller screens)

  const renderText = () => {
    if (window.innerWidth >= 1756) {
      // Desktop
      return (
        <>
          <span className="leading-[113px]">Treat yourself with a</span>
          <span className="leading-[113px]">
            {getColoredText(displayText)}
            {caretVisible && <span className="text-[#282828]">|</span>}
          </span>
        </>
      );

    } else {
      // Tablet and Mobile
      return (
        <span className="leading-[113px]">
          Treat yourself with a{getColoredText(typewriterText)}
        </span>
      );
    }
  };

  return (
    <div className="flex flex-col pt-7 bg-white">
      <div className="flex flex-col pr-1.5 pl-14 w-full max-md:pl-5 max-md:max-w-full">
        <section className="py-2.5 mt-5 max-md:flex max-md:flex-col max-md:max-w-full max-sm:flex max-sm:flex-col">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
              <h1 className="min-h-[340px] self-stretch my-auto text-8xl font-bold tracking-tighter text-[#282828] max-md:mt-10 max-md:max-w-full max-md:text-center max-md:text-6xl max-sm:pr-5 max-sm:-mt-0.5 max-sm:text-8xl max-sm:tracking-tighter max-sm:text-center">
                {renderText()}
              </h1>
            </div>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8cf4061d6402e34049a3ed13168b977c879feeaf1b5f01128bcce7b8fc82c45?apiKey=ea3aca9057654e45a61207978509cdea&"
                alt="Smiling woman"
                className="object-cover grow w-full aspect-[1.45] object-[bottom_right] max-md:flex max-md:mt-8 max-md:w-full max-sm:flex max-sm:w-full animate-float-in"
              />
            </div>
          </div>
        </section>
        <div className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]" maxwidth={1200} lazyLoad={false}>
          <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]" />
        </div>
        <section className="flex flex-col max-md:mr-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full animate-fade-in scroll-trigger">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d8c34708377bc7697804bb7cedddac9959a36f4d5c08cdbb40061cd193a4ed7?apiKey=ea3aca9057654e45a61207978509cdea&width=2000"
                alt="Dentist examining patient's teeth"
                className="box-border object-cover overflow-hidden shrink-0 my-auto w-full aspect-[1.42] min-h-[20px] min-w-[20px] max-md:flex max-md:mx-auto max-md:w-full max-md:max-w-[750px] max-sm:hidden max-sm:w-full"
              />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full animate-slide-up scroll-trigger">
              <h2 className="self-start my-auto mr-10 ml-5 text-6xl font-bold tracking-tight text-[#282828] max-md:mr-2.5 max-md:mt-10 max-md:max-w-full max-md:text-center max-sm:my-auto max-sm:ml-auto max-sm:text-center ">
                Expert dental care for the whole family.
              </h2>
              <p className="self-end mr-10 mb-auto text-lg ml-5 leading-9 text-zinc-400 max-md:pt-4 max-md:mt-0 max-md:mr-2.5 max-md:max-w-full max-md:text-center max-sm:my-auto max-sm:ml-auto max-sm:text-center">
                <span className="text-base not-italic text-neutral-500">
                  Awake or Asleep Dentistry has been providing sedation dentistry in Mississauga for over 15 years. We offer several different sedation options for your comfort, ranging from light conscious sedation, deep conscious sedation, to fully asleep. Although our office specializes in sedation, we also provide treatments without sedation as well. Dentistry services are available for the entire family, including adults, teens, and children 2+. Call, or schedule a consultation to discuss your options, or click on the links below for more information.
                </span>
              </p>
              <div className="flex justify-between items-center mt-20 ml-5 max-md:justify-center">
              <div className="flex items-center">
                <Link href="/contact" passHref>
                <button className="box-border relative shrink-0 px-6 py-4 mr-4 text-xs text-center rounded appearance-none cursor-pointer bg-[#5BA3BB] text-[white] max-md:mx-auto max-md:mt-5 max-sm:mx-auto max-sm:mt-5 hover:bg-[#057BA2] hover:scale-105 transition-transform duration-100">
                  BOOK AN APPOINTMENT
                </button>
                </Link>
                <a href="/contact" className="py-1 ml-4 text-sm border-b-2 border-solid border-[#5BA3BB] text-[#5BA3BB] max-md:hidden max-sm:hidden hover:text-[#057BA2] hover:scale-105 transition-transform duration-100">
                  LEARN MORE
                </a>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex flex-col justify-center px-14 py-20 mt-20 w-full max-md:flex max-md:flex-col max-md:pr-14 max-md:pl-5 max-md:mt-10 max-md:max-w-full bg-[#DDEDF4]">
        <div className="mt-14 mb-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full animate-fade-in scroll-trigger">
              <h2 className="self-stretch my-auto text-6xl font-bold tracking-tighter text-[#282828] max-md:my-auto max-md:max-w-full max-md:text-4xl max-md:text-center max-sm:ml-10 max-sm:tracking-tighter max-sm:text-center">
                Everything you need in one place.
              </h2>
            </div>
            <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col flex-wrap grow content-start max-md:mt-10 max-md:max-w-full">
                <div className="px-px max-md:flex max-md:flex-col max-md:max-w-full max-sm:ml-10">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {services.slice(0, 3).map((service, index) => (
                      <div
                        key={index}
                        className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full max-md:text-center ${
                          index === 1 ? "ml-5" : ""
                        } animate-fade-in scroll-trigger`}
                      >
                        <ServiceItem {...service} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-12 max-md:mt-10 max-md:max-w-full max-sm:ml-10">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    {services.slice(3).map((service, index) => (
                      <div
                        key={index}
                        className={`flex flex-col w-[33%] max-md:ml-0 max-md:w-full ${
                          index === 1 ? "ml-5" : ""
                        } animate-fade-in scroll-trigger`}
                      >
                        <ServiceItem {...service} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]" maxWidth={1200} lazyLoad={false}>
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]" />
      </div>
      <section className="flex flex-col ml-14 max-md:mr-14">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full animate-fade-in scroll-trigger">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
              alt="Dr. Golovanov"
              className="box-border object-cover overflow-hidden shrink-0 m-auto w-full aspect-[1.42] min-h-[20px] min-w-[20px] max-md:mx-auto max-md:w-full max-md:max-w-[529px] max-sm:w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full animate-slide-up scroll-trigger">
            <h2 className="pt-16 mt-auto mr-10 mb-5 ml-5 text-6xl font-bold tracking-tighter text-[#282828] max-md:max-w-full max-md:text-4xl max-md:text-center max-sm:text-center">
              Professionals you can trust. Period.
            </h2>
            <p className="mt-5 mr-10 mb-auto ml-5 text-lg leading-9 text-zinc-400 max-md:max-w-full max-md:text-center">
              Dr. Golovanov is a prominent dental specialist, who knows how to treat every problem. Over 25 years of experience translates into bespoke treatment of every patient .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}