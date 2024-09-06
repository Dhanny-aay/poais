import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/Benue-State-Logo-New 1.svg";
import load from "./assets/load.gif";
import { useEffect, useState } from "react";
import {
  handleUserLoginOTP,
  handleUserOTPVerify,
} from "../controllers/authController";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isOTPStep, setIsOTPStep] = useState(false); // State to manage OTP step

  useEffect(() => {
    // Get the item from localStorage
    const storedItem = localStorage.getItem("poais_token");
    if (storedItem) {
      // navigate("/dashboard");
    } else {
      // Do nothing
    }
  }, []);

  // For handleSubmit (email submission)
  const onEmailSubmitSuccess = () => {
    setLoading(false);
    setIsOTPStep(true);
  };

  const onEmailSubmitError = () => {
    setLoading(false);
  };

  // For handleLogin (OTP verification)
  const onLoginSuccess = () => {
    setLoading(false);
    navigate("/dashboard");
  };
  const onLoginError = () => {
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { email };
    handleUserLoginOTP(userData, onEmailSubmitSuccess, onEmailSubmitError);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { email, otp };
    handleUserOTPVerify(userData, onLoginSuccess, onLoginError);
  };

  return (
    <>
      <div className="w-full h-dvh flex flex-col justify-center items-center p-6 md:p-12">
        <img src={logo} alt="Benue-State" />
        <p className=" mt-4 font-Roboto_Black text-center font-black text-3xl text-[#01903C]">
          BENUE STATE
        </p>
        <p className=" mt-2 font-Roboto_Black text-center font-black text-[#ED3237] text-xl">
          Public Order Application and Issuance System
        </p>
        <p className=" mt-2 font-Inter font-semibold text-2xl text-[#080808]">
          Log in
        </p>
        <div className=" w-full md:w-[500px] mt-6">
          <label
            htmlFor=""
            className=" w-full flex flex-col text-[#000000] font-Cabin font-medium text-base"
          >
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter Email Address"
            />
          </label>
          {/* Show OTP input and login button only if isOTPStep is true */}
          {isOTPStep && (
            <>
              <label
                htmlFor=""
                className=" w-full flex flex-col text-[#000000] font-Cabin font-medium text-base mt-4"
              >
                OTP
                <input
                  type="password"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
                  placeholder="Enter OTP"
                />
              </label>
              <button
                onClick={handleLogin}
                className=" w-full py-4 rounded-[10px] bg-[#01903C] mt-5 font-Inter font-medium text-base text-white flex justify-center items-center"
              >
                {loading ? <img src={load} className=" w-6" alt="" /> : "Login"}
              </button>
            </>
          )}

          {!isOTPStep && (
            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-[10px] bg-[#01903C] mt-5 font-Inter font-medium text-base text-white flex items-center justify-center"
            >
              {loading ? <img src={load} className=" w-6" alt="" /> : "Submit"}
            </button>
          )}

          <div className=" mt-3 w-full flex items-center justify-between">
            <Link className=" text-[#006531] font-Cabin font-normal text-base underline"></Link>
            <Link
              to="/signup"
              className=" text-[#006531] font-Cabin font-normal text-base underline"
            >
              Create your account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
