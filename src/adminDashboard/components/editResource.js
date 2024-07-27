import xclose from "./assets/XClose button.svg";
import file from "./assets/FileArrowUp.svg";
import jpg from "./assets/jpg.svg";
import save from "./assets/save.svg";
import trash from "./assets/trash-01.svg";

const EditResource = ({ setMakeEditVisible }) => {
  return (
    <>
      <div className=" w-full md:w-[120%] h-full bg-[#1212128d] z-[99999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
        <div className=" md:ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px] w-[600px]">
          <div className=" w-full h-full overflow-auto ">
            <span className=" w-full flex items-start justify-between">
              <img src={file} className="" alt="" />
              <img
                onClick={() => {
                  setMakeEditVisible(false);
                }}
                src={xclose}
                className=" "
                alt=""
              />
            </span>
            <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
              Edit Resources
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
              Uploaded resources
            </p>
            <div className=" mt-3 w-full border-b border-[#DAE0E6] items-center py-6 flex justify-between ">
              <div className=" flex flex-row items-center space-x-5">
                <img src={jpg} alt="" />
                <span className=" flex flex-col">
                  <p className="text-[#272D37] font-Inter font-medium text-sm">
                    ID Card Image
                  </p>
                  <p className=" text-[#5F6D7E] font-Inter font-normal text-xs mt-1 ">
                    8.00 mb
                  </p>
                </span>
              </div>
              <span className=" flex items-center space-x-3">
                <img src={save} alt="" />
                <img src={trash} alt="" />
              </span>
            </div>

            <div className=" w-full mt-4 grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setMakeEditVisible(false);
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

export default EditResource;
