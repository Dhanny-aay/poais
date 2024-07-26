import Navbar from "../components/navbar";
import heroImg from "./assets/heroImg.svg";
import check from "./assets/check.svg";
import whiteCheck from "./assets/whiteCheck.svg";
import right from "./assets/right.svg";
import right1 from "./assets/right.png";
import pexels from "./assets/pexels.svg";
import pexel1 from "./assets/pexel1.svg";
import orgperm from "./assets/orgperm.svg";
import vecPerm from "./assets/vecPerm.svg";
import eventPerm from "./assets/eventPerm.svg";
import indiPerm from "./assets/indiPerm.svg";
import work1 from "./assets/work1.svg";
import work2 from "./assets/work2.svg";
import work3 from "./assets/work3.svg";
import work4 from "./assets/work4.svg";
import work5 from "./assets/work5.svg";
import work6 from "./assets/work6.svg";
import Faq from "../components/faq";
import Footer from "../components/footer";

const Landing = () => {
  const works = [
    {
      image: work1,
      name: "Sign up",
      about: "Create an account on the system.",
    },
    {
      image: work2,
      name: "Choose Service",
      about: "Select the type of permit you need.",
    },
    {
      image: work3,
      name: "Fill Application",
      about: "Provide necessary details and upload required documents",
    },
    {
      image: work4,
      name: "Pay Fees",
      about: "Complete the payment process online.",
    },
    {
      image: work5,
      name: "Application Review",
      about: "Our team reviews your application",
    },
    {
      image: work6,
      name: "Receive Permit",
      about: "If approved, download and print your permit.",
    },
  ];
  return (
    <>
      <Navbar />
      {/* hero */}
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "",
          backgroundSize: "cover",
        }}
        className=" w-full h-[600px] relative"
      >
        <div className=" absolute left-0 top-0 w-full h-full bg-[#00000066] flex flex-col items-center justify-center px-[10%]">
          <p className=" text-white font-Cabin font-bold text-[55px] leading-[67px] text-center">
            Welcome to the Public Order Application and Issuance System
          </p>
          <p className=" font-Inter text-white mt-3 text-lg text-center font-medium">
            This system allows you to apply for various permits and licenses to
            operate beyond 12 AM in Benue State. Whether you're a business
            owner, event organizer, or individual, our streamlined process
            ensures efficient application and issuance of public order permits.
          </p>
          <button className=" mt-8 py-3 px-6 bg-[#01903C] rounded-md text-white font-Inter font-semibold text-[15px]">
            Apply Now
          </button>
        </div>
      </div>
      {/* about the system */}
      <div className=" w-full py-16 px-14">
        <p className=" font-Cabin font-bold text-center text-[#01903C] text-3xl">
          About the system
        </p>
        <p className=" text-center mt-4 text-[#000000B2] font-normal font-Inter text-base">
          Details about our cutting edge system for Public Order Application and
          Issuance.
        </p>
        <div className=" w-full flex items-center justify-between mt-16">
          <div className=" w-[48%]">
            <p className=" text-[#000000] font-Cabin font-bold text-3xl">
              The Public Order Application and
              <br /> Issuance System.
            </p>
            <p className=" mt-4 text-[#000000B2] font-Inter font-normal text-base">
              The Benue State Government Public Order Application and Issuance
              System is an initiative of the [relevant department/ministry] to
              modernize and streamline the process of obtaining permits for
              after-hours operations within the state. This system has been
              implemented in accordance with [relevant legislation] and is
              designed to uphold public order, enhance safety, and support
              controlled economic activities during night hours.
            </p>
            <p className=" mt-4 text-[#000000B2] font-Inter font-normal text-base">
              Our system caters to a wide range of users, including:
            </p>
            <div className=" mt-6">
              <span className=" flex items-center space-x-2">
                <img src={check} alt="" />
                <p className=" text-[#000000B2] font-Inter font-normal text-base">
                  Businesses and organizations
                </p>
              </span>
              <span className="mt-2 flex items-center space-x-2">
                <img src={check} alt="" />
                <p className=" text-[#000000B2] font-Inter font-normal text-base">
                  Motor vehicle operators
                </p>
              </span>
              <span className="mt-2 flex items-center space-x-2">
                <img src={check} alt="" />
                <p className=" text-[#000000B2] font-Inter font-normal text-base">
                  Event organizers
                </p>
              </span>
              <span className="mt-2 flex items-center space-x-2">
                <img src={check} alt="" />
                <p className=" text-[#000000B2] font-Inter font-normal text-base">
                  Individuals requiring special permits
                </p>
              </span>
            </div>
            <button className=" mt-10 bg-[#01903C] py-3 px-[18px] flex items-center space-x-2 rounded-md text-white font-Inter font-semibold text-[15px]">
              Start now
              <img src={right} alt="" />
            </button>
          </div>

          <div
            style={{
              backgroundImage: `url(${pexels})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className=" w-[48%] h-[560px] bg-blue-200"
          ></div>
        </div>
      </div>
      {/* services */}
      <div className=" px-14 py-16 bg-[#006531]">
        <p className=" font-Cabin font-bold text-center text-[#ffffff] text-3xl">
          Services
        </p>
        <p className=" text-center mt-4 text-[#fff] font-normal font-Inter text-base">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
        <div className=" mt-16 w-full grid grid-cols-4 gap-8">
          {/* service 1 */}
          <div className=" w-full">
            <img src={orgperm} alt="" />
            <p className=" text-xl font-Cabin text-white font-semibold mt-5">
              Business/Organization Permits
            </p>
            <p className=" text-white font-Inter font-normal text-base mt-3">
              Apply for permits to operate your business or organization beyond
              12 AM. Ideal for:
            </p>
            <ul className="text-white font-Inter font-normal text-base list-disc list-inside">
              <li>Night clubs</li>
              <li>Restaurants</li>
              <li>Beer parlors</li>
              <li>Other late-night establishments</li>
            </ul>
          </div>
          {/* service 2*/}
          <div className=" w-full">
            <img src={vecPerm} alt="" />
            <p className=" text-xl font-Cabin text-white font-semibold mt-5">
              Motor Vehicle Permits
            </p>
            <p className=" text-white font-Inter font-normal text-base mt-3">
              Obtain permits for operating vehicles after hours, including:
            </p>
            <ul className="text-white font-Inter font-normal text-base list-disc list-inside">
              <li>Town service buses</li>
              <li>Taxis</li>
              <li>Motorcycles</li>
              <li>Tricycles</li>
              <li>Heavy-duty vehicles</li>
            </ul>
          </div>
          {/* service 3*/}
          <div className=" w-full">
            <img src={eventPerm} alt="" />
            <p className=" text-xl font-Cabin text-white font-semibold mt-5">
              Event Permits
            </p>
            <p className=" text-white font-Inter font-normal text-base mt-3">
              Secure permits for organizing events that extend beyond midnight:
            </p>
            <ul className="text-white font-Inter font-normal text-base list-disc list-inside">
              <li>Religious programs</li>
              <li>Cultural events</li>
              <li>Entertainment shows</li>
            </ul>
          </div>
          {/* service 4*/}
          <div className=" w-full">
            <img src={indiPerm} alt="" />
            <p className=" text-xl font-Cabin text-white font-semibold mt-5">
              Individual Permits{" "}
            </p>
            <p className=" text-white font-Inter font-normal text-base mt-3">
              Apply for personal permits for special circumstances requiring
              late-night activities.
            </p>
          </div>
        </div>
      </div>
      {/* how it works */}
      <div className=" w-full py-16 px-14">
        <p className=" font-Cabin font-bold text-center text-[#01903C] text-3xl">
          How it works
        </p>
        <p className=" text-center mt-4 text-[#000000B2] font-normal font-Inter text-base">
          How our system transfrom the way you apply for permit and license
        </p>

        <div className=" mt-16 grid grid-cols-3 gap-6">
          {works.map((item, index) => (
            <div
              key={index}
              style={{ boxShadow: "0px 1px 2px 0px #1018280A" }}
              className=" w-full rounded-[20px] border border-[#EAEBF0] p-8"
            >
              <img src={item.image} alt={item.name} />
              <p className=" text-[#000000] font-Cabin font-bold text-xl mt-4">
                {item.name}
              </p>
              <p className=" mt-2 text-[#000000B2] font-Inter text-base font-normal">
                {item.about}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* benefits */}
      <div className=" bg-[#006531] px-14 py-16">
        <p className=" font-Cabin font-bold text-center text-[#ffffff] text-3xl">
          Benefits
        </p>
        <p className=" text-center mt-4 text-[#fff] font-normal font-Inter text-base">
          Details about our cutting edge system for Public Order Application and
          Issuance.
        </p>
        <div className=" mt-16 flex items-center w-full justify-between">
          <div
            style={{
              backgroundImage: `url(${pexel1})`,
              backgroundPosition: "",
              backgroundSize: "cover",
            }}
            className=" w-[48%] h-[560px]"
          ></div>
          <div className=" w-[48%]">
            <p className=" font-Inter font-bold text-[#ffffff] text-3xl">
              Benefits of using the system
            </p>
            <p className=" mt-4 font-Inter font-normal text-base text-white">
              Our system caters to a wide range of users, including:
            </p>
            <div className=" mt-6">
              <span className=" flex space-x-2">
                <img src={whiteCheck} alt="" />
                <p className=" text-[#fff] font-Inter font-normal text-base">
                  Convenience: Apply 24/7 from anywhere with internet access.
                </p>
              </span>
              <span className="mt-2 flex space-x-2">
                <img src={whiteCheck} alt="" />
                <p className=" text-[#fff] font-Inter font-normal text-base">
                  Speed: Reduced processing times compared to traditional
                  methods.
                </p>
              </span>
              <span className="mt-2 flex space-x-2">
                <img src={whiteCheck} alt="" />
                <p className=" text-[#fff] font-Inter font-normal text-base">
                  Transparency: Track your application status in real-time.
                </p>
              </span>
              <span className="mt-2 flex space-x-2">
                <img src={whiteCheck} alt="" />
                <p className=" text-[#fff] font-Inter font-normal text-base">
                  Cost-effective: Save time and resources with our streamlined
                  process.
                </p>
              </span>
              <span className="mt-2 flex space-x-2">
                <img src={whiteCheck} alt="" />
                <p className=" text-[#fff] font-Inter font-normal text-base">
                  Compliance: Easily stay updated with current regulations and
                  requirements.
                </p>
              </span>
              <span className="mt-2 flex space-x-2">
                <img src={whiteCheck} alt="" />
                <p className=" text-[#fff] font-Inter font-normal text-base">
                  Economic Growth: Supports businesses operating in the
                  night-time economy.
                </p>
              </span>
              <span className="mt-2 flex space-x-2">
                <img src={whiteCheck} alt="" />
                <p className=" text-[#fff] font-Inter font-normal text-base">
                  Public Safety: Ensures proper regulation of after-hours
                  activities.
                </p>
              </span>
            </div>
            <button className=" mt-10 bg-[#fff] py-3 px-[18px] flex items-center space-x-2 rounded-md text-[#01903C] font-Inter font-semibold text-[15px]">
              Start now
              <img src={right1} alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* Frequently asked questions? */}
      <Faq />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Landing;
