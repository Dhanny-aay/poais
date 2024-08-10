import { Link } from "react-router-dom";
import logo from "./assets/Logo.svg";

const Navbar = () => {
  function overlay() {
    //check classlist
    const overlayDiv = document.getElementById("overlay");
    if (overlayDiv.classList.contains("-translate-y-[500px]")) {
      overlayDiv.classList.remove("-translate-y-[500px]");
    } else if (!overlayDiv.classList.contains("-translate-y-[500px]")) {
      overlayDiv.classList.add("-translate-y-[500px]");
    }
  }

  return (
    <>
      <div
        id="overlay"
        className=" w-full bg-[#fff] backdrop-blur-xl h-[350px] p-6 flex justify-center items-center -translate-y-[500px] shadow transition-all duration-700 top-[78px] fixed z-[99]"
      >
        <div className="w-full flex flex-col justify-center items-center space-y-5">
          <Link to="/">
            <p className=" font-Inter text-[15px] font-semibold text-[#272D37]">
              Home
            </p>
          </Link>

          <Link to="/">
            <p className=" font-Inter text-[15px] font-semibold text-[#272D37]">
              About
            </p>
          </Link>
          <Link to="/">
            <p className=" font-Inter text-[15px] font-semibold text-[#272D37]">
              Resources
            </p>
          </Link>
          <Link to="/">
            <p className=" font-Inter text-[15px] font-semibold text-[#272D37]">
              Services
            </p>
          </Link>
          <Link to="/">
            <p className=" font-Inter text-[15px] font-semibold text-[#272D37]">
              Contact
            </p>
          </Link>
          <div className=" flex md:hidden z-50 items-center space-x-3 mt-6">
            <>
              <Link to="/login">
                <button className="px-4 py-[10px] text-base font-Cabin rounded-[40px] hover:bg-[#F5F5F5] transition-all font-semibold text-[#01903C]">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="px-5 py-3 font-Cabin text-base rounded-[40px] font-semibold shadow hover:shadow-[#007272] transition-all bg-[#01903C] text-white">
                  Sign Up Now
                </button>
              </Link>
            </>
          </div>
        </div>
      </div>

      <div className=" py-5 px-4 md:px-14 flex items-center justify-between border-b border-[#EAEBF0]">
        <div className=" flex items-center space-x-16">
          <img src={logo} className=" w-[60%] md:w-auto" alt="" />
          <div className=" hidden lg:flex items-center space-x-6">
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Home
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              About
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Services
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Resources
            </Link>
            <Link className=" text-[#272D37] font-Inter font-semibold text-[15px]">
              Contact
            </Link>
          </div>
        </div>
        <div className=" flex items-center space-x-5">
          <div className=" hidden md:flex items-center space-x-6">
            <Link
              to="/signup"
              className=" text-[#01903C] font-Inter font-semibold text-[15px]"
            >
              Sign Up
            </Link>
            <Link to="/login">
              <button
                style={{ boxShadow: "0px 1px 2px 0px #1018280A" }}
                className=" bg-[#01903C] py-3 px-[18px] rounded-[6px] text-white font-Inter font-semibold text-[15px]"
              >
                Log In
              </button>
            </Link>
          </div>
          <div onClick={overlay} className="menu-icon md:block lg:hidden">
            <input className="menu-icon__cheeckbox" type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
