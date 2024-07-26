import { useContext } from "react";
import { SidebarContext } from "../context/ActivePageContext";
import add from "./assets/Add button.svg";

const EditApplication = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <p className=" font-Cabin font-bold text-xl text-[#101828]">
          Edit My Application
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-sm mt-1 border-b border-[#EAEBF0] w-full pb-4">
          Update your permit application here.
        </p>

        {/* permit Info  */}
        <p className=" font-Cabin font-bold text-lg text-[#101828] mt-6">
          Permit info
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-xs mt-1">
          Update your permit details here.
        </p>
        <div className=" mt-6 border border-[#E4E7EC] rounded-[12px] w-full">
          <div className=" w-full border-b border-[#E4E7EC] p-6">
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
          <div className=" w-full p-6 flex items-end">
            <div className="  flex space-x-3 items-end w-full justify-end">
              <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                Cancel
              </button>
              <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                Save changes
              </button>
            </div>
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
          <div className=" w-full border-b border-[#E4E7EC] p-6">
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
          </div>
          <div className=" w-full p-6 flex items-end">
            <div className="  flex space-x-3 items-end w-full justify-end">
              <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                Cancel
              </button>
              <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                Save changes
              </button>
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
          <div className=" w-full border-b border-[#E4E7EC] p-6">
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
          </div>
          <div className=" w-full p-6 flex items-end">
            <div className="  flex space-x-3 items-end w-full justify-end">
              <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                Cancel
              </button>
              <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                Save changes
              </button>
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
          <div className=" w-full border-b border-[#E4E7EC] p-6">
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
          <div className=" w-full p-6 flex items-end">
            <div className="  flex space-x-3 items-end w-full justify-end">
              <button className=" border border-[#D0D5DD] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#344054] font-semibold">
                Cancel
              </button>
              <button className=" bg-[#01903C] py-[10px] px-4 rounded-[8px] font-Inter text-xs text-[#fff] font-semibold">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditApplication;
