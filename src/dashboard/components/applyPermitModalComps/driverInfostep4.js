import stepper from "./assets/Stepper3.svg";

const DriverInfoStep4 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Driver/Rider Information
      </p>
      <div className=" flex flex-row items-center justify-between w-full mt-4">
        <label
          htmlFor=""
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          First Name
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
          Last Name
          <input
            type="text"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name=""
            id=""
          />
        </label>
      </div>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
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
      <div className=" flex flex-row items-center justify-between w-full mt-4">
        <label
          htmlFor=""
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Phone Number
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
          Email Address
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

export default DriverInfoStep4;
