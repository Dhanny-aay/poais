import { useContext } from "react";
import { SidebarContext } from "../context/ActivePageContext";
import add from "./assets/Add button.svg";

const Settings = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <div className=" flex items-center justify-between border-b border-[#EAEBF0] w-full pb-4">
          <div>
            <p className=" font-Cabin font-bold text-xl text-[#101828]">
              Personal info
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-sm mt-1 ">
              Update your photo and personal details here.
            </p>
          </div>
          <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
            Save
          </button>
        </div>

        <div className="flex items-center justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              Your photo
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-sm mt-1 ">
              This will be displayed on your profile.
            </p>
          </div>

          <div className=" w-[500px] flex items-center justify-center">
            <span className=" w-20 h-20 rounded-full bg-[#f5f5f5]"></span>
          </div>
        </div>

        <div className="flex items-start justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              Name
            </p>
          </div>

          <div className=" w-[560px] flex items-center justify-between">
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] font-medium text-xs "
            >
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
          </div>
        </div>
        <div className="flex items-start justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              Email address
            </p>
          </div>

          <div className=" w-[560px] flex items-center justify-between">
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] font-medium text-xs "
            >
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
          </div>
        </div>
        <div className="flex items-start justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              Home address
            </p>
          </div>

          <div className=" w-[560px] flex items-center justify-between">
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] font-medium text-xs "
            >
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
          </div>
        </div>
        <div className="flex items-start justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              ID Document Verification
            </p>
          </div>

          <div className=" w-[560px] flex items-center justify-between">
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] font-medium text-xs "
            >
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
          </div>
        </div>
        <div className="flex items-start justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              State of Origin
            </p>
          </div>

          <div className=" w-[560px] flex items-center justify-between">
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
            >
              State of Origin
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
            <label
              htmlFor=""
              className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
            >
              Local Government Area
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
          </div>
        </div>
        <div className="flex items-start justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              Other information's
            </p>
          </div>
          <div className=" w-[560px]">
            <div className=" w-full flex items-center justify-between">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                Gender
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                Date of Birth
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
            </div>
            <div className=" w-full flex items-center justify-between mt-3">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                Phone Number
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                Profession/Occupation
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between border-b border-[#EAEBF0] w-full pb-4 mt-5 pr-[15%]">
          <div>
            <p className=" font-Inter font-semibold text-base text-[#344054]">
              Next of Kin Information
            </p>
          </div>
          <div className=" w-[560px]">
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] font-medium text-xs "
            >
              Full Name
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] mt-3 font-medium text-xs "
            >
              Address
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] mt-3 font-medium text-xs"
            >
              ID Verification
              <span className=" w-full  border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-3">
                <select
                  name=""
                  className=" w-full text-[#101828] font-Inter text-base font-normal"
                  id=""
                >
                  <option value="">Choose ID type</option>
                </select>
              </span>
            </label>
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] mt-3 font-medium text-xs "
            >
              ID Number
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
            <div className=" mt-3 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-6">
              <img src={add} alt="" />
              <p className=" mt-3 text-xl font-medium font-Inter text-[#272D37]">
                Drop your Files Here
              </p>
              <p className=" mt-1 text-xs font-normal font-Inter text-[#5F6D7E]">
                <span className=" font-medium text-[#01903C] mr-1">
                  Browse Files
                </span>
                from your Computer
              </p>
            </div>

            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] mt-3 font-medium text-xs "
            >
              Relationship
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>

            <div className=" w-full flex items-center justify-between mt-3">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                State of Origin
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                Local Government Area
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
            </div>
            <div className=" w-full flex items-center justify-between mt-3">
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                Gender
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
              <label
                htmlFor=""
                className=" w-[48%] flex flex-col font-Inter text-[#344054] font-medium text-xs "
              >
                Date of Birth
                <input
                  type="text"
                  className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                  name=""
                  placeholder="Olivia Rhye"
                  id=""
                />
              </label>
            </div>

            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] mt-3 font-medium text-xs "
            >
              Phone Number
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
            <label
              htmlFor=""
              className=" w-full flex flex-col font-Inter text-[#344054] mt-3 font-medium text-xs "
            >
              Profession/Occupation
              <input
                type="text"
                className=" w-full border border-[#D0D5DD] rounded-[8px] mt-2 px-4 py-2 text-[#101828] font-Inter text-base font-normal"
                name=""
                placeholder="Olivia Rhye"
                id=""
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
