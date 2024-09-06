import { useContext, useEffect, useState } from "react";
import stepper from "./assets/Stepper1.svg";
import { IdentifierContext } from "../../context/applicationContext";
import { useSnackbar } from "notistack";
import { handleVehicleSubmit } from "../../../controllers/verificationController";
import load from "./assets/load.gif";

const MotorApplyStep2 = ({ handleNext, handleBack }) => {
  const [stepData, setStepData] = useState({
    type: "",
    plate_number: "",
    purpose: "",
    make: "",
    model: "",
    year: "",
    vin: "",
  });

  const [errors, setErrors] = useState({});
  const [loading1, setLoading1] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { identifier } = useContext(IdentifierContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateFields = () => {
    const newErrors = {};

    if (!stepData.type) {
      newErrors.type = "Vehicle type is required";
    }
    if (!stepData.plate_number) {
      newErrors.plate_number = "Plate number is required";
    }
    if (!stepData.make) {
      newErrors.make = "Make is required";
    }
    if (!stepData.model) {
      newErrors.model = "Model is required";
    }
    if (!stepData.year) {
      newErrors.year = "Year is required";
    } else if (!/^\d{4}$/.test(stepData.year)) {
      newErrors.year = "Year must be a 4-digit number";
    }
    if (!stepData.vin) {
      newErrors.vin = "Vehicle Identification Number is required";
    }
    if (!stepData.purpose) {
      newErrors.purpose = "Purpose is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
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
        vehicle: stepData,
      };
      handleVehicleSubmit(identifier, userData, onSuccess, onError);
    }
  };

  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Permit for Motor Vehicles
      </p>
      <div className="mt-4 w-full flex items-center justify-between">
        <label
          htmlFor="type"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Vehicle type
          <span className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
            <select
              name="type"
              id="type"
              value={stepData.type}
              onChange={handleChange}
              className="w-full text-[#919BA7] font-normal font-Inter text-sm"
            >
              <option value="">Choose Vehicle type</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="Heavy duty vehicle">Heavy duty vehicle</option>
            </select>
          </span>
          {errors.type && (
            <span className="text-red-500 text-xs mt-1 font-Inter">
              {errors.type}
            </span>
          )}
        </label>

        <label
          htmlFor="plate_number"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Plate Number
          <input
            name="plate_number"
            id="plate_number"
            value={stepData.plate_number}
            onChange={handleChange}
            placeholder="Enter Plate Number"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          />
          {errors.plate_number && (
            <span className="text-red-500 text-xs mt-1 font-Inter">
              {errors.plate_number}
            </span>
          )}
        </label>
      </div>

      <div className="mt-4 w-full flex items-center justify-between">
        <label
          htmlFor="make"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Make
          <input
            name="make"
            id="make"
            value={stepData.make}
            onChange={handleChange}
            placeholder="Enter Make"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          />
          {errors.make && (
            <span className="text-red-500 text-xs mt-1 font-Inter">
              {errors.make}
            </span>
          )}
        </label>

        <label
          htmlFor="model"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Model
          <input
            name="model"
            id="model"
            value={stepData.model}
            onChange={handleChange}
            placeholder="Enter Model"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          />
          {errors.model && (
            <span className="text-red-500 text-xs mt-1 font-Inter">
              {errors.model}
            </span>
          )}
        </label>
      </div>

      <div className="mt-4 w-full flex items-center justify-between">
        <label
          htmlFor="year"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Year
          <input
            name="year"
            id="year"
            value={stepData.year}
            onChange={handleChange}
            placeholder="Enter Year"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          />
          {errors.year && (
            <span className="text-red-500 text-xs mt-1 font-Inter">
              {errors.year}
            </span>
          )}
        </label>

        <label
          htmlFor="vin"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Vehicle Identification Number
          <input
            name="vin"
            id="vin"
            value={stepData.vin}
            onChange={handleChange}
            placeholder="Enter Vehicle Identification Number"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          />
          {errors.vin && (
            <span className="text-red-500 text-xs mt-1 font-Inter">
              {errors.vin}
            </span>
          )}
        </label>
      </div>

      <label
        htmlFor="purpose"
        className="mt-4 w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Purpose of Permit
        <textarea
          name="purpose"
          id="purpose"
          value={stepData.purpose}
          onChange={handleChange}
          className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          placeholder="Enter purpose of permit"
        />
        {errors.purpose && (
          <span className="text-red-500 text-xs mt-1 font-Inter">
            {errors.purpose}
          </span>
        )}
      </label>

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

export default MotorApplyStep2;
