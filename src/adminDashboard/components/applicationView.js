import { useContext, useState } from "react";
import jpg from "./assets/jpg.svg";
import save from "./assets/save.svg";

import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";
import ApplicationReject from "./applicationReject";

const ApplicationView = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);
  const [makeVisible, setMakeVisible] = useState(false);
  return (
    <>
      {makeVisible && <ApplicationReject setMakeVisible={setMakeVisible} />}
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
          <div className=" flex w-full md:w-auto justify-between md:justify-normal items-center space-x-4">
            <button className=" w-[48%] md:w-auto px-4 py-[10px] rounded-[8px] bg-[#01813F] text-center font-Inter text-sm font-semibold text-white">
              Approve
            </button>
            <button
              onClick={() => {
                setMakeVisible(true);
              }}
              className=" w-[48%] md:w-auto px-4 py-[10px] rounded-[8px] bg-[#E84343] text-center font-Inter text-sm font-semibold text-white"
            >
              Deny
            </button>
          </div>
        </div>

        {/* permit Info  */}
        <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
          Permit info
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
          Update your permit details here.
        </p>
        <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
          <div className=" w-full  p-6">
            <div className=" flex items-center justify-between w-full">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Permit type
                <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                  <select
                    name=""
                    className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                    id=""
                  >
                    <option value="">Choose permit type</option>
                  </select>
                </span>
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Use of Permit
                <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                  <select
                    name=""
                    className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                    id=""
                  >
                    <option value="">Choose Use of Permit</option>
                  </select>
                </span>
              </label>
            </div>
            <label
              htmlFor=""
              className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Purpose of Permit
              <textarea
                placeholder="Enter Purpose of Permit"
                className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
              />
            </label>
          </div>
        </div>

        {/* Owner Information  */}
        <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
          Owner Information
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
          Update owner information here.
        </p>
        <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
          <div className=" w-full  p-6">
            <div className=" flex items-center justify-between w-full">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                First Name
                <input
                  placeholder="Enter First Name"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Address
                <input
                  placeholder="Enter Address"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" flex items-center justify-between w-full mt-4">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Local Government Area of Residence
                <input
                  placeholder="Enter Local Government Area of Residence"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                State of Residence
                <input
                  placeholder="Enter State of Residence"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" flex items-center justify-between w-full mt-4">
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
                Email Address
                <input
                  placeholder="Enter Email Address"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" flex items-center justify-between w-full mt-4">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                ID Verification
                <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                  <select
                    name=""
                    className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                    id=""
                  >
                    <option value="">Choose ID type</option>
                  </select>
                </span>
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                ID Number
                <input
                  placeholder="Enter ID Number"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" mt-3 w-full border-b border-[#DAE0E6] items-center py-6 flex justify-between ">
              <div className=" flex flex-row items-center space-x-5">
                <img src={jpg} alt="" />
                <span className=" flex flex-col">
                  <p className="text-[#272D37] font-Inter font-medium text-sm">
                    ID Card Image
                  </p>
                  <p className=" text-[#5F6D7E] font-Inter font-normal text-xs mt-1 ">
                    8.00 mb
                  </p>
                </span>
              </div>
              <img src={save} alt="" />
            </div>
          </div>
        </div>
        {/* Driver/Rider Information  */}
        <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
          Driver/Rider Information
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
          Update your Driver/Rider Information here.
        </p>
        <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
          <div className=" w-full p-6">
            <div className=" flex items-center justify-between w-full">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                First Name
                <input
                  placeholder="Enter First Name"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Address
                <input
                  placeholder="Enter Address"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" flex items-center justify-between w-full mt-4">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Local Government Area of Residence
                <input
                  placeholder="Enter Local Government Area of Residence"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                State of Residence
                <input
                  placeholder="Enter State of Residence"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" flex items-center justify-between w-full mt-4">
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
                Email Address
                <input
                  placeholder="Enter Email Address"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" flex items-center justify-between w-full mt-4">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                ID Verification
                <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                  <select
                    name=""
                    className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                    id=""
                  >
                    <option value="">Choose ID type</option>
                  </select>
                </span>
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                ID Number
                <input
                  placeholder="Enter ID Number"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <div className=" mt-3 w-full border-b border-[#DAE0E6] items-center py-6 flex justify-between ">
              <div className=" flex flex-row items-center space-x-5">
                <img src={jpg} alt="" />
                <span className=" flex flex-col">
                  <p className="text-[#272D37] font-Inter font-medium text-sm">
                    ID Card Image
                  </p>
                  <p className=" text-[#5F6D7E] font-Inter font-normal text-xs mt-1 ">
                    8.00 mb
                  </p>
                </span>
              </div>
              <img src={save} alt="" />
            </div>
          </div>
        </div>
        {/* Driver/Rider Information  */}
        <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
          License Location Information
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
          Update your supporting documents here.
        </p>
        <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
          <div className=" w-full p-6">
            <label
              htmlFor=""
              className=" w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Town to Operate
              <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                <select
                  name=""
                  className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                  id=""
                >
                  <option value="">Choose Town</option>
                </select>
              </span>
            </label>

            <label
              htmlFor=""
              className=" w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs mt-4"
            >
              Local Government Area of Residence
              <input
                placeholder="Enter Local Government Area of Residence"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              />
            </label>
            <p className=" mt-4 font-Inter text-base text-[#272D37] font-medium">
              Duration of Permit
            </p>
            <div className=" flex items-center justify-between w-full mt-3">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Start date
                <input
                  placeholder=""
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Due date
                <input
                  placeholder=""
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationView;
