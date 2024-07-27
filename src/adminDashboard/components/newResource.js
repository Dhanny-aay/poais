import xclose from "./assets/XClose button.svg";
import file from "./assets/FileArrowUp.svg";
import add from "./assets/Add button.svg";

const NewResource = ({ setMakeNewVisible }) => {
  return (
    <>
      <div className=" w-full md:w-[120%] h-full bg-[#1212128d] z-[99999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
        <div className=" md:ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] w-[600px]">
          <div className=" w-full h-full overflow-auto ">
            <span className=" w-full flex items-start justify-between">
              <img src={file} className="" alt="" />
              <img
                onClick={() => {
                  setMakeNewVisible(false);
                }}
                src={xclose}
                className=" "
                alt=""
              />
            </span>
            <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
              Upload New Resources
            </p>
            <label
              htmlFor=""
              className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
            >
              Resource title
              <input
                type="text"
                className=" w-full text-[#919BA7] font-normal font-Inter text-sm mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3"
                name=""
                placeholder="Enter Resource title"
                id=""
              />
            </label>
            <p className=" text-[#272D37] font-Inter font-medium text-x mt-4">
              Upload resources
            </p>
            <div className=" mt-2 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-3">
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
            <div className=" w-full mt-4 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setMakeNewVisible(false);
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

export default NewResource;
