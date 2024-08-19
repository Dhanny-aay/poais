import xclose from "./assets/XClose button.svg";
import greenID from "./assets/IdentificationBadgeGreen.svg";
import arrow from "./assets/down.svg";
import permClose from "./assets/permClose.svg";
import { useState } from "react";

const AddPermitModal = ({ setMakeVisible }) => {
  return (
    <>
      <div className=" w-full md:w-[120%] h-full bg-[#1212128d] z-[99999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
        <div className=" md:ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] w-[600px]">
          <div className=" w-full h-full overflow-auto ">
            <span className=" w-full flex items-start justify-between">
              <img src={greenID} className="" alt="" />
              <img
                onClick={() => {
                  setMakeVisible(false);
                }}
                src={xclose}
                className=" "
                alt=""
              />
            </span>
            <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
              Add New Permit
            </p>
            <label
              htmlFor=""
              className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Local Government Area
              <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                <select
                  name=""
                  className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                  id=""
                >
                  <option value="">Choose LGA</option>
                  <option value="Incomplete Application">
                    Incomplete Application
                  </option>
                </select>
              </span>
            </label>
            <label
              htmlFor=""
              className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Applicant Type
              <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                <select
                  name=""
                  className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                  id=""
                >
                  <option value="">Choose Applicant</option>
                  <option value="Incomplete Application">
                    Incomplete Application
                  </option>
                </select>
              </span>
            </label>
            <div className=" flex items-center justify-between w-full mt-6">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Permit Price
                <input
                  placeholder="₦0.00"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
              >
                Permit Duration
                <input
                  placeholder="0 Days"
                  className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
                />
              </label>
            </div>
            <label
              htmlFor=""
              className=" w-full mt-6 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Describe Permit
              <textarea
                placeholder="Enter Describe Permit"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              ></textarea>
            </label>
            <div className=" w-full mt-4 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setMakeVisible(false);
                }}
                className=" w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
              >
                Cancel
              </button>
              <button
                // onClick={handleSubmit}
                className=" w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
              >
                {"Confirm"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPermitModal;
