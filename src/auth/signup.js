import { Link } from "react-router-dom";
import logo from "./assets/Benue-State-Logo-New 1.svg";
import add from "./assets/Add button.svg";

const Signup = () => {
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
        <div className=" w-full md:w-[500px] mt-6">
          <label
            htmlFor=""
            className=" w-full flex flex-col text-[#000000] font-Cabin font-medium text-base"
          >
            Full Name
            <input
              type="text"
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter Full Name"
            />
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
                className=" w-full text-[#000000B2] font-normal font-Cabin text-sm"
              >
                <option value="">Choose ID Type</option>
              </select>
            </span>
          </label>
          <label
            htmlFor=""
            className=" w-full mt-4 flex flex-col text-[#000000] font-Cabin font-medium text-base"
          >
            ID Number
            <input
              type="text"
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter ID Number"
            />
          </label>
          <label
            htmlFor=""
            className=" w-full mt-4 flex flex-col text-[#000000] font-Cabin font-medium text-base"
          >
            Email address
            <input
              type="text"
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter Email Address"
            />
          </label>
          <label
            htmlFor=""
            className=" w-full flex flex-col text-[#000000] font-Cabin font-medium text-base mt-4"
          >
            Password
            <input
              type="password"
              className=" mt-2 w-full border border-[#EAEBF0] py-4 px-5 rounded-[15px] text-[#000000B2] font-normal font-Cabin text-sm"
              placeholder="Enter password"
            />
          </label>

          <div className=" mt-4 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-3">
            <img src={add} alt="" />
            <p className=" mt-3 text-xl font-medium font-Inter text-[#272D37]">
              Drop your Files Here
            </p>
            <p className=" mt-1 text-xs font-normal font-Inter text-[#5F6D7E]">
              <span className=" font-medium text-[#01903C] mr-1">
                Browse Files
              </span>
              from your Computer
            </p>
          </div>
          <Link to="/dashboard">
            <button className=" w-full py-4 rounded-[10px] bg-[#01903C] mt-5 font-Inter font-medium text-base text-white">
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
