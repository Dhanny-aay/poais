import { useContext } from "react";
import {
  ActivePageContext,
  SidebarContext,
} from "../context/ActivePageContext";

import home from "./assets/House.svg";
import homeAc from "./assets/HouseAc.svg";
import folder from "./assets/Folders.svg";
import folderAc from "./assets/FoldersAc.svg";
import wallet from "./assets/Wallet.svg";
import walletAc from "./assets/WalletAc.svg";
import fileSearch from "./assets/FileSearch.svg";
import fileSearchAc from "./assets/FileSearchAc.svg";
import bell from "./assets/BellRinging.svg";
import bellAc from "./assets/BellRingingAc.svg";
import resour from "./assets/BookOpenText.svg";
import logo from "./assets/Logo.svg";
import close from "./assets/close.svg";
import chat from "./assets/ChatText.svg";
import gear from "./assets/Gear.svg";
import logout from "./assets/logout.svg";

const Sidebar = () => {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);

  const sidebar = [
    { name: "Home", img: home, activeImg: homeAc, page: "Home" },
    {
      name: "My Application",
      img: folder,
      activeImg: folderAc,
      page: "Application",
    },
    { name: "Payments", img: wallet, activeImg: walletAc, page: "Payments" },
    {
      name: "Permit Validation",
      img: fileSearch,
      activeImg: fileSearchAc,
      page: "Validation",
    },
    {
      name: "Notifications",
      img: bell,
      activeImg: bellAc,
      page: "Notifications",
    },
    {
      name: "Resources",
      img: resour,
      activeImg: resour,
      page: "Resources",
    },
  ];

  const bottom = [
    { name: "Support", img: chat, activeImg: chat, page: "Support" },
    { name: "Settings", img: gear, activeImg: gear, page: "Settings" },
  ];

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-[999] w-[80%] md:w-[40%] lg:w-[20%] h-[100vh] border-r border-[#E4E7EC] bg-white ${
          sidebarVisible
            ? "lg:translate-x-0 translate-x-0"
            : "lg:translate-x-0 -translate-x-full"
        } transition-transform`}
      >
        <div className=" w-full h-full relative">
          <div className=" w-full flex justify-between border-b py-3 h-[72px] px-6 border-[#FFFFFF] border-opacity-5">
            <div className=" flex items-center">
              <img src={logo} alt="" />
            </div>
            <img
              src={close}
              onClick={() => {
                setSidebarVisible(false);
              }}
              className=" lg:hidden w-3"
              alt=""
            />
          </div>

          <div className=" mt-5">
            <div className="">
              {/* Sidebar content */}
              {sidebar.map((item, index) => (
                <button
                  key={index}
                  className={`text-center py-3 px-6 flex w-full flex-row space-x-4 items-center ${
                    activePage === item.page ? "" : ""
                  }`}
                  onClick={() => handleClick(item.page)}
                >
                  <img
                    src={activePage === item.page ? item.activeImg : item.img}
                    className="w-4 h-4"
                    alt=""
                  />
                  <p
                    className={`font-Cabin font-semibold text-xs ${
                      activePage === item.page
                        ? "text-[#01903C]"
                        : "text-[#929292]"
                    }`}
                  >
                    {item.name}
                  </p>
                </button>
              ))}
            </div>

            <div className=" left-0 absolute bottom-6 w-full">
              <div className="">
                {bottom.map((item, index) => (
                  <button
                    key={index}
                    className={`text-center py-3 px-6 flex w-full flex-row space-x-4 items-center ${
                      activePage === item.page ? "" : ""
                    }`}
                    onClick={() => handleClick(item.page)}
                  >
                    <img
                      src={activePage === item.page ? item.activeImg : item.img}
                      className="w-4 h-4"
                      alt=""
                    />
                    <p
                      className={`font-Cabin font-semibold text-xs ${
                        activePage === item.page
                          ? "text-[#01903C]"
                          : "text-[#929292]"
                      }`}
                    >
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>

              <div className=" px-6">
                <div className=" mt-3 pt-3 border-t border-[#E4E7EC] w-full flex items-start justify-between">
                  <div className=" flex items-center space-x-4">
                    <span className=" w-8 h-8 bg-[#f5f5f5] rounded-full"></span>
                    <span className=" space-y-1">
                      <p className=" font-Inter text-xs font-semibold text-[#344054]">
                        Olivia Rhye
                      </p>
                      <p className=" font-Inter font-normal text-xs text-[#475467]">
                        olivia@untitledui.com
                      </p>
                    </span>
                  </div>
                  <img src={logout} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
