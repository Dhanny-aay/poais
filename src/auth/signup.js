import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/Benue-State-Logo-New 1.svg";
import load from "./assets/load.gif";
import { useState } from "react";
import FileUpload from "../components/fileUpload";
import { handleUserRegister } from "../controllers/authController";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [photoBase64, setPhotoBase64] = useState(null);
  const [errors, setErrors] = useState({});
  // List of ID types that should show the additional fields
  const idTypesToShow = ["id_bvn", "id_nin", "id_drivers_license", "id_vnin"];

  const handleFileSelected = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoBase64(reader.result); // Set the base64 string to state
      console.log(`File selected: ${file.name}`);
    };
    reader.readAsDataURL(file); // Convert the file to base64
  };

  const userVerify = {
    firstname,
    lastname,
    dob,
    phone,
    email,
    gender,
    idNumber,
  };

  const validateForm = () => {
    const errors = {};

    // Email validation
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }

    // ID type validation
    if (!type) {
      errors.type = "ID Type is required";
    }

    // ID number validation
    if (!idNumber) {
      errors.idNumber = "ID Number is required";
    }

    // File upload validation
    if (!photoBase64) {
      errors.photoBase64 = "ID photo is required";
    }

    // Additional fields validation based on the selected ID type
    if (idTypesToShow.includes(type)) {
      if (!firstname) errors.firstname = "First Name is required";
      if (!lastname) errors.lastname = "Last Name is required";
      if (!dob) errors.dob = "Date of Birth is required";
      if (!gender) errors.gender = "Gender is required";
      if (!phone) errors.phone = "Phone Number is required";
    }

    return errors;
  };

  const onSuccess = () => {
    setLoading(false);
    navigate("/confirm-code");
  };
  const onError = () => {
    setLoading(false);
    // navigate("/studentlogin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    setLoading(true);

    // List of ID types that should include 'user_verify'
    const idTypesToIncludeVerify = [
      "id_bvn",
      "id_nin",
      "id_drivers_license",
      "id_vnin",
    ];

    // Build the userData object
    const userData = {
      email,
      type,
      idNumber,
      photoBase64,
      // Conditionally include user_verify
      ...(idTypesToIncludeVerify.includes(type) && {
        user_verify: userVerify,
      }),
    };

    handleUserRegister(userData, onSuccess, onError);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center p-6 md:p-12">
        <img src={logo} alt="Benue-State" />
        <p className=" mt-4 font-Roboto_Black text-center font-black text-3xl text-[#01903C]">
          BENUE STATE
        </p>
        <p className=" mt-2 font-Roboto_Black text-center font-black text-[#ED3237] text-xl">
          Public Order Application and Issuance System
        </p>
        <p className=" mt-2 font-Inter font-semibold text-2xl text-[#080808]">
          Sign Up
        </p>
        <div className=" w-full md:w-[500px]">
          <label
            htmlFor=""
            className=" w-full mt-4 flex flex-col text-[#000000] font-Cabin font-medium text-base"
          >
            Email address
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </label>
          <label
            htmlFor=""
            className=" w-full flex flex-col text-[#000000] font-Cabin font-medium text-base mt-4"
          >
            ID Verification
            <span className="mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px]">
              <select
                name=""
                id=""
                className=" w-full text-[#000000B2] font-normal bg-transparent font-Cabin text-sm"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Choose ID Type</option>
                <option value="face_match_bvn">face_match_bvn</option>
                <option value="face_match_nin">face_match_nin</option>
                <option value="face_match_drivers_license">
                  face_match_drivers_license
                </option>
                <option value="face_match_vnin">face_match_vnin</option>
                <option value="id_bvn">id_bvn</option>
                <option value="id_nin">id_nin</option>
                <option value="id_drivers_license">id_drivers_license</option>
                <option value="id_vnin">id_vnin</option>
                <option value="phone_nin">phone_nin</option>
              </select>
            </span>
            {errors.type && (
              <p className="text-red-500 text-xs mt-1">{errors.type}</p>
            )}
          </label>
          <label
            htmlFor=""
            className=" w-full mt-4 flex flex-col text-[#000000] font-Cabin font-medium text-base"
          >
            ID Number
            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter ID Number"
            />
            {errors.idNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>
            )}
          </label>

          <FileUpload onFileSelected={handleFileSelected} />
          {errors.photoBase64 && (
            <p className="text-red-500 text-xs font-Cabin mt-1">
              {errors.photoBase64}
            </p>
          )}

          {/* Conditionally Render Additional Fields */}
          {idTypesToShow.includes(type) && (
            <>
              <div className=" w-full flex items-center flex-row justify-between mt-4">
                <label
                  htmlFor=""
                  className=" w-[48%] flex flex-col text-[#000000] font-Cabin font-medium text-base"
                >
                  First Name
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
                    placeholder="Enter Full Name"
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.firstname}
                    </p>
                  )}
                </label>
                <label
                  htmlFor=""
                  className=" w-[48%] flex flex-col text-[#000000] font-Cabin font-medium text-base "
                >
                  Last Name
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
                    placeholder="Enter Full Name"
                  />
                  {errors.lastname && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.lastname}
                    </p>
                  )}
                </label>
              </div>

              <div className=" w-full flex items-center flex-row justify-between mt-4">
                <label
                  htmlFor=""
                  className=" w-[48%] flex flex-col text-[#000000] font-Cabin font-medium text-base"
                >
                  Date of Birth
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
                    placeholder="Enter Full Name"
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
                  )}
                </label>
                <label
                  htmlFor=""
                  className=" w-[48%] flex flex-col text-[#000000] font-Cabin font-medium text-base "
                >
                  Gender
                  <span className="mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px]">
                    <select
                      className="w-full text-[#919BA7] font-normal font-Inter text-sm"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Choose Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </span>
                  {errors.gender && (
                    <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                  )}
                </label>
              </div>

              <label
                htmlFor=""
                className=" w-full mt-4 flex flex-col text-[#000000] font-Cabin font-medium text-base"
              >
                Phone Number
                <input
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
                  placeholder="Enter Phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </label>
            </>
          )}

          <button
            onClick={handleSubmit}
            className=" w-full py-4 rounded-[10px] bg-[#01903C] flex justify-center items-center mt-5 font-Inter font-medium text-base text-white"
          >
            {loading ? <img src={load} className=" w-6" alt="" /> : "Submit"}
          </button>

          <div className=" mt-3 w-full flex items-center justify-center">
            <span className=" text-[#000000B2]">
              Already have an account?
              <Link
                to="/login"
                className=" text-[#006531] font-Cabin font-normal text-base underline underline-offset-2"
              >
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
