import { useContext, useState } from "react";
import {
  ActivePageContext,
  SidebarContext,
} from "../context/ActivePageContext";

import burger from "./assets/burger.svg";
import ApplyPermitModal from "./applyPermitModal";

const Headbar = () => {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const [makeModalVisible, setMakeModalVisible] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      {makeModalVisible && (
        <ApplyPermitModal setMakeModalVisible={setMakeModalVisible} />
      )}
      <div className="  w-full lg:w-[80%] fixed top-0 lg:left-[20%] h-[72px] px-8 py-3 z-[99] border-b bg-[#fff] border-[#EAEBF0] flex flex-row justify-between items-center">
        <div className=" flex items-center space-x-4 lg:space-x-0">
          <img
            src={burger}
            className=" w-6 z-[9999] lg:hidden"
            alt=""
            onClick={toggleSidebar}
          />
          <p className=" text-black font-bold text-2xl font-Cabin">
            Welcome Back, Veek!
          </p>
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
