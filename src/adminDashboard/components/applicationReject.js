import warn from "./assets/solid.svg";
import xclose from "./assets/XClose button.svg";

const ApplicationReject = ({ setMakeVisible }) => {
  return (
    <>
      <div className=" w-[120%] h-[100vh] bg-[#1212128d] z-[99999] fixed top-0 -left-[20%] flex justify-center items-center">
        <div className="ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] w-[600px]">
          <div className=" w-full h-full overflow-auto ">
            <span className=" w-full flex items-start justify-between">
              <img src={warn} className="" alt="" />
              <img
                onClick={() => {
                  setMakeVisible(false);
                }}
                src={xclose}
                className=" "
                alt=""
              />
            </span>
            <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
              Application Rejection
            </p>
            <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
              State the reason for rejecting the application permit
            </p>
            <label
              htmlFor=""
              className=" w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Reason for Rejection
              <span className=" w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
                <select
                  name=""
                  className=" w-full text-[#919BA7] font-normal font-Inter text-sm"
                  id=""
                >
                  <option value="">Choose Reason</option>
                  <option value="Incomplete Application">
                    Incomplete Application
                  </option>
                  <option value="Incorrect Information">
                    Incorrect Information
                  </option>
                  <option value="Non-Compliance with Regulations">
                    Non-Compliance with Regulations
                  </option>
                  <option value="Insufficient Qualifications">
                    Insufficient Qualifications
                  </option>
                  <option value="Previous Violations">
                    Previous Violations
                  </option>
                  <option value="Unresolved Issues">Unresolved Issues</option>
                  <option value="Negative Background Check">
                    Negative Background Check
                  </option>
                  <option value="Public Safety Concerns">
                    Public Safety Concerns
                  </option>
                  <option value="Environmental Impact">
                    Environmental Impact
                  </option>
                  <option value="Zoning Restrictions">
                    Zoning Restrictions
                  </option>
                  <option value="Incomplete Payment">Incomplete Payment</option>
                  <option value="Expired Application">
                    Expired Application
                  </option>
                  <option value="Non-Compliance with Health Standards">
                    Non-Compliance with Health Standards
                  </option>
                  <option value="Insufficient Infrastructure">
                    Insufficient Infrastructure
                  </option>
                </select>
              </span>
            </label>
            <label
              htmlFor=""
              className=" mt-4 w-full flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Describe reason for rejection
              <textarea
                name=""
                className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
                placeholder="Enter detailed reason for rejection of application."
                id=""
              ></textarea>
            </label>
            <div className=" w-full mt-4 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setMakeVisible(false);
                }}
                className=" w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
              >
                Cancel
              </button>
              <button
                // onClick={handleSubmit}
                className=" w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
              >
                {"Confirm"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationReject;
