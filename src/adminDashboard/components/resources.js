import { useContext, useState } from "react";
import save from "./assets/save.svg";
import edit from "./assets/pencil-line.svg";
import bin from "./assets/trash-01.svg";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";
import file from "./assets/jpg.svg";
import NewResource from "./newResource";
import EditResource from "./editResource";

const Resources = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);
  const [makeNewVisible, setMakeNewVisible] = useState(false);
  const [makeEditVisible, setMakeEditVisible] = useState(false);

  const resource = [
    { name: "Public Order Services", size: "80.69 mb" },
    { name: "Public Order Application", size: "320.69 mb" },
  ];

  return (
    <>
      {makeNewVisible && <NewResource setMakeNewVisible={setMakeNewVisible} />}
      {makeEditVisible && (
        <EditResource setMakeEditVisible={setMakeEditVisible} />
      )}
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <div className=" flex items-center w-full justify-between border-b border-[#EAEBF0] pb-4">
          <div>
            <p className=" font-Cabin font-bold text-xl text-[#101828]">
              Resources
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-sm mt-1">
              View all available resources here
            </p>
          </div>

          <button
            onClick={() => {
              setMakeNewVisible(true);
            }}
            className=" px-4 py-[10px] rounded-[8px] bg-[#01813F] text-center font-Inter text-sm font-semibold text-white"
          >
            Upload New Resources
          </button>
        </div>

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
              <span className=" flex items-center space-x-4">
                <img src={save} className=" w-5" alt="" />
                <img
                  onClick={() => {
                    setMakeEditVisible(true);
                  }}
                  src={edit}
                  className=" w-5"
                  alt=""
                />
                <img src={bin} className=" w-5" alt="" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;
