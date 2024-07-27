import { useContext, useState } from "react";
import {
  ActivePageContext,
  SidebarContext,
} from "../context/ActivePageContext";
import chev from "./assets/chevron-left.svg";
import burger from "./assets/burger.svg";
import ApplyPermitModal from "./applyPermitModal";
import SuccessModal from "./successModal";

const Headbar = () => {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const [makeModalVisible, setMakeModalVisible] = useState(false);
  const [successModal, setSucessModal] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleBackClick = () => {
    setActivePage("Home");
  };

  return (
    <>
      {makeModalVisible && (
        <ApplyPermitModal setMakeModalVisible={setMakeModalVisible} />
      )}
      {successModal && <SuccessModal setSucessModal={setSucessModal} />}
      <div className="  w-full lg:w-[80%] fixed top-0 lg:left-[20%] h-[72px] px-6 md:px-8 py-3 z-[99] border-b bg-[#fff] border-[#EAEBF0] flex flex-row justify-between items-center">
        <div className=" flex items-center space-x-4 lg:space-x-0">
          <img
            src={burger}
            className=" w-6 z-[9999] lg:hidden"
            alt=""
            onClick={toggleSidebar}
          />
          {activePage === "Home" ? (
            <p className="text-black font-bold text-base md:text-2xl font-Cabin">
              Welcome Back, Veek!
            </p>
          ) : (
            <div className="flex items-center space-x-3">
              <button
                onClick={handleBackClick}
                className="text-[#01903C] font-Inter text-xs font-bold flex items-center space-x-3"
              >
                <img src={chev} className=" w-4 h-4" alt="" />
                Back
              </button>
              <p className="text-black font-bold text-base md:text-2xl font-Cabin">
                {activePage}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={() => {
            setMakeModalVisible(true);
          }}
          className=" bg-[#01903C] py-2 px-4 rounded-[8px] font-Inter text-white font-semibold text-xs"
        >
          Apply for Permit
        </button>
      </div>
    </>
  );
};

export default Headbar;
