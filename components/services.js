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
      <div className={`box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto bg-white rounded-lg shadow-xl border-slate-400 border-opacity-25 card-custom-shadow max-md:ml-5 max-sm:mx-5 max-md:mr-5 max-md:ml-10 hover:scale-105 transition-transform duration-300`}>
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
          style={{ height: expandedCard === title ? 'auto' : height }}
          className={`box-border flex relative flex-col grow shrink-0 self-stretch px-10 py-5 mx-auto w-full max-w-[1200px] min-h-[100px] overflow-hidden transition-height duration-200 ${
            expandedCard === title ? 'max-h-[2500px]' : 'max-h-[150px]'
          }`}
        >
          <h3 className="box-border relative shrink-0 mx-auto mt-5 mb-2.5 h-auto font-extrabold text-xl text-[#282828]">
            {title}
          </h3>
          <div className="relative">
          <div className="box-border relative shrink-0 mx-auto h-auto text-center text-zinc-500">
            {expandedCard === title ? (
              <div className="flex text-left justify-center">
                <div className="max-w-[800px]">
                  {typeof description === 'string' ? (
                    description
                  ) : (
                    description
                  )}
                </div>
              </div>
            ) : (
              <>
                {typeof description === 'string' ? (
                  getFirstSentence(description)
                ) : (
                  <>
                    {getFirstSentence(description.props.children.join(' '))}
                  </>
                )}
              </>
            )}
          </div>
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
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b14f368f21270d34f2f33f8b332e4dc45a03b30dc4ff94b0788d2dac61bc5bf?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Preventative Care",
    description: (
      <>
        Regular dental checkups and cleanings every 6 months are crucial for maintaining healthy teeth and gums. Between appointments, consistent brushing and flossing is essential. Professional cleanings remove plaque and tartar that can't be eliminated through regular oral hygiene. During checkups, dentists examine for issues like tooth decay, gum disease, and oral cancer, allowing for early detection and treatment.<br />
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">What Happens During a Checkup & Cleaning?</span><br />
        <br />During a checkup, the dentist will perform a thorough examination to look for any signs of problems, including taking x-rays, checking for tooth decay, and examining tissues inside the mouth. Early detection of dental problems usually makes solving them easier and can even save your life if serious issues like oral cancer are discovered. Without regular checkups, you may not be aware of dental problems until they cause significant damage.<br />
        <br />The dental cleaning is part of your front line of defense against gum disease and tooth decay. During your appointment, the hygienist:&nbsp;
        <ul className="list-none mt-5">
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Inspects the overall condition of your gums and teeth
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Removes plaque and tartar
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Polishes and flosses your teeth
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Teaches you recommended flossing and brushing techniques
              </li>
          </ul>
        <br />
        The hygienist can get rid of plaque and stains that you can't eliminate with regular flossing and brushing.
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d05dfeac0a34cb338ce236d8896f85a49801d530d19a9273392d78a7e4eaadd8?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Wisdom Teeth Removal",
    description: (
      <>
        Wisdom teeth typically emerge between the ages of 15-25 and can cause various problems, such as becoming impacted and unable to break through the gums, partially breaking through with gum tissue growing over them and trapping food and germs leading to infection, or coming in at the wrong angle and causing crowding of the back teeth. Wisdom tooth removal surgery involves opening the gum tissue, removing any covering bone, separating the connective tissue, and extracting the tooth. Stitches and gauze pads may be used to control bleeding after the procedure.<br />
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Sedation Options for Wisdom Tooth Removal</span><br />
        <br />Awake or Asleep Dental offers several sedation options to minimize pain and discomfort during wisdom tooth removal, including <a href="/sedation" className="underline text-[#057BA2]">conscious sedation (laughing gas, oral sedation, IV sedation) and general anesthesia</a>, combined with anesthetics. After the surgery, patients should follow post-operative instructions such as biting gently on gauze pads, avoiding biting their tongue, lip, or mouth due to numbness, using pillows to raise their head to reduce bleeding, applying ice packs for the first 24 hours followed by warm compresses, and gradually progressing from soft to solid foods.<br/>
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Proper Healing and Recovery</span><br />
        <br />To ensure proper healing, patients should avoid using straws for at least 3 days, rinse their mouth with warm salt water several times a day after the first day, refrain from smoking for a minimum of <span className="underline font-semibold">24 hours</span>, and avoid rubbing the wound with fingers or tongue. Brushing teeth and tongue should be done with caution to avoid aggravating the healing wound. By following these guidelines and the advice of their dental professional, patients can minimize complications and promote a smooth recovery after wisdom tooth removal.<br />&nbsp;
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e4378dee7071c2adddb2d9b919c4986b4081ad7950d50f029e93ef1962085df3?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Dentures",
    description: (
      <>
        Modern advances have made dentures more comfortable, attractive, and functional than ever before. If you've lost your natural teeth, dentures provide several benefits:<br />
        <ul className="list-none mt-5">
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Missing teeth can make your face sag, making you look older. Dentures can help correct this problem.
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              With partial dentures, your appearance doesn't have to change much because they can be made to match your existing teeth.
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Complete dentures can be custom blended to complement the colours of your skin, eyes and hair. They can improve your smile.
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Dentures help strengthen the muscles in your face that control your expressions.
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Dentures make it easier to speak clearly.
              </li>
          </ul>
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Partial vs. Complete Dentures</span><br />
        <br />A <span className="underline font-semibold">partial denture</span> is used when you still have natural teeth left. Crowns are placed on the teeth adjacent to the missing tooth with a bridge between them that the partial denture attaches to. The partial denture can be blended to match the existing teeth very closely. The partial denture will also prevent your surrounding teeth from shifting.<br />
        <br />A <span className="underline font-semibold">complete denture</span> replaces all of your teeth. We can fit you with an immediate denture that can be made in advance that you can wear right away. Your denture will be made using top quality materials, and custom crafted so that it complements your skin, hair and eyes.<br/>
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Sedation</span><br />
        <br />At Awake or Asleep we offer several sedation options to help ensure that you will be comfortable, including <a href="/sedation" className="underline text-[#057BA2]">conscious sedation (laughing gas, oral sedation, IV sedation) and general anesthesia</a> for a comfortable experience.<br />&nbsp;
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2d2dd4250f8ed68dd9a84cf425120d789d533d3087ccdda8cecfa984aeacb05?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Fillings & Root Canals",
    description: (
      <>
        Dental fillings, including composite or "white fillings", are often preferred over silver fillings due to their aesthetic benefits and ability to more closely match existing teeth. White fillings also require less removal of natural tooth structure, provide a tighter seal, and can result in a stronger restored tooth with less chance of future fracturing compared to silver fillings. Cavity fillings should be treated as soon as possible, with the ideal time for pregnant women being during the 1st and 2nd trimesters to avoid difficulty lying on one's back for extended periods in the 3rd trimester.<br />
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Root Canal Procedures</span><br />
        <br />Root canal procedures are necessary when the nerve of a tooth becomes infected or the pulp is damaged, in order to remove the infected nerve and pulp. Common signs and symptoms include pain when chewing, prolonged sensitivity to hot or cold, darkening of the tooth, tenderness or swelling in nearby gums, or a recurring pimple on the gums. However, it is possible to have an infection without any symptoms, making regular dental checkups important. Modern technology and anesthetics have made root canals no more painful than getting a cavity filled.<br />
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Root Canal Treatment Process</span><br />
        <br />Most root canals can be completed in a single visit, though more complicated cases may require multiple appointments. Patients often prefer root canals over extractions as they allow for saving the natural teeth and are typically more cost-effective than replacement options like implants or dentures. Awake or Asleep Dental offers several sedation options for root canals, including <a href="/sedation" className="underline text-[#057BA2]">conscious sedation (laughing gas, oral sedation, IV sedation) and general anesthesia</a> for a comfortable experience.&nbsp;
        <br />
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/445d7ae09241eee8fb064eea78033029711b7238a66c380c1e8adcfb407e9bc0?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Dental Crowns",
    description: (
      <>
      A crown covers a decayed or damaged tooth, restoring its appearance and protecting it from getting worse. It will completely cover the whole visible portion of the tooth right down to the gum level and offers substantial cosmetic improvements and strength.<br />
      <br />
      It is important that your child visits the dentist regularly, but what if they have difficulty cooperating? Sedation dentistry provides a highly effective solution. We provide general anesthesia and conscious sedation for children 2+.
      
      <div className="flex justify-center">
          <div className="text-left">
      </div>
      </div>
      <br />
      <span className="font-bold text-center text-[#282828] mt-5 mb-2">When Do You Need a Crown?</span><br />
        <ul className="list-none mt-5">
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Your tooth is on the verge of breaking, or is already cracked and needs reinforcement
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Your tooth needs to be restored because it is broken and / or worn down
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Your tooth needs extra support because it has a large filling and there isn't a lot of natural tooth left
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Your tooth is badly stained, out of line or not the right shape
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              The crown is needed to support dentures that replace missing teeth adjacent to the crowned teeth
              </li>
              <br />
          </ul>
      <span className="font-bold text-center text-[#282828] mt-5 mb-2">Sedation</span><br />
      <br />
      At Awake or Asleep we offer several sedation options to help ensure that you will be comfortable during this procedure, including <a href="/sedation" className="underline text-[#057BA2]">conscious sedation (laughing gas, oral sedation, IV sedation) and general anesthesia</a> for a comfortable experience.<br />
    </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d15537f5bf8be3fc787323b0a7a0120d07b0ab8b337a0f2848721d6bcee661a1?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Cosmetic",
    description: (
      <>
        Bonding and porcelain veneers are used to improve the appearance of teeth, providing you with a better smile and enhancing your confidence. They can help with various dental problems, such as:<br />
        <ul className="list-none mt-5">
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Discolored teeth
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Worn down, chipped, or broken teeth
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Irregularly shaped, misaligned, or uneven teeth
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Teeth with gaps
              </li>
              <li className="flex items-center mb-2">
              <span className="text-[#5BA3BB] mr-2">&#10142;</span>
              Permanently stained teeth
              </li>
          </ul>
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Bonding and Porcelain Veneers vs. Crowns</span><br />
        <br />Several factors determine the right technique for you, primarily the condition of the natural tooth. Crowns involve removing a larger portion of the natural tooth, while porcelain veneers require removing only a small amount, and bonding usually involves no removal of the natural tooth. If bonding or porcelain veneers can achieve the desired results, they are often preferred over crowns because they preserve more of the natural tooth. However, crowns may be the better option for severely damaged teeth. A personal consultation and dental exam will help determine the best choice for your situation.<br />
        <br /><span className="font-bold text-center text-[#282828] mt-5 mb-2">Zoom Teeth Whitening</span><br />
        <br />Zoom whitening is very effective, often producing dramatic results in a short period compared to take-home trays, which take longer and usually do not achieve the same level of whiteness. This makes Zoom ideal for those who lack the time or patience for the tray method and want the best results possible. If you are serious about whitening your teeth, Zoom can provide the desired outcome. Schedule an appointment today to experience the benefits.<br />&nbsp;
        <br />Whiter teeth can also make you look younger. A British study showed that people perceived a model with digitally whitened teeth to be 13 years younger than when the same model's teeth appeared yellow. Zoom whitening can achieve this transformation in an <span className="underline font-semibold">hour or less</span>, offering a quick and easy way to look and feel younger.
      </>
    ),
    learnMoreLink: "#",
  },
];

export function ServicePage() {
  const [expandedCard, setExpandedCard] = React.useState(null);

  return (
    <div className="flex flex-col pt-7 bg-[#edf8fc]">
      <div className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]">
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
        <div className="box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto">
          <div className="box-border flex relative flex-col shrink-0 mt-5 bg-center bg-cover bg-[url(https://cdn.builder.io/api/v1/image/assets/TEMP/59c731ff3ec0ed08f28a50812e69ce7f4a895bedd99ce9beae712e0f59f282d9?apiKey=ea3aca9057654e45a61207978509cdea&)] min-h-screen min-w-screen">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 ml-[200px] max-md:ml-0 max-md:w-full">
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
