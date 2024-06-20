'use client'
import * as React from "react";

const SedationCard = ({ icon, title, description, learnMoreLink, delay, expandedCard, setExpandedCard }) => {
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
      <div className={`box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto bg-white rounded-lg border-2 shadow-xl border-slate-400 border-opacity-25 card-custom-shadow hover:scale-105 transition-transform duration-300 `}>
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
          className={`box-border flex relative flex-col max-sm:text-center grow shrink-0 self-stretch px-10 py-5 mx-auto w-full max-w-[1200px] min-h-[100px] overflow-hidden transition-height duration-200 ${
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

const sedationOptions = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b23b75f0833000f7fb7c4f44fa208ce02801b02435f3a12709c4a58c35911a9e?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "General Anesthesia",
    description: (
      <>
        During an anesthesia appointment you will be 100% asleep, so it is completely effective even if you are extremely anxious. You will go to sleep, wake up and have no recollection whatsoever of the surgery. We routinely perform dental anesthesia and appointments are available on a weekly basis.<br />
        <br />
        <div className="flex justify-center">
            <div className="text-left">
            <span className="font-bold text-center text-[#282828]">Why Dental Anesthesia?</span><br />
            <br />
            There are several reasons why you may choose general anesthesia for yourself or a family member, including:
            <ul className="list-none mt-5">
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Dental anxiety
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Pronounced gag reflex
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Allergies to local anesthesia or difficulty numbing
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Difficulty cooperating in the dental chair
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Desired treatment is lengthy
                </li>
                <br />
            </ul>
            </div>
        </div>
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">Why <span className="underline decoration-[#5BA3BB] decoration-dashed underline-offset-4">Awake or Asleep?</span></span><br />
        <br />
        Awake or Asleep offers a full range of sedation options and has been regularly providing sedation dentistry in Mississauga for over 20 years. Many other dental offices in Mississauga refer patients to Awake or Asleep to treat their patients under sedation. At Awake or Asleep you get ideal safety and speed for your procedure. Anesthesia is administered by a hospital level M.D. with a specialty certification in anesthesiology, while dentistry is performed. You are being constantly monitored by the anesthesiologist, and the dentist is able to work uninterrupted.<br />
        <br />
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">General Anesthesia for Kids 2+</span><br />
        <br />
        General anesthesia has an excellent record of safety, as has been proven by multiple scientific studies. We have regularly been providing sedation dentistry for children in Mississauga for over 20 years. Many other dental offices in Mississauga also refer children to Awake or Asleep to treat their patients under general anesthesia.<br />
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb73d166e54e648c92427df2e3ca753d8022c5fee9e14f7347153309f054e039?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Sedation Dentistry for Children",
    description: (
        <>
        Regular dental hygiene is very important for children: When it is ignored, poor oral hygiene can have disastrous negative consequences on formative years, including low self esteem, behaviour problems, and infections that spread from baby teeth to adult teeth.<br />
        <br />
        It is important that your child visits the dentist regularly, but what if they have difficulty cooperating? Sedation dentistry provides a highly effective solution. We provide general anesthesia and conscious sedation for children 2+.
        <div className="flex justify-center">
            <div className="text-left">
            <br />
            <span className="font-bold text-[#282828]">Why Sedation Dentistry for Children?</span><br />
            <br />
            There are several reasons why you may choose sedation dentistry for yourself or a family member, including:
            <ul className="list-none mt-5">
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Dental anxiety
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Pronounced gag reflex
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Allergies to local anesthesia or difficulty numbing
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Difficulty cooperating in the dental chair
                </li>
                <li className="flex items-center mb-2">
                <span className="text-[#5BA3BB] mr-2">&#10142;</span>
                Desired treatment is lengthy
                </li>
                <br />
            </ul>
            </div>
        </div>
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">Dental Phobia</span><br />
        <br />
        It is common for children to be fearful of the dentist. This fear may have resulted from their own traumatic experience, fear of pain, or being intimidated by needles and tools often found in the office. All of these things can cause children great anxiety and lead to them to refuse to attend their check-ups. Parents don’t know what to do because they don’t want to have to force or restrain their children, but they don’t want to neglect their dental care either. Sedation dentistry solves the problem.<br />
        <br />
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">General Anesthesia Safety</span><br />
        <br />
        General anesthesia has an excellent record of safety, as has been proven by multiple scientific studies. We have regularly been providing general anesthesia services to children in Mississauga for over 20 years. Many other dental offices in Mississauga also refer children to Awake or Asleep to treat their patients under dental anesthesia sedation. At Awake or Asleep anesthesia is administered by a hospital level MD with a specialty certification in anesthesiology. Your child is monitored by the anesthesiologist throughout the entire treatment.<br />
      </>
    ),
    learnMoreLink: "#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7dec689b0e972054b7de3e9d9c36963169e3cecc7d340d6f79545febc45e77f?apiKey=ea3aca9057654e45a61207978509cdea&",
    title: "Conscious Sedation",
    description: (
      <>
        During conscious sedation, medication is used to help ease anxiety. Depending on the level of sedation, you can be lightly relaxed, or you can be sedated to the edge of consciousness where you will not be aware of much of the procedure and sights, sounds, and smells will be toned out.
        <br />
        <br />
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">Conscious Sedation VS. General Anesthesia</span>
        <br />
        <br />
        Conscious sedation options include nitrous oxide (laughing gas), oral sedation, and IV sedation. With these options, you normally remain awake during the procedure, whereas with general anesthesia, you will be completely asleep. The most effective forms of sedation are the deeper sedation methods, including IV conscious sedation and general anesthesia. However, nitrous oxide (laughing gas) or oral sedation may also be appropriate depending on the severity of your anxiety. To learn more about what type of sedation is right for you, <a href="/contact" className="underline text-[#057BA2]">schedule a consultation.</a>
        <br />
        <br />
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">Nitrous Oxide (Laughing Gas)</span>
        <br />
        <br />
        Nitrous oxide is very safe. Mixed with oxygen, you simply breathe it in through a mask covering your nose. You will begin to feel relaxing effects within a few minutes. If you experience light-headedness or tingling sensations, it is perfectly normal and nothing to be concerned about. Laughing gas will not cause you to lose consciousness. You will still be aware of the procedure, but anxiety will be relieved. For most procedures, you will also receive a local anesthetic that will have a numbing effect, ensuring you feel no pain during your procedure. The effects of nitrous oxide begin to subside soon after the mask is removed. If this is the only form of sedation during your procedure, you will be able to drive yourself home afterwards.
        <br />
        <br />
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">Dental Oral Sedation</span>
        <br />
        <br />
        Sedatives used for oral sedation usually come from the family of drugs known as benzodiazepines. You normally remain awake but may not remember much of what happened. <span className="underline font-semibold">You will need a caregiver to escort you home after the appointment.</span>
        <br />
        <br />
        <span className="font-bold text-center text-[#282828] mt-5 mb-2">IV Sedation Dentistry</span>
        <br />
        <br />
        IV sedation dentistry is a type of sedation where a sedative medication is administered intravenously, causing the patient to feel very relaxed, safe, and comfortable. The effects are often referred to as "twilight sleep," where the patient is not fully asleep but will not feel or remember any discomfort. IV sedation works quickly and helps tone out sensory perceptions like sight, sound, and smell, making it easier for the dentist to achieve the best results. It is especially effective for patients with extreme or high gag reflex.
        <br />
        <br />
        Before scheduling an IV sedation appointment, a consultation is arranged to check the patient's medical history, medications, and address any concerns or questions. Prior to the appointment, vital signs such as blood pressure, oxygen level, and pulse are checked to ensure safety and efficiency. During the session, the patient's vital signs and medication level are monitored. After the dental work is completed, the patient will need a ride home with a friend or relative.
        <br />
        <br />
        Patients considering IV sedation may also want to consider general anesthesia (fully unconscious sedation) and should <a href="/contact" className="underline text-[#057BA2]">schedule a consultation</a> to discuss their options.
        <br />
      </>
    ),
    learnMoreLink: "#",
  }
  

];

export function SedationPage() {
  const [expandedCard, setExpandedCard] = React.useState(null);

  return (
    <div className="flex flex-col pt-7 bg-[#edf8fc]">
      <div className="box-border flex relative flex-col shrink-0 p-5 min-h-[100px]">
        <section className="box-border flex relative flex-col grow shrink-0 self-stretch p-5 mx-auto w-full max-w-[1200px] min-h-[100px]">
          <div className="box-border flex relative flex-col shrink-0 mt-5 h-auto">
            <h2 className="box-border relative shrink-0 mx-auto mt-5 h-auto text-7xl max-sm:text-6xl font-extrabold text-center text-zinc-800 opacity-0 animate-fade-in animation-delay-1">
              Sedation<br/> Dentistry
            </h2>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b91c111f1d616b6fc334635a034ddcffabcc5a879a025724c72710e5a216d0c0?apiKey=b56286c054454a81b9fdbc25691c8bc6&"
              alt="Sedation Dentistry"
              className="mx-auto aspect-[33.33] fill-slate-400 max-w-[400px] w-[400px] max-sm:w-[274px] mt-2 opacity-0 animate-fade-in animation-delay-2"
            />
            <p className="box-border relative shrink-0 mx-48 mt-5 h-auto font-light text-center text-zinc-400 max-sm:mx-auto max-sm:text-sm max-sm:text-center opacity-0 animate-fade-in animation-delay-3">
              Awake or Asleep offers various sedation options to help you feel comfortable and relaxed during your dental treatment. Learn more about each type below.
            </p>
          </div>
        </section>
      </div>
      <div className="box-border flex relative flex-col shrink-0 pb-8 h-auto">
        <div className="box-border flex relative flex-col shrink-0 pb-8 mt-5 h-auto">
          <div className="box-border flex relative flex-col items-center shrink-0 mt-5 bg-center bg-cover bg-[url(https://cdn.builder.io/api/v1/image/assets/TEMP/59c731ff3ec0ed08f28a50812e69ce7f4a895bedd99ce9beae712e0f59f282d9?apiKey=ea3aca9057654e45a61207978509cdea&)] min-h-screen min-w-screen">
            <div className="flex flex-col w-10/12 max-w-[1200px] mx-auto space-y-8">
              {sedationOptions.map((option, index) => (
                <SedationCard
                  key={option.title}
                  icon={option.icon}
                  title={option.title}
                  description={option.description}
                  learnMoreLink={option.learnMoreLink}
                  delay={index + 1}
                  expandedCard={expandedCard}
                  setExpandedCard={setExpandedCard}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
