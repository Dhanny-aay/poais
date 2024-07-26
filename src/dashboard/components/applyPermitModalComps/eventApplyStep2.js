import stepper from "./assets/Stepper1.svg";

const EventApplyStep2 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Permit for Event
      </p>

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
      <p className=" mt-4 text-[#272D37] font-Inter font-medium text-sm"></p>
      <label
        htmlFor=""
        className="w-full mt-3 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Address
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          id=""
        />
      </label>
      <div className=" flex flex-row items-center justify-between w-full mt-4">
        <label
          htmlFor=""
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Local Government Area of Residence
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
          State of Residence
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

export default EventApplyStep2;
