import stepper from "./assets/Stepper3.svg";
import add from "./assets/Add button.svg";
import { useContext, useEffect, useState } from "react";
import FileUpload from "../../../components/fileUpload";
import {
  DriverVerifyObjectContext,
  IdentifierContext,
} from "../../context/applicationContext";
import load from "./assets/load.gif";
import { handleNationalVerify } from "../../../controllers/verificationController";
import {
  DriverNationalResponseContext,
  SameAsDriverContext,
  UserApplicantIDContext,
} from "../../context/verifyContext";
import { useSnackbar } from "notistack";

const DriverInfoIDstep4 = ({ handleNext, handleBack }) => {
  const { identifier } = useContext(IdentifierContext);
  const { enqueueSnackbar } = useSnackbar();
  const { driverResponse, setDriverResponse } = useContext(
    DriverNationalResponseContext
  );
  const { user_applicant_id, setUser_applicant_id } = useContext(
    UserApplicantIDContext
  );
  const { driverVerifyObject, setDriverVerifyObject } = useContext(
    DriverVerifyObjectContext
  );
  const { same_as_driver, setSame_as_driver } = useContext(SameAsDriverContext);

  const [stepData, setStepData] = useState({
    identification_number: "",
    identification_type: "",
    image: null,
  });

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleFileSelected = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      setImage(base64Image); // Update the image state with the base64 string
      setStepData((prevData) => ({
        ...prevData,
        image: base64Image, // Update the image key with the new base64 value
      }));
    };
    reader.readAsDataURL(file); // Convert the file to base64
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStepData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setDriverVerifyObject((prev) => ({
      ...prev,
      idNumber: stepData.identification_number,
    }));
  }, [stepData.identification_number]);

  // Validation function
  const validateFields = () => {
    const newErrors = {};
    if (!stepData.identification_type)
      newErrors.identification_type = "ID type is required";
    if (!stepData.identification_number.trim())
      newErrors.identification_number = "ID number is required";
    if (!stepData.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return validation status
  };

  const onSuccess = (response) => {
    setLoading(false);
    console.log(response);
    setDriverResponse(response);
    enqueueSnackbar("Verified successfully, Please Continue", {
      variant: "success",
    });
    handleNext(); // Move to the next step upon success
  };
  const onError = () => {
    setLoading(false);
    // navigate("/studentlogin");
    enqueueSnackbar(
      "Verification Failed, Please review details and try again",
      {
        variant: "error",
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Perform validation
    if (!validateFields()) {
      setLoading(false);
      return; // Stop form submission if validation fails
    }

    const userData = {
      user_applicant_id,
      same_as_driver,
      type: stepData.identification_type,
      photoBase64: stepData.image,
      same_as_driver,
      idNumber: stepData.identification_number,
      user_type: "Driver",
      application_identifier: identifier,
      user_verify: driverVerifyObject,
    };

    handleNationalVerify(userData, onSuccess, onError);
  };

  return (
    <>
      <img src={stepper} className=" w-full mt-4" alt="" />
      <p className=" font-Inter font-medium text-[#272D37] text-lg mt-3">
        Driver/Rider Information
      </p>
      <label
        htmlFor=""
        className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        ID Verification
        <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
            name="identification_type"
            id="identification_type"
            value={stepData.identification_type}
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <option value="">Choose ID type</option>
            <option value="face_match_bvn">face_match_bvn</option>
            <option value="face_match_nin">face_match_nin</option>
            <option value="face_match_drivers_license">
              face_match_drivers_license
            </option>
            <option value="face_match_vnin">face_match_vnin</option>
            <option value="id_nin">id_nin</option>
            <option value="id_drivers_license">id_drivers_license</option>
            <option value="id_vnin">id_vnin</option>
            <option value="phone_nin">phone_nin</option>
          </select>
        </span>
        {errors.identification_type && (
          <p className="text-red-500 text-xs mt-1">
            {errors.identification_type}
          </p>
        )}
      </label>
      <label
        htmlFor=""
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        ID Number
        <input
          type="text"
          className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          placeholder="Enter ID Number"
          name="identification_number"
          id="identification_number"
          value={stepData.identification_number}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        {errors.identification_number && (
          <p className="text-red-500 text-xs mt-1">
            {errors.identification_number}
          </p>
        )}
      </label>
      <FileUpload onFileSelected={handleFileSelected} />
      {errors.image && (
        <p className="text-red-500 text-xs mt-1">{errors.image}</p>
      )}

      <div className="flex justify-center gap-4 pt-6 pb-4">
        <button
          className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? (
            <img src={load} className="w-4" alt="Loading..." />
          ) : (
            "Verify"
          )}
        </button>
      </div>
    </>
  );
};

export default DriverInfoIDstep4;
