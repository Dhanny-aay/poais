import { Link } from "react-router-dom";
import pb from "./assets/fb.svg";
import twi from "./assets/twi.svg";
import ig from "./assets/ig.svg";
import yt from "./assets/yt.svg";
import logo from "./assets/logof.svg";
import time from "./assets/time.svg";
import phone from "./assets/phone.svg";
import mail from "./assets/mail.svg";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#006531]">
        {/* 1 */}
        <div className=" w-full px-14 py-8 flex items-center justify-between border-b border-[#01903C]">
          <div className=" flex items-center space-x-6">
            <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
              About
            </Link>
            <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
              Services
            </Link>
            <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
              Resources
            </Link>
            <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
              Contact
            </Link>
          </div>
          <div className=" flex items-center space-x-5">
            <p className=" text-[#FFFFFF] font-Cabin font-normal text-lg">
              Connect With Us
            </p>
            <span className=" flex items-center space-x-2">
              <img src={pb} alt="" />
              <img src={twi} alt="" />
              <img src={ig} alt="" />
              <img src={yt} alt="" />
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className=" w-full px-14 py-16 flex items-start justify-between">
          <div className=" w-[330px]">
            <img src={logo} alt="" />
            <p className=" mt-6 font-Cabin font-normal text-[17px] text-white">
              Kashim Ibrahim Way, Old GRA,  Government House, Makurdi
            </p>
            <span className=" flex items-center space-x-3 mt-3">
              <img src={time} alt="" />
              <p className=" font-Cabin font-normal text-[17px] text-white">
                Opening Hours:
              </p>
            </span>
            <p className=" mt-1 font-Cabin font-normal text-[17px] text-white ml-7">
              Mon – Fri: 8:00 am – 6:00 pm
            </p>
            <span className=" flex items-center space-x-3 mt-3">
              <img src={phone} alt="" />
              <p className=" font-Cabin font-normal text-[17px] text-white">
                Phone: 1800 123 4567
              </p>
            </span>
            <span className=" flex items-center space-x-3 mt-3">
              <img src={mail} alt="" />
              <p className=" font-Cabin font-normal text-[17px] text-white">
                Email: info@benuestate.gov.ng
              </p>
            </span>
          </div>

          <div className=" w-[330px]">
            <p className=" font-Inter font-semibold text-2xl text-white mb-4">
              Services{" "}
            </p>
            <div className=" flex flex-col space-y-3">
              <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
                Business/Organization Permits
              </Link>
              <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
                Motor Vehicle Permits
              </Link>
              <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
                Event Permits
              </Link>
              <Link className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
                Individual Permits
              </Link>
            </div>
          </div>

          <div className=" w-[330px]">
            <p className=" font-Inter font-semibold text-2xl text-white mb-4">
              Benue News & Updates
            </p>

            <p className=" text-[#FFFFFF] font-Cabin font-normal text-[17px]">
              Get the latest government news, articles, and resources, sent
              straight to your inbox every month.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className=" w-full flex justify-center items-center text-center text-white font-Inter font-normal text-base py-12">
          Copyright © 2024, Benue State Government. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
