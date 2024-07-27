import { useContext, useState } from "react";
import AllNoti from "./notificationComp/allNoti";
import UnreadNoti from "./notificationComp/unreadNoti";
import AppUpdateNoti from "./notificationComp/appUpdateNoti";
import PayNoti from "./notificationComp/payNoti";
import { AdminSidebarContext } from "../contexts/AdminActivePageContext";

const Notification = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);
  const [activeButton, setActiveButton] = useState("AllNotifications");

  const buttons = [
    {
      label: "All Notifications",
      value: "AllNotifications",
      component: <AllNoti />,
      count: "0",
    },
    {
      label: "Unread Notifications",
      value: "UnreadNotifications",
      component: <UnreadNoti />,
      count: "0",
    },
    {
      label: "Application Update",
      value: "ApplicationUpdate",
      component: <AppUpdateNoti />,
      count: "0",
    },
    {
      label: "Payment Notification",
      value: "PaymentNotification",
      component: <PayNoti />,
      count: "0",
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
        <p className=" font-Cabin font-bold text-xl text-[#101828]">
          Notifications
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-sm mt-1">
          View all notifications here
        </p>

        <div className=" mt-6">
          <div className="w-full border-b border-[#EAECF0] h-full">
            <div className=" grid grid-cols-2 md:flex items-center">
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
                  <span className=" w-6 h-6 bg-[#F1F1F1] rounded-[5px] px-2 py-[2px] text-center ml-3 font-medium font-Cabin text-xs">
                    {button.count}
                  </span>
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

export default Notification;
