'use client'
import * as React from "react";

const ServiceCard = ({ icon, title, description, learnMoreLink, delay, expandedCard, setExpandedCard }) => {
    const contentRef = React.useRef(null);
    const [height, setHeight] = React.useState(0);
  
    React.useEffect(() => {
      if (expandedCard === title) {
        setHeight(contentRef.current.scrollHeight);
      } else {
        setHeight(0);
      }
    }, [expandedCard, title]);
  
    const getFirstSentence = (text) => {
      if (typeof text === 'string') {
        return text.split('.')[0] + '.';
      }
      return '';
    };
  
    return (
      <div className={`box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto bg-white rounded-lg border-2 border-solid shadow-lg border-slate-400 border-opacity-0 max-md:ml-5 max-sm:mx-5 max-md:mr-5 hover:scale-105 transition-transform duration-300`}>
        <div className="box-border flex relative flex-col shrink-0 mt-5 h-[57px]">
          <img
            loading="lazy"
            src={icon}
            alt={title}
            className="box-border object-cover overflow-hidden shrink-0 mx-auto mt-5 w-14 aspect-square min-h-[20px] min-w-[20px]"
          />
        </div>
        <section
        ref={contentRef}
        style={{ height }}
        className="box-border flex relative flex-col grow shrink-0 self-stretch px-10 py-5 mx-auto w-full max-w-[1200px] min-h-[100px] overflow-hidden transition-height duration-200"
      >
        <h3 className="box-border relative shrink-0 mx-auto mt-5 mb-2.5 h-auto font-extrabold text-xl text-[#282828]">
          {title}
        </h3>
        <div className="relative">
          <p className="box-border relative shrink-0 mx-auto h-auto text-center text-zinc-500">
            {expandedCard === title ? (
              description
            ) : (
              getFirstSentence(typeof description === 'string' ? description : description.props.children.join(' '))
            )}
          </p>
          {expandedCard !== title && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-white opacity-65"></div>
          )}
        </div>
      </section>
      <a
        href={learnMoreLink}
        onClick={(e) => {
          e.preventDefault();
          setExpandedCard(expandedCard === title ? null : title);
        }}
        className="box-border relative shrink-0 mx-auto mt-5 h-auto font-semibold underline text-[#5BA3BB] hover:text-[#057BA2] hover:scale-105 transition-transform duration-100"
      >
        {expandedCard === title ? 'Read Less' : 'Learn More'}
      </a>
      </div>
    );
  };

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43041c4f8f1663181981448c51d224d6eefc5808bdf3b2c8bc5ef8360292f7b4?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Preventative Care",
    description: (
      <>
        Regular checkups and cleanings every six months are essential for maintaining healthy teeth and gums. Poor oral hygiene can lead to serious consequences, especially in children. During a checkup, the dentist examines for signs of problems, including decay and oral cancer. Dental cleaning removes plaque, tartar and polishes teeth. Additional preventative measures include brushing and flossing regularly, using fluoride, eating a balanced diet, orthodontics, sealants, and avoiding smoking to prevent future dental problems.&nbsp;
        <br />
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43041c4f8f1663181981448c51d224d6eefc5808bdf3b2c8bc5ef8360292f7b4?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Test",
    description: (
      <>
        Regular checkups and cleanings every six months are essential for maintaining healthy teeth and gums. Poor oral hygiene can lead to serious consequences, especially in children. During a checkup, the dentist examines for signs of problems, including decay and oral cancer. Dental cleaning removes plaque, tartar and polishes teeth. Additional preventative measures include brushing and flossing regularly, using fluoride, eating a balanced diet, orthodontics, sealants, and avoiding smoking to prevent future dental problems.&nbsp;
        <br />
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43041c4f8f1663181981448c51d224d6eefc5808bdf3b2c8bc5ef8360292f7b4?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Test 3",
    description: (
        <>
          Hello Bro. Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.Hello Bro.&nbsp;
          <br />
        </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43041c4f8f1663181981448c51d224d6eefc5808bdf3b2c8bc5ef8360292f7b4?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Oral Surgery",
    description: (
      <>
        Wisdom tooth removal involves opening the gum tissue, removing any covering bone, separating the connecting tissue, and extracting the tooth. At Awake or Asleep, we offer several sedation options, including conscious sedation and general anesthesia, to minimize pain and discomfort during the procedure. After surgery, patients should follow post-operative instructions, such as biting on gauze pads, avoiding physical activity, gradually progressing to solid foods, rinsing with warm salt water, and refraining from smoking to ensure proper healing.&nbsp;
        <br />
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43041c4f8f1663181981448c51d224d6eefc5808bdf3b2c8bc5ef8360292f7b4?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Sedation Dentistry",
    description: (
      <>
        <span className="not-italic text-[medium]">Lorem ipsum&nbsp;</span>
        <span className="not-italic text-[medium]">Lorem ipsum&nbsp;</span>
        <span className="not-italic text-[medium]">Lorem&nbsp;</span>
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/43041c4f8f1663181981448c51d224d6eefc5808bdf3b2c8bc5ef8360292f7b4?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Test 2",
    description: (
      <>
        <span className="not-italic text-[medium]">Lorem ipsum&nbsp;</span>
        <span className="not-italic text-[medium]">Lorem ipsum&nbsp;</span>
        <span className="not-italic text-[medium]">Lorem&nbsp;</span>
      </>
    ),
    learnMoreLink: "#",
  },
];

export function ServicePage() {
  const [expandedCard, setExpandedCard] = React.useState(null);

  return (
    <div className="flex flex-col pt-7 bg-[#edf8fc]">
      <div
        className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]"
      >
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
          <div className="box-border flex relative flex-col shrink-0 mt-5 h-auto">
            <h2 className="box-border relative shrink-0 mx-auto mt-5 h-auto text-7xl font-extrabold text-center text-zinc-800 opacity-0 animate-fade-in animation-delay-1">
              Services
            </h2>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b91c111f1d616b6fc334635a034ddcffabcc5a879a025724c72710e5a216d0c0?apiKey=b56286c054454a81b9fdbc25691c8bc6&"
              alt="Services"
              className="mx-auto aspect-[33.33] fill-slate-400 max-w-[304px] w-[315px] max-sm:w-[274px] opacity-0 animate-fade-in animation-delay-2"
            />
            <p className="box-border relative shrink-0 mx-24 mt-5 h-auto font-light text-center text-zinc-400 max-sm:mx-auto max-sm:text-sm max-sm:text-center opacity-0 animate-fade-in animation-delay-3">
              Awake or Asleep Dentistry provides the following treatments. For
              your comfort, most of our dental treatments can be performed while
              under sedation.
            </p>
          </div>
        </section>
      </div>
      <div className="box-border flex relative flex-col shrink-0 pb-8 h-auto">
        <div className="box-border flex relative flex-col shrink-0 pb-8 mt-5 mb-32 h-auto">
          <div className="box-border flex relative flex-col shrink-0 mt-5 bg-center bg-cover bg-[url(https://cdn.builder.io/api/v1/image/assets/TEMP/59c731ff3ec0ed08f28a50812e69ce7f4a895bedd99ce9beae712e0f59f282d9?apiKey=ea3aca9057654e45a61207978509cdea&)] min-h-screen min-w-screen">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 ml-[200px] max-md:ml-0 max-md:w-full ">
                {services.slice(0, 3).map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    learnMoreLink={service.learnMoreLink}
                    delay={index + 1}
                    expandedCard={expandedCard}
                    setExpandedCard={setExpandedCard}
                  />
                ))}
              </div>
              <div className="flex flex-col ml-5 w-6/12 mr-[200px] max-md:ml-0 max-md:mr-0 max-md:w-full">
                {services.slice(3).map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    learnMoreLink={service.learnMoreLink}
                    delay={index + 4}
                    expandedCard={expandedCard}
                    setExpandedCard={setExpandedCard}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}