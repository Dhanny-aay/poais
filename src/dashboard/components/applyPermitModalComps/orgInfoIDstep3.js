import stepper from "./assets/Stepper2.svg";

const OrgInfoIDStep3 = () => {
  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Organization Details
      </p>
      <label
        htmlFor=""
        className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Nature of Business /Organization
        <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            name=""
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
            id=""
          >
            <option value="">Choose if Its for Profit/NGO</option>
          </select>
        </span>
      </label>
      <label
        htmlFor=""
        className=" mt-4 w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Primary Activity
        <textarea
          name=""
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          placeholder="Enter details of primary activity"
          id=""
        ></textarea>
      </label>
    </>
  );
};

export default OrgInfoIDStep3;
