import { useState, useContext, useEffect } from "react";
import { useSnackbar } from "notistack";
import stepper from "./assets/Stepper2.svg";
import FileUpload from "../../../components/fileUpload";
import load from "./assets/load.gif";
import {
  IdentifierContext,
  UserVerifyObjectContext,
} from "../../context/applicationContext";
import {
  ApplicationDependencyContext,
  NationalResponseContext,
  SameAsDriverContext,
  UserApplicantIDContext,
} from "../../context/verifyContext";
import { handleNationalVerify } from "../../../controllers/verificationController";

const OwnerInfoIDStep3 = ({ handleNext, handleBack }) => {
  const { identifier } = useContext(IdentifierContext);
  const { enqueueSnackbar } = useSnackbar();
  const { user_applicant_id, setUser_applicant_id } = useContext(
    UserApplicantIDContext
  );
  const { nationalResponse, setNationalResponse } = useContext(
    NationalResponseContext
  );
  const { userVerifyObject, setUserVerifyObject } = useContext(
    UserVerifyObjectContext
  );
  const { same_as_driver, setSame_as_driver } = useContext(SameAsDriverContext);
  const { applicationDependency } = useContext(ApplicationDependencyContext);

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

  useEffect(() => {
    setUserVerifyObject((prev) => ({
      ...prev,
      idNumber: stepData.identification_number,
    }));
  }, [stepData.identification_number, setUserVerifyObject]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Perform validation
    if (!validateFields()) {
      setLoading(false);
      return; // Stop form submission if validation fails
    }

    const userData = {
      type: stepData.identification_type,
      photoBase64: stepData.image,
      same_as_driver,
      idNumber: stepData.identification_number,
      user_type: "Applicant",
      application_identifier: identifier,
      user_verify: userVerifyObject,
    };

    handleNationalVerify(userData, onSuccess, onError);
  };

  const onSuccess = (response) => {
    setLoading(false);
    setNationalResponse(response.data);
    setUser_applicant_id(response.data.id);
    enqueueSnackbar("Verified successfully, Please Continue", {
      variant: "success",
    });
    handleNext(); // Move to the next step upon success
  };

  const onError = () => {
    setLoading(false);
    enqueueSnackbar(
      "Verification Failed, Please review details and try again",
      { variant: "error" }
    );
  };

  return (
    <>
      <img src={stepper} className="w-full mt-4" alt="" />
      <p className="font-Inter font-medium text-[#272D37] text-lg mt-3">
        Owner Information
      </p>
      <label className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs">
        ID Verification
        <span className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            className="w-full text-[#919BA7] font-normal font-Inter text-sm"
            name="identification_type"
            value={stepData.identification_type}
            onChange={(e) =>
              setStepData((prevData) => ({
                ...prevData,
                identification_type: e.target.value,
              }))
            }
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

      <label className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs">
        ID Number
        <input
          type="text"
          className="w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
          placeholder="Enter ID Number"
          value={stepData.identification_number}
          onChange={(e) =>
            setStepData((prevData) => ({
              ...prevData,
              identification_number: e.target.value,
            }))
          }
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

      {applicationDependency.includes("Driver") && (
        <span className="flex items-center space-x-3 mt-4">
          <input
            type="checkbox"
            onChange={(e) => setSame_as_driver(e.target.checked)}
            className="w-4 h-4"
          />
          <p className="font-Inter text-sm font-normal text-[#919BA7]">
            The Applicant is the same as the driver
          </p>
        </span>
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

export default OwnerInfoIDStep3;
