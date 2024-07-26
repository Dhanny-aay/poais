import stepper from "./assets/Stepper4.svg";

const LocationApplyStep5 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        License Location Information
      </p>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Town to Operate
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          placeholder="Enter Town"
          id=""
        />
      </label>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Local Government Area
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          placeholder="Enter Local Government Area"
          id=""
        />
      </label>
      <p className=" mt-4 text-[#272D37] font-Inter font-medium text-sm">
        Duration of Permit
      </p>
      <div className=" flex flex-row items-center justify-between w-full mt-3">
        <label
          htmlFor=""
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Start date
          <input
            type="text"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name=""
            id=""
          />
        </label>
        <label
          htmlFor=""
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Due date
          <input
            type="text"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name=""
            id=""
          />
        </label>
      </div>
    </>
  );
};

export default LocationApplyStep5;
