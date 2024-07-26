import React from "react";
import stepper from "./assets/Stepper.svg";

const ApplyStep1 = ({ setPermitType, setCategory }) => {
  return (
    <>
      <img src={stepper} className="w-full mt-4" alt="Stepper" />
      <p className="font-Inter font-medium text-[#272D37] text-lg mt-3">
        Application Type
      </p>
      <label
        htmlFor="permitType"
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Permit type
        <span className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            id="permitType"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">
              Choose if it is an organization permit or individual
            </option>
            <option value="individual">Individual</option>
            <option value="organization">Organization</option>
          </select>
        </span>
      </label>
      <label
        htmlFor="category"
        className="w-full mt-3 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Type of Permit
        <span className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            id="category"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm"
            onChange={(e) => setPermitType(e.target.value)}
          >
            <option value="">Choose permit type</option>
            <option value="Motor">Motor Permit</option>
            <option value="Event">Event Permit</option>
            <option value="Business">Business Permit</option>
          </select>
        </span>
      </label>
    </>
  );
};

export default ApplyStep1;
