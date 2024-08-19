import xclose from "./assets/XClose button.svg";
import greenID from "./assets/IdentificationBadgeGreen.svg";
import arrow from "./assets/down.svg";
import permClose from "./assets/permClose.svg";
import { useState } from "react";

const NewRoleModal = ({ setMakeVisible }) => {
  const [permContainer, setPermContainer] = useState(false);

  const togglePerm = () => {
    setPermContainer(!permContainer);
  };
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
              Add New Role
            </p>
            <label
              htmlFor=""
              className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Role Name
              <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                <select
                  name=""
                  className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                  id=""
                >
                  <option value="">Choose Role Name</option>
                  <option value="Incomplete Application">
                    Incomplete Application
                  </option>
                </select>
              </span>
            </label>
            <label
              htmlFor=""
              className=" w-full mt-6 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Postal Code
              <textarea
                placeholder="Enter Postal Code"
                className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3 text-[#919BA7] font-normal font-Inter text-sm"
              ></textarea>
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

export default NewRoleModal;
