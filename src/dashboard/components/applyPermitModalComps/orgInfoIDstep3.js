import stepper from "./assets/Stepper2.svg";
import { useEffect, useState } from "react";

const OrgInfoIDStep3 = ({ handleNext, handleBack }) => {
  const [stepData, setStepData] = useState({
    nature: "",
    primary_activity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
            name="nature"
            id="nature"
            value={stepData.nature}
            onChange={handleChange}
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
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          placeholder="Enter details of primary activity"
          name="primary_activity"
          id="primary_activity"
          value={stepData.primary_activity}
          onChange={handleChange}
        ></textarea>
      </label>

      <div className="flex justify-center gap-4 pt-6 pb-4">
        <button
          className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default OrgInfoIDStep3;
