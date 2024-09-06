import { useContext, useEffect, useState } from "react";
import stepper from "./assets/Stepper1.svg";
import load from "./assets/load.gif";
import { handleEventSubmit } from "../../../controllers/verificationController";
import { useSnackbar } from "notistack";
import { IdentifierContext } from "../../context/applicationContext";

const EventApplyStep2 = ({ handleNext, handleBack }) => {
  const [stepData, setStepData] = useState({
    purpose: "",
    location_address: "",
    lga: "",
    state: "",
    start_date: "",
    end_date: "",
  });

  const [errors, setErrors] = useState({});
  const [loading1, setLoading1] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { identifier } = useContext(IdentifierContext);

  // Validation function
  const validateFields = () => {
    const newErrors = {};
    if (stepData.purpose.trim() === "")
      newErrors.purpose = "Purpose is required";
    if (stepData.location_address.trim() === "")
      newErrors.location_address = "Address is required";
    if (stepData.lga.trim() === "") newErrors.lga = "LGA is required";
    if (stepData.state.trim() === "") newErrors.state = "State is required";
    if (stepData.start_date.trim() === "")
      newErrors.start_date = "Start date is required";
    if (stepData.end_date.trim() === "")
      newErrors.end_date = "End date is required";

    setErrors(newErrors);
    // Return validation status
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSuccess = (response) => {
    setLoading1(false);
    console.log(response.data);
    enqueueSnackbar("Submitted successfully, Please Continue", {
      variant: "success",
    });
    handleNext(); // Proceed to the next step after success
  };
  const onError = () => {
    setLoading1(false);
    // navigate("/studentlogin");\
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const isValid = validateFields();

    if (isValid) {
      setLoading1(true);

      const userData = {
        event: stepData,
      };
      handleEventSubmit(identifier, userData, onSuccess, onError);
    }
  };

  return (
    <>
      <img src={stepper} className="w-full mt-4" alt="" />
      <p className="font-Inter font-medium text-[#272D37] text-lg mt-3">
        Permit for Event
      </p>

      <label
        htmlFor="purpose"
        className="mt-4 w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Purpose of Permit
        <textarea
          name="purpose"
          value={stepData.purpose}
          onChange={handleChange}
          className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          placeholder="Enter purpose of permit"
          id="purpose"
        ></textarea>
        {errors.purpose && (
          <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>
        )}
      </label>

      <label
        htmlFor="location_address"
        className="w-full mt-3 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Address
        <input
          type="text"
          name="location_address"
          value={stepData.location_address}
          onChange={handleChange}
          className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          id="location_address"
        />
        {errors.location_address && (
          <p className="text-red-500 text-xs mt-1">{errors.location_address}</p>
        )}
      </label>

      <div className="flex flex-row items-end justify-between w-full mt-4">
        <label
          htmlFor="lga"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Local Government Area of Residence
          <input
            type="text"
            name="lga"
            value={stepData.lga}
            onChange={handleChange}
            id="lga"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          />
          {errors.lga && (
            <p className="text-red-500 text-xs mt-1">{errors.lga}</p>
          )}
        </label>
        <label
          htmlFor="state"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          State of Residence
          <input
            type="text"
            name="state"
            value={stepData.state}
            onChange={handleChange}
            className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            id="state"
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </label>
      </div>

      <p className=" mt-4 text-[#272D37] font-Inter font-medium text-sm">
        Duration of Permit
      </p>
      <div className=" flex flex-row items-center justify-between w-full mt-3">
        <label
          htmlFor="start_date"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Start date
          <input
            type="date"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name="start_date"
            value={stepData.start_date}
            onChange={handleChange}
            id="start_date"
          />
          {errors.start_date && (
            <p className="text-red-500 text-xs mt-1">{errors.start_date}</p>
          )}
        </label>
        <label
          htmlFor="end_date"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Due date
          <input
            type="date"
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
            name="end_date"
            value={stepData.end_date}
            onChange={handleChange}
            id="end_date"
          />
          {errors.end_date && (
            <p className="text-red-500 text-xs mt-1">{errors.end_date}</p>
          )}
        </label>
      </div>

      <div className="flex justify-center gap-4 pt-6 pb-4">
        <button
          className={`w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base`}
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className={`w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base`}
          disabled={loading1}
          onClick={handleSubmit}
        >
          {loading1 ? (
            <img src={load} className=" w-4" alt="Loading..." />
          ) : (
            "Next"
          )}
        </button>
      </div>
    </>
  );
};

export default EventApplyStep2;
