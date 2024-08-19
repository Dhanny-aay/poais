import { useContext, useState } from "react";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";
import userPlus from "./assets/user-plus.svg";
import permClose from "./assets/permClose.svg";
import arrow from "./assets/down.svg";

const ViewStaff = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);
  const { activePage, setActivePage } = useContext(AdminActivePageContext);
  const [permContainer, setPermContainer] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
  };

  const togglePerm = () => {
    setPermContainer(!permContainer);
  };
  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <div className=" flex flex-col md:flex-row space-y-3 md:space-y-0 items-start md:items-center w-full justify-between border-b border-[#EAEBF0] pb-4">
          <div>
            <p className=" font-Cabin font-bold text-xl text-[#101828]">
              Club house permit
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-sm mt-1 ">
              Application ID: DF11CA4
            </p>
          </div>
          <div className=" flex w-full md:w-auto justify-between md:justify-normal items-center">
            <button className=" w-[48%] md:w-auto px-4 py-[10px] rounded-[8px] bg-[#E84343] text-center font-Inter flex items-center text-sm font-semibold text-white space-x-3">
              <img src={userPlus} className=" mr-2" alt="" />
              Delete Profile
            </button>
          </div>
        </div>

        <div className=" mt-6">
          <div className=" flex items-center justify-between w-full">
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Full Name
              <input
                placeholder="Enter Full Name"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              />
            </label>
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Email Address
              <input
                placeholder="Enter Email Address"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              />
            </label>
          </div>
          <div className=" flex items-center justify-between w-full mt-6">
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Phone Number
              <input
                placeholder="Enter Phone Number"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              />
            </label>
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Staff Center Name
              <input
                placeholder="Enter Email Address"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              />
            </label>
          </div>
          <label
            htmlFor=""
            className=" w-full mt-6 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
          >
            Staff Center Address
            <input
              placeholder="Enter Email "
              className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
            />
          </label>
          <div className=" flex items-center justify-between w-full mt-6">
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Staff Center Local Government
              <input
                placeholder="Enter Phone Number"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              />
            </label>
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Staff Center State
              <input
                placeholder="Enter Email Address"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              />
            </label>
          </div>
          <label
            htmlFor=""
            className=" w-full mt-6 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
          >
            Role
            <input
              placeholder="Enter Email "
              className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
            />
          </label>
          <label
            htmlFor=""
            className=" w-full mt-6 flex flex-col text-[#272D37] font-Inter font-medium text-xs relative"
          >
            Permission
            <div
              onClick={() => {
                togglePerm();
              }}
              className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm flex flex-row justify-between"
            >
              <p>Select Permission</p>
              <img src={arrow} alt="" />
            </div>
            {permContainer && (
              <div className=" w-full px-3 py-2 bg-white border border-[#DAE0E6] rounded-[5px] absolute left-0 top-[72px] space-y-2">
                <span className=" flex items-center space-x-2">
                  <input type="checkbox" className=" w-3 h-3" />
                  <p className="text-[#272D37] font-Inter font-normal text-sm">
                    Add New Users
                  </p>
                </span>
                <span className=" flex items-center space-x-2">
                  <input type="checkbox" className=" w-3 h-3" />
                  <p className="text-[#272D37] font-Inter font-normal text-sm">
                    View Permit Application
                  </p>
                </span>
                <span className=" flex items-center space-x-2">
                  <input type="checkbox" className=" w-3 h-3" />
                  <p className="text-[#272D37] font-Inter font-normal text-sm">
                    Delete Users
                  </p>
                </span>
                <span className=" flex items-center space-x-2">
                  <input type="checkbox" className=" w-3 h-3" />
                  <p className="text-[#272D37] font-Inter font-normal text-sm">
                    View Payment History
                  </p>
                </span>
                <button className=" w-full py-[10px] bg-[#01903C] rounded-[10px] text-white font-Cabin font-medium text-sm">
                  Done
                </button>
              </div>
            )}
          </label>

          <div className=" flex mt-3 space-x-2 items-center">
            <button className=" bg-[#F1F1F1] rounded-[16px] px-[10px] py-[2px] text-[#7a7a7a] font-Inter text-sm font-medium flex items-center">
              Add New Users
              <img src={permClose} className=" ml-1" alt="" />
            </button>
            <button className=" bg-[#F1F1F1] rounded-[16px] px-[10px] py-[2px] text-[#7a7a7a] font-Inter text-sm font-medium flex items-center">
              Grant Permits
              <img src={permClose} className=" ml-1" alt="" />
            </button>
            <button className=" bg-[#F1F1F1] rounded-[16px] px-[10px] py-[2px] text-[#7a7a7a] font-Inter text-sm font-medium flex items-center">
              Delete Users
              <img src={permClose} className=" ml-1" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStaff;
