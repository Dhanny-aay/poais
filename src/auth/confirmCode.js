import { useNavigate } from "react-router-dom";
import logo from "./assets/Benue-State-Logo-New 1.svg";
import { useEffect, useState } from "react";

const ConfirmCode = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  // Effect to retrieve email from localStorage on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("poais_email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  return (
    <>
      <div className="w-full h-dvh flex flex-col justify-center items-center p-6 md:p-12">
        <img src={logo} alt="Benue-State" />
        <p className=" mt-4 font-Roboto_Black font-black text-center text-3xl text-[#01903C]">
          BENUE STATE
        </p>
        <p className=" mt-2 font-Roboto_Black text-center font-black text-[#ED3237] text-xl">
          Public Order Application and Issuance System
        </p>
        <p className=" mt-2 font-Inter font-semibold text-2xl text-[#080808]">
          Confirm Your Email Address
        </p>
        <div className=" w-full md:w-[500px] mt-6">
          <label
            htmlFor=""
            className=" w-full flex flex-col text-[#000000] font-Cabin font-medium text-base"
          >
            Enter the code sent to your mail
            <input
              type="text"
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter Code"
            />
          </label>

          <button className=" w-full py-4 rounded-[10px] bg-[#01903C] mt-5 font-Inter font-medium text-base text-white">
            Next
          </button>
          <div className=" mt-3 w-full flex items-center justify-between"></div>
        </div>
      </div>
    </>
  );
};

export default ConfirmCode;
