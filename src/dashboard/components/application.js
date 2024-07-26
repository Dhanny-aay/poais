import { useContext, useState } from "react";
import { SidebarContext } from "../context/ActivePageContext";
import ApprovedApp from "./applicationComps/approvedApp";
import PendingApp from "./applicationComps/pendingApp";
import RejectedApp from "./applicationComps/rejectedApp";

const Application = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const [activeButton, setActiveButton] = useState("ApprovedApplications");

  const buttons = [
    {
      label: "Approved Applications",
      value: "ApprovedApplications",
      component: <ApprovedApp />,
    },
    {
      label: "Pending Applications",
      value: "PendingApplications",
      component: <PendingApp />,
    },
    {
      label: "Rejected Applications",
      value: "RejectedApplications",
      component: <RejectedApp />,
    },
  ];

  const handleButtonClick = (value) => {
    setActiveButton(value);
    // Add logic for button click action here
  };

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <div className="">
          <div className="w-full border-b border-[#EAECF0] h-full">
            <div className="flex">
              {buttons.map((button, index) => (
                <button
                  key={index}
                  className={`font-semibold font-Inter text-sm pb-4 px-2 transition-all ${
                    activeButton === button.value
                      ? "border-b-2 border-[#01903C] text-[#01903C]"
                      : " text-[#667085]"
                  }`}
                  onClick={() => handleButtonClick(button.value)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className=" mt-6">
          {buttons.find((button) => button.value === activeButton).component}
        </div>
      </div>
    </>
  );
};

export default Application;
