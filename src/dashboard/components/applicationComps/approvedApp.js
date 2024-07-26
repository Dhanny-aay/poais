import dropdown from "./assets/Dropdown button.svg";
import left from "./assets/left.svg";
import right from "./assets/right.svg";
import { useState } from "react";

const ApprovedApp = () => {
  const [currentPage, setCurrentPage] = useState(5);
  const [openDropdown, setOpenDropdown] = useState(null);
  const permits = Array(10).fill({
    title: "Club House Permit",
    approvalDate: "May 2, 2024",
    expirationDate: "May 2, 2024",
  });

  const totalPages = 6;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(index); // Open dropdown for this row
    }
  };

  return (
    <>
      <div className="overflow-x-auto">
        <div className="min-w-full border border-[#EAEBF0] rounded-[10px]">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  S/N
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Application Title
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Approval Date
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Expiration Date
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {permits.map((permit, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </td>
                  <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                    {permit.title}
                  </td>
                  <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                    {permit.approvalDate}
                  </td>
                  <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                    {permit.expirationDate}
                  </td>
                  <td className="px-4 py-3 border-b text-left relative font-Inter text-[#5F6D7E] text-sm font-medium">
                    <img
                      src={dropdown}
                      alt="Dropdown"
                      onClick={() => toggleDropdown(index)}
                      className="cursor-pointer"
                    />
                    {openDropdown === index && (
                      <div className="border border-[#DAE0E6] rounded-[5px] absolute right-24 top-8 w-[192px] z-10 bg-white">
                        <button className="py-2 px-4 text-[#272D37] font-Inter font-normal text-sm">
                          Download Permit
                        </button>
                        <button className="py-2 px-4 text-[#272D37] font-Inter font-normal text-sm">
                          Share
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
            className="px-3 py-1 text-sm flex font-Inter font-medium   text-[#5F6D7E] border border-gray-300 rounded-md"
          >
            <img src={left} className="h-5 w-5 mr-2" />
            Prev
          </button>
          <div className="flex space-x-1">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 text-sm ${
                  currentPage === i + 1
                    ? "bg-[#01903C] text-white"
                    : "text-[#5F6D7E] border border-gray-300"
                } rounded-md`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              currentPage < totalPages && goToPage(currentPage + 1)
            }
            className="px-3 py-1 text-sm flex font-Inter font-medium  items-center text-[#5F6D7E] border border-gray-300 rounded-md"
          >
            Next
            <img src={right} className="h-5 ml-2 w-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ApprovedApp;
