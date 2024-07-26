import { useContext, useState } from "react";
import { SidebarContext } from "../context/ActivePageContext";
import Scan from "./permitValidateComp/scan";
import Manual from "./permitValidateComp/manual";

const PermitValidation = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const [activeButton, setActiveButton] = useState("scan");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <p className=" font-Cabin font-bold text-xl text-[#101828]">
          Permit validation
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-sm mt-1">
          Check for permit authenticity here.
        </p>

        <div className="bg-[#F5F5F5] mt-6 p-1 rounded-[60px] flex items-center justify-between">
          <button
            className={`w-1/2 py-3 rounded-[25px] font-Inter font-medium text-black text-base ${
              activeButton === "scan" ? "bg-[#FFFFFF]" : ""
            }`}
            onClick={() => handleButtonClick("scan")}
          >
            Scan QR Code
          </button>
          <button
            className={`w-1/2 py-3 rounded-[25px] font-Inter font-medium text-black text-base ${
              activeButton === "manual" ? "bg-[#FFFFFF]" : ""
            }`}
            onClick={() => handleButtonClick("manual")}
          >
            Manual Check
          </button>
        </div>

        <div className="mt-6">
          {activeButton === "scan" ? <Scan /> : <Manual />}
        </div>
      </div>
    </>
  );
};

export default PermitValidation;
