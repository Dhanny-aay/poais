import { handleCompanyVerify } from "../../../controllers/verificationController";
import { IdentifierContext } from "../../context/applicationContext";
import { CompanyResponseContext } from "../../context/verifyContext";
import stepper from "./assets/Stepper2.svg";
import load from "./assets/load.gif";
import { useContext, useEffect, useState } from "react";

const OrgInfoStep3 = ({ handleNext, handleBack }) => {
  const { identifier, setIdentifier } = useContext(IdentifierContext);
  const { companyResponse, setCompanyResponse } = useContext(
    CompanyResponseContext
  );
  const [regNumber, setRegNumber] = useState("");
  const [type, setType] = useState("");
  const [application_identifier, setApplication_identifier] =
    useState(identifier);
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false); // Control for "Next" button
  const [errors, setErrors] = useState({}); // State to hold errors

  // const [stepData, setStepData] = useState({
  //   type: "",
  //   registration_number: "",
  //   name: "",
  //   phone: "",
  //   email: "",
  //   address: "",
  //   lga: "",
  //   state: "",
  // });

  // useEffect(() => {
  //   updateFormData("business", stepData);
  // }, [stepData]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setStepData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const validateFields = () => {
    const newErrors = {};
    if (!type) newErrors.type = "Please select a business type.";
    if (!regNumber)
      newErrors.regNumber = "Business registration number is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSuccess = (response) => {
    setLoading(false);
    setCompanyResponse(response.data);
    setIsVerified(true); // Enable "Next" button on success
  };

  const onError = () => {
    setLoading(false);
    setIsVerified(false); // Keep "Next" button disabled
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    setLoading(true);
    const userData = { regNumber, type, application_identifier };

    handleCompanyVerify(userData, onSuccess, onError);
  };

  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Organization Details
      </p>

      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Business Type
        <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
            name="type"
            id="type"
            // value={stepData.type}
            onChange={(e) => {
              setType(e.target.value);
              setErrors((prev) => ({ ...prev, type: "" })); // Clear error on change
            }}
          >
            <option value="">Choose Business Type</option>
            <option value="Business">Business</option>
            <option value="Limited Company">Limited Company</option>
            <option value="Incorprated Trustee">Incorprated Trustee</option>
          </select>
        </span>
        {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
      </label>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-row items-end justify-between text-[#272D37] font-Inter font-medium text-xs"
      >
        <div className=" w-[70%]">
          Business Registration Number
          <input
            type="text"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name="registration_number"
            id="registration_number"
            // value={stepData.registration_number}
            onChange={(e) => {
              setRegNumber(e.target.value);
              setErrors((prev) => ({ ...prev, regNumber: "" })); // Clear error on change
            }}
          />
          {errors.regNumber && (
            <p className="text-red-500 text-xs">{errors.regNumber}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          className=" h-full w-[28%]  rounded-[8px] font-Inter text-white font-semibold text-xs bg-[#01903C] py-[15px] flex items-center justify-center"
        >
          {loading ? <img src={load} className=" w-4" alt="" /> : "Verify"}
        </button>
      </label>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Name of Organization
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          name="name"
          id="name"
          disabled
          value={companyResponse.name}
          // onChange={handleChange}
        />
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
            name="phone"
            id="phone"
            disabled
            value={companyResponse.phone}
            // onChange={handleChange}
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
            name="email"
            id="email"
            disabled
            value={companyResponse.email}
            // onChange={handleChange}
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
          name="address"
          id="address"
          disabled
          value={companyResponse.head_office}
          // onChange={handleChange}
        />
      </label>
      <div className=" flex flex-row items-end justify-between w-full mt-4">
        <label
          htmlFor=""
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Local Government Area of Residence
          <input
            type="text"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name="lga"
            id="lga"
            disabled
            value={companyResponse.lga}
            // onChange={handleChange}
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
            name="state"
            id="state"
            disabled
            value={companyResponse.state}
            // onChange={handleChange}
          />
        </label>
      </div>

      <div className="flex justify-center gap-4 pt-6 pb-4">
        <button
          className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className={`w-full py-3 font-Inter rounded-md text-[#fff] font-semibold flex justify-center items-center text-base ${
            isVerified ? "bg-[#01903C]" : "bg-[#01903d89] cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!isVerified}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default OrgInfoStep3;
