import { useContext, useState } from "react";
import burger from "./assets/burger.svg";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";
import chev from "./assets/chevron-left.svg";

const Headbar = () => {
  const { activePage, setActivePage } = useContext(AdminActivePageContext);
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);

  const handleBackClick = () => {
    setActivePage("Home");
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="  w-full lg:w-[80%] fixed top-0 lg:left-[20%] h-[72px] px-8 py-3 z-[99] border-b bg-[#fff] border-[#EAEBF0] flex flex-row justify-between items-center">
        <div className=" flex items-center space-x-4 lg:space-x-0">
          <img
            src={burger}
            className=" w-6 z-[9999] lg:hidden"
            alt=""
            onClick={toggleSidebar}
          />
          {activePage === "Home" ? (
            <p className="text-black font-bold text-2xl font-Cabin">
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
              <p className="text-black font-bold text-2xl font-Cabin">
                {activePage}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Headbar;
