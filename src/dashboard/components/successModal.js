import xclose from "./assets/XClose button.svg";
import succ from "./assets/Base stepper.svg";
import copy from "./assets/Copy.svg";

const SuccessModal = ({ setSucessModal }) => {
  return (
    <>
      <div className=" w-[120%] h-[100vh] bg-[#1212128d] z-[99999] fixed top-0 -left-[20%] flex justify-center items-center">
        <div className="ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] relative md:h-[500px] 2xl:h-[700px] w-[600px]">
          <div className=" w-full h-full overflow-auto flex flex-col items-center justify-center ">
            <img
              src={xclose}
              onClick={() => {
                setSucessModal(false);
              }}
              className=" absolute top-6 right-6"
              alt=""
            />
            <img src={succ} className="" alt="" />
            <p className=" font-Inter mt-3 text-center font-semibold text-lg text-[#272D37]">
              Edit My Application
            </p>
            <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
              Thank you for applying for a permit. Your application is now under
              review.
            </p>
            <label
              htmlFor=""
              className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Application ID
              <span className=" w-full h-full relative">
                <input
                  type="text"
                  className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
                  name=""
                  placeholder="DF11CA4"
                  id=""
                />
                <img src={copy} className=" absolute right-4 top-5" alt="" />
              </span>
            </label>
            <label
              htmlFor=""
              className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Submission Date
              <input
                type="text"
                className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
                name=""
                id=""
              />
            </label>
            <label
              htmlFor=""
              className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Permit Type
              <input
                type="text"
                className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
                name=""
                id=""
              />
            </label>
            <button
              // onClick={handleSubmit}
              className=" w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] mt-4 font-semibold flex justify-center items-center text-base"
            >
              {"Track Application"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
