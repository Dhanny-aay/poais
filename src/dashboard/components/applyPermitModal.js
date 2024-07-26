import fileplus from "./assets/FilePlus.svg";
import stepper from "./assets/Stepper.svg";
import xclose from "./assets/XClose button.svg";

const ApplyPermitModal = ({ setMakeModalVisible }) => {
  return (
    <>
      <div className=" w-[120%] h-[100vh] bg-[#1212128d] z-[99999] fixed top-0 -left-[20%] flex justify-center items-center">
        <div className=" w-full h-full flex justify-center items-center">
          <div className="ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] w-[600px]">
            <span className=" w-full flex items-start justify-between">
              <img src={fileplus} className="" alt="" />
              <img
                onClick={() => {
                  setMakeModalVisible(false);
                }}
                src={xclose}
                className=" "
                alt=""
              />
            </span>
            <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
              Edit My Application
            </p>
            <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
              Update your permit application here.
            </p>
            <img src={stepper} className=" w-full mt-4" alt="" />
            <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
              Application Type
            </p>
            <label
              htmlFor=""
              className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Permit type
              <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                <select
                  name=""
                  className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                  id=""
                >
                  <option value="">
                    Choose if its a business permit or individual
                  </option>
                </select>
              </span>
            </label>
            <label
              htmlFor=""
              className=" w-full mt-3 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Type of Permit
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
            <div className=" w-full mt-4 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setMakeModalVisible(false);
                }}
                className=" w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
              >
                Cancel
              </button>
              <button
                // onClick={handleSubmit}
                className=" w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
              >
                {"Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyPermitModal;
