import { useState } from "react";
import arrowDown from "./assets/arrow-down.svg";

const Faq = () => {
  const faqsData = [
    {
      question: "Who needs to apply for a permit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "How long does the application process take?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "Can I modify my permit after issuance?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "What documents do I need to apply?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "How do I renew my permit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropDown = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className=" w-full px-4 md:px-14 py-8 md:py-16">
        <p className=" font-Cabin font-bold text-center text-[#000] text-3xl">
          Frequently asked questions?
        </p>
        <div className=" w-full mt-16">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              onClick={() => toggleDropDown(index)}
              className={`border-y py-6 w-full faq border-[#EAEBF0]${
                openIndex === index ? " active" : ""
              }`}
            >
              <div className="flex flex-row w-full justify-between items-center">
                <p className="font-Inter text-[#000000] text-sm md:text-base lg:text-lg font-medium">
                  {faq.question}
                </p>
                <img
                  src={arrowDown}
                  className={`${
                    openIndex === index ? "transform rotate-180" : ""
                  } transition-transform duration-300`}
                  alt=""
                />
              </div>
              <div className={`answer${openIndex === index ? " open" : ""}`}>
                <p className="font-Inter text-[#000000] font-normal text-sm md:text-base mt-5 transition-all duration-500">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
