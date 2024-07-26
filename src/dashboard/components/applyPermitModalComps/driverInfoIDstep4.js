import stepper from "./assets/Stepper3.svg";
import add from "./assets/Add button.svg";

const DriverInfoIDstep4 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Driver/Rider Information
      </p>
      <label
        htmlFor=""
        className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
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
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        ID Number
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          placeholder="Enter ID Number"
          id=""
        />
      </label>
      <div className=" mt-4 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-3">
        <img src={add} alt="" />
        <p className=" mt-3 text-xl font-medium font-Inter text-[#272D37]">
          Drop your Files Here
        </p>
        <p className=" mt-1 text-xs font-normal font-Inter text-[#5F6D7E]">
          <span className=" font-medium text-[#01903C] mr-1">Browse Files</span>
          from your Computer
        </p>
      </div>
    </>
  );
};

export default DriverInfoIDstep4;
