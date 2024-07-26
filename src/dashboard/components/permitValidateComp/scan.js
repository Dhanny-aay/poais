import add from "./assets/Add button.svg";
import Camera from "./assets/Camera.svg";

const Scan = () => {
  return (
    <>
      <p className=" font-Cabin font-bold text-2xl text-[#101828]">
        Upload QR Image
      </p>
      <div className=" mt-3 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-6">
        <img src={add} alt="" />
        <p className=" mt-3 text-xl font-medium font-Inter text-[#272D37]">
          Drop your Files Here
        </p>
        <p className=" mt-1 text-xs font-normal font-Inter text-[#5F6D7E]">
          <span className=" font-medium text-[#01903C] mr-1">Browse Files</span>
          from your Computer
        </p>
      </div>
      <p className=" font-Cabin font-bold text-2xl text-[#101828] mt-6">
        Scan QR Code
      </p>
      <div className=" mt-3 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-6">
        <img src={Camera} alt="" />
        <p className=" mt-3 text-xl font-medium font-Inter text-[#272D37]">
          Scan QR Code
        </p>
        <p className=" mt-1 text-xs font-normal font-Inter text-[#5F6D7E]">
          Make sure the camera permission is enabled for the browser.
        </p>
      </div>
    </>
  );
};

export default Scan;
