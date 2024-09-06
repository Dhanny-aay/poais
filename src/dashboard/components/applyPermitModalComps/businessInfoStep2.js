import stepper from "./assets/Stepper1.svg";

const BusinessInfoStep2 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Business Information
      </p>

      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Business Name
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
        Business Type
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name=""
          id=""
        />
      </label>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-row items-end justify-between text-[#272D37] font-Inter font-medium text-xs"
      >
        <div className=" w-[70%]">
          CAC Registration Number
          <input
            type="text"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name=""
            id=""
          />
        </div>
        <button className=" h-full w-[28%]  rounded-[8px] font-Inter text-white font-semibold text-xs bg-[#01903C] py-[15px]">
          Verify
        </button>
      </label>
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
    </>
  );
};

export default BusinessInfoStep2;
