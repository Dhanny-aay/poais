import { Link } from "react-router-dom";
import logo from "./assets/Benue-State-Logo-New 1.svg";

const AdminLogin = () => {
  return (
    <>
      <div className="w-full h-dvh flex flex-col justify-center items-center p-12">
        <img src={logo} alt="Benue-State" />
        <p className=" mt-4 font-Roboto_Black font-black text-3xl text-[#01903C]">
          BENUE STATE
        </p>
        <p className=" mt-2 font-Roboto_Black font-black text-[#ED3237] text-xl">
          Public Order Application and Issuance System
        </p>
        <p className=" mt-2 font-Inter font-semibold text-2xl text-[#080808]">
          Admin Log in
        </p>
        <div className=" w-full md:w-[500px] mt-6">
          <label
            htmlFor=""
            className=" w-full flex flex-col text-[#000000] font-Cabin font-medium text-base"
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
          <Link to="/admindashboard">
            <button className=" w-full py-4 rounded-[10px] bg-[#01903C] mt-5 font-Inter font-medium text-base text-white">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
