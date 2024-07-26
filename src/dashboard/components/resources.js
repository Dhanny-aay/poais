import { useContext } from "react";
import { SidebarContext } from "../context/ActivePageContext";
import file from "./assets/File.svg";
import download from "./assets/save.svg";

const Resources = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);

  const resource = [
    { name: "Public Order Services", size: "80.69 mb" },
    { name: "Public Order Application", size: "320.69 mb" },
  ];

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <p className=" font-Cabin font-bold text-xl text-[#101828]">
          Resources
        </p>
        <p className=" text-[#475467] font-Inter font-normal text-sm mt-1">
          View all available resources here
        </p>

        <div className=" flex flex-col space-y-3 mt-4 border border-[#EAEBF0] rounded-[10px] px-3">
          {resource.map((item, index) => (
            <div
              key={index}
              className=" w-full bg-white p-3 flex flex-row items-center border-b border-[#EAEBF0] justify-between"
            >
              <div className=" flex flex-row space-x-3">
                <img src={file} alt="" />
                <div className="">
                  <p className=" font-Inter font-medium text-[#272D37] text-sm">
                    {item.name}
                  </p>
                  <p className=" font-Inter text-xs mt-1 text-[#5F6D7E]">
                    {item.size}
                  </p>
                </div>
              </div>
              <img src={download} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;
