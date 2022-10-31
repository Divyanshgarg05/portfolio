import SectionTitle from "@components/SectionTitle";
import { Disclosure, Transition } from "@headlessui/react";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const researchExp = [
  {
    title: "",
    description: (
      <p>
        Attended Summer School at Thapar Institute of Engineering and Technology
        (TIET, previously known as Thapar University), Patiala, a 2-week program
        in the introduction to Machine Learning; received insight into the field
        and its future scope. This allowed me to research under Dr. Prashant
        Singh Rana, Associate Professor at TIET on the research project “Novel
        Image Encryption Technique based on Triple Pendulum.”
      </p>
    ),
    institute: "",
    dates: "May-Oct 2019",
  },
  {
    title: "",
    description: (
      <p>
        I have learned that doing research is not an easy task. It takes a lot
        of time and effort to find credible sources and to make sure that your
        information is accurate. You also need to be able to synthesize all the
        information you have found into a cohesive argument. I have also learned
        that doing research can be really rewarding because it allows you to
        learn new things and to develop a better understanding of complex topics
        and how the world around us works.
      </p>
    ),
    institute: "",
    dates: "",
  },
  {
    title: "",
    description: (
      <>
        <p>
          Here are some other important points I learned from doing research:
        </p>
        <p className="block">
          3. Research can help us to form opinions on different subjects and to
          develop arguments for or against them.
        </p>
        <p>
          4. It is important to be critical when doing research, and to always
          consider the sources of information that we use.
        </p>
      </>
    ),
    institute: "",
    dates: "",
  },
];
const internshipExp = [
  {
    title: "",
    description: (
      <p>
        Interning with ‘
        <a
          href="https://in.linkedin.com/company/thinkstraight-org"
          target="_blank"
          rel="noreferrer"
          className="text-bluePrimary"
        >
          Think Straight IT LLP
        </a>
        ’ (a market leader for new and innovative Mobile Value-Added Services
        (mVAS), mobile applications, customized software and Internet products &
        services. based in Noida, India)
      </p>
    ),
    institute: "",
    dates: "2021",
  },
];
const sportsExp = [
  {
    title: "",
    description:
      "Led my team as a team captain to secure 1st position in District Badminton Championship – Received Certificate of merit, medal, and memento",
    institute: "",
    dates: "(2018 - 2019)",
  },
  {
    title: "",
    description:
      "Secured 1st position in Badminton Championships organized by BONNY SPORTS DISTRICT CLUB for 3 consecutive years",
    institute: "",
    dates: "(2016 - 2019)",
  },
  {
    title: "",
    description:
      "Secured 1st position in Inter-house Kho-Kho Competition – Received Certificate of merit and medal",
    institute: "",
    dates: "(2015 - 2016)",
  },
  {
    title: "",
    description:
      "Secure 2nd position in Inter-house Cricket Competition – Received Certificate of merit and medal",
    institute: "",
    dates: "(2015 - 2016)",
  },
  {
    title: "",
    description:
      "Secure 1st position in Inter section Leg Cricket Tournament – Received Certificate of merit and medal",
    institute: "",
    dates: "(2012 - 2013)",
  },
];
const otherExp = [
  {
    title: "Indian Development Foundation (IDF)",
    description: (
      <p>
        A national NGO committed to Health, Education, and Development.
        <a
          href="https://www.idf.org.in/"
          target="_blank"
          className="italic text-bluePrimary"
          rel="noopener noreferrer"
        >
          (https://www.idf.org.in/)
        </a>
        <ul className="pl-4 list-disc">
          <li>Appreciation Certificate (2018-2019)</li>
          <li>Appreciation Certificate (2016-2017)</li>
          <li>Appreciation Certificate (2015-2016)</li>
          <li>Appreciation Certificate (2014-2015)</li>
          <li>
            <b>AWARD OF EXCELLENCE (2012):</b> For outstanding participation in
            health awareness, resource mobilization, and humanitarian services.
          </li>
          <li>Appreciation Certificate (2012-2013)</li>
          <li>Appreciation Certificate (2011-2012)</li>
        </ul>
      </p>
    ),
    institute: "",
    dates: "",
  },
  {
    title: "",
    description: (
      <p>
        <b>Volunteer:</b> I worked for an NGO, helping them with eldercare
        during the pandemic.
      </p>
    ),
    institute: "",
    dates: "",
  },
  {
    title: "",
    description: (
      <p>
        <b>Volunteer:</b> I worked for an NGO, helping special needs children
        and IT Setup.
      </p>
    ),
    institute: "",
    dates: "",
  },
];

const Experiences = () => {
  return (
    <section
      id="experience"
      className="relative flex items-center justify-center py-20 border-b min-h-fit border-b-gray-300 lg:py-32"
    >
      <div className="w-full max-w-xl px-4 sm:px-0">
        <SectionTitle name="Experiences" />
        <div className="w-full pt-8">
          <div className="w-full mx-auto bg-white rounded-2xl">
            <Disclosure as="div" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-left rounded-lg bg-bluePrimary/20 text-bluePrimary hover:bg-bluePrimary/25 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span className={`${open ? "font-bold" : ""}`}>
                      Research Intern
                    </span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-bluePrimary`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 rounded-lg bg-bluePrimary/5">
                      {researchExp.map((research) => (
                        <div
                          key={research.title}
                          className="p-4 mt-2 border rounded-md shadow-md"
                        >
                          {research.dates && (
                            <span className="text-xs text-gray-400">
                              {research.dates}
                            </span>
                          )}
                          {research.title && (
                            <h4 className="font-bold text-bluePrimary">
                              {research.title}
                            </h4>
                          )}
                          <div>
                            {research.description}{" "}
                            {research.institute && `(${research.institute})`}
                          </div>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-left rounded-lg bg-bluePrimary/20 text-bluePrimary hover:bg-bluePrimary/25 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span className={`${open ? "font-bold" : ""}`}>
                      Internship
                    </span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-bluePrimary`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 rounded-lg bg-bluePrimary/5">
                      {internshipExp.map((research) => (
                        <div
                          key={research.title}
                          className="p-4 mt-2 border rounded-md shadow-md"
                        >
                          <span className="text-xs text-gray-400">
                            {research.dates}
                          </span>
                          <h4 className="font-bold text-bluePrimary">
                            {research.title}
                          </h4>
                          <p>{research.description}</p>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-left rounded-lg bg-bluePrimary/20 text-bluePrimary hover:bg-bluePrimary/25 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span className={`${open ? "font-bold" : ""}`}>Sports</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-bluePrimary`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 rounded-lg bg-bluePrimary/5">
                      {sportsExp.map((research) => (
                        <div
                          key={research.title}
                          className="p-4 mt-2 border rounded-md shadow-md"
                        >
                          <span className="text-xs text-gray-400">
                            {research.dates}
                          </span>
                          <h4 className="font-bold text-bluePrimary">
                            {research.title}
                          </h4>
                          <p>{research.description}</p>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-2" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 text-base font-medium text-left rounded-lg bg-bluePrimary/20 text-bluePrimary hover:bg-bluePrimary/25 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                    <span>Other Experience</span>
                    <FaChevronDown
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-bluePrimary`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 rounded-lg bg-bluePrimary/5">
                      {otherExp.map((research) => (
                        <div
                          key={research.title}
                          className="p-4 mt-2 border rounded-md shadow-md"
                        >
                          <span className="text-xs text-gray-400">
                            {research.dates}
                          </span>
                          <h4 className="font-bold text-bluePrimary">
                            {research.title}
                          </h4>
                          <p>{research.description}</p>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      {/* <div
        className="absolute -rotate-90 -right-[300px] select-none hidden lg:inline-block"
        style={{ zIndex: -1 }}
      >
        <span className="inline-block font-extrabold text-gray-100 uppercase text-8xl">
          Experiences
        </span>
      </div> */}
    </section>
  );
};

export default Experiences;
