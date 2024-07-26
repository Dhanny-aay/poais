const Manual = () => {
  return (
    <>
      <label
        htmlFor=""
        className=" flex w-full flex-col font-Inter text-sm font-medium text-[#272D37]"
      >
        Permit Number
        <input
          type="text"
          className=" mt-3 w-full py-3 px-4 border border-[#DAE0E6] rounded-[6px] text-sm font-normal font-Inter text-[#919BA7]"
          placeholder="Enter Permit Number"
        />
        <button className=" w-full mt-6 bg-[#01903C] py-3 rounded-[6px] font-Inter font-semibold text-base text-white">
          Validate Permit
        </button>
      </label>
    </>
  );
};

export default Manual;
