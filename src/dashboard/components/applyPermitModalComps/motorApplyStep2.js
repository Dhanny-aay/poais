import stepper from "./assets/Stepper1.svg";

const MotorApplyStep2 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Permit for Motor Vehicles
      </p>
      <div className="mt-4 w-full flex items-center justify-between">
        <label
          htmlFor=""
          className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Vehicle type
          <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
            <select
              name=""
              className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
              id=""
            >
              <option value="">Choose Vehicle type</option>
            </select>
          </span>
        </label>
        <label
          htmlFor=""
          className=" w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Use of Vehicle
          <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
            <select
              name=""
              className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
              id=""
            >
              <option value="">Choose Use of Vehicle</option>
            </select>
          </span>
        </label>
      </div>

      <label
        htmlFor=""
        className=" mt-4 w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Purpose of Permit
        <textarea
          name=""
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          placeholder="Enter purpose of permit"
          id=""
        ></textarea>
      </label>
    </>
  );
};

export default MotorApplyStep2;
