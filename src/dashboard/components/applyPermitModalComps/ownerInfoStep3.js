import { UserVerifyObjectContext } from "../../context/applicationContext";
import { NationalResponseContext } from "../../context/verifyContext";
import stepper from "./assets/Stepper2.svg";
import { useContext, useEffect, useState } from "react";
import load from "./assets/load.gif";

const OwnerInfoStep3 = ({ handleNext, handleBack }) => {
  const { userVerifyObject, setUserVerifyObject } = useContext(
    UserVerifyObjectContext
  );
  const [stepData, setStepData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address: "",
    lga: "",
    state: "",
    zip: "",
  });

  const [userVerify, setUserVerify] = useState({
    firstname: "",
    lastname: "",
    dob: "",
    phone: "",
    email: "",
    gender: "",
    idNumber: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [loading1, setLoading1] = useState(false);

  useEffect(() => {
    setUserVerifyObject(userVerify);
  }, [userVerify, setUserVerifyObject]);

  // Validation function
  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex

    if (stepData.first_name.trim() === "")
      newErrors.first_name = "First name is required";
    if (stepData.last_name.trim() === "")
      newErrors.last_name = "Last name is required";
    if (stepData.phone.trim() === "")
      newErrors.phone = "Phone number is required";
    if (stepData.email.trim() === "") {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(stepData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (stepData.address.trim() === "")
      newErrors.address = "Address is required";
    if (stepData.state.trim() === "") newErrors.state = "State is required";
    if (stepData.lga.trim() === "") newErrors.lga = "LGA is required";
    if (stepData.zip.trim() === "") newErrors.zip = "Zip code is required";
    if (userVerify.dob.trim() === "")
      newErrors.dob = "Date of birth is required";
    if (userVerify.gender.trim() === "")
      newErrors.gender = "Gender is required";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    handleUserVerifyChange(name, value); // Update user_verify simultaneously
  };

  const handleUserVerifyChange = (name, value) => {
    switch (name) {
      case "first_name":
        setUserVerify((prev) => ({ ...prev, firstname: value }));
        break;
      case "last_name":
        setUserVerify((prev) => ({ ...prev, lastname: value }));
        break;
      case "dob":
        setUserVerify((prev) => ({ ...prev, dob: value }));
        break;
      case "phone":
        setUserVerify((prev) => ({ ...prev, phone: value }));
        break;
      case "email":
        setUserVerify((prev) => ({ ...prev, email: value }));
        break;
      case "gender":
        setUserVerify((prev) => ({ ...prev, gender: value }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading1(true);

    // Perform validation
    validateFields();

    if (isValid) {
      setLoading1(true);
      // Simulate an async operation like an API request
      setTimeout(() => {
        setLoading1(false);
        handleNext();
      }, 1000);
    } else {
      // If validation fails, display error messages and stop loading
      setLoading1(false);
    }
  };
  return (
    <>
      <img src={stepper} className="w-full mt-4" alt="" />
      <p className="font-Inter font-medium text-[#272D37] text-lg mt-3">
        Owner Information
      </p>
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <label
          htmlFor="first_name"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          First Name
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.first_name ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="first_name"
            id="first_name"
            value={stepData.first_name}
            onChange={handleChange}
          />
          {errors.first_name && (
            <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
          )}
        </label>
        <label
          htmlFor="last_name"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Last Name
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.last_name ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="last_name"
            id="last_name"
            value={stepData.last_name}
            onChange={handleChange}
          />
          {errors.last_name && (
            <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
          )}
        </label>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-4">
        <label
          htmlFor="dob"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Date of Birth
          <input
            type="date"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.dob ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="dob"
            id="dob"
            onChange={handleChange}
          />
          {errors.dob && (
            <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
          )}
        </label>
        <label
          htmlFor="gender"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Gender
          <select
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.gender ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="gender"
            id="gender"
            onChange={handleChange}
          >
            <option value="">Choose Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
          )}
        </label>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-4">
        <label
          htmlFor="address"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Address
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.address ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="address"
            id="address"
            value={stepData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">{errors.address}</p>
          )}
        </label>
        <label
          htmlFor="state"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          State of Residence
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.state ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="state"
            id="state"
            value={stepData.state}
            onChange={handleChange}
          />
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </label>
      </div>

      <div className="flex flex-row items-end justify-between w-full mt-4">
        <label
          htmlFor="lga"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Local Government Area of Residence
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.lga ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="lga"
            id="lga"
            value={stepData.lga}
            onChange={handleChange}
          />
          {errors.lga && (
            <p className="text-red-500 text-xs mt-1">{errors.lga}</p>
          )}
        </label>
        <label
          htmlFor="zip"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Zip
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.zip ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="zip"
            id="zip"
            value={stepData.zip}
            onChange={handleChange}
          />
          {errors.zip && (
            <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
          )}
        </label>
      </div>

      <div className="flex flex-row items-center justify-between w-full mt-4">
        <label
          htmlFor="phone"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Phone Number
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.phone ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="phone"
            id="phone"
            value={stepData.phone}
            onChange={handleChange}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </label>
        <label
          htmlFor="email"
          className="w-[48%] flex flex-col text-[#272D37] font-Inter font-medium text-xs"
        >
          Email Address
          <input
            type="text"
            className={`w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border rounded-[6px] px-4 py-3 ${
              errors.email ? "border-red-500" : "border-[#DAE0E6]"
            }`}
            name="email"
            id="email"
            value={stepData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
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
          // disabled={loading1}
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

export default OwnerInfoStep3;
