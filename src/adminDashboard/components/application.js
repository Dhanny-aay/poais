import { useContext, useState } from "react";
import left from "./assets/left.svg";
import right from "./assets/right.svg";
import btnn from "./assets/Button.svg";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";

const Application = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);
  const { activePage, setActivePage } = useContext(AdminActivePageContext);

  const handleClick = (page) => {
    setActivePage(page);
  };

  const [currentPage, setCurrentPage] = useState(5);

  const transactions = [
    {
      id: 1,
      permitType: "Club House Permit",
      applicationId: "DF11CA4",
      applicationTime: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Processing",
    },
    {
      id: 2,
      permitType: "Club House Permit",
      applicationId: "DF11CA4",
      applicationTime: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Failed",
    },
    {
      id: 3,
      permitType: "Club House Permit",
      applicationId: "DF11CA4",
      applicationTime: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Successful",
    },
    // ... more transactions
  ];

  const getStatusClasses = (status) => {
    switch (status) {
      case "Processing":
        return "text-[#EFC131] bg-[#EFC1311A]";
      case "Failed":
        return "text-[#FF4E3E] bg-[#FF4E3E1A]";
      case "Successful":
        return "text-[#17BD8D] bg-[#17BD8D1A]";
      default:
        return "";
    }
  };

  const totalPages = 6;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <div className="">
          <p className=" font-Cabin font-bold text-xl text-[#101828]">
            Applications
          </p>
          <p className=" text-[#475467] font-Inter font-normal text-sm mt-1">
            View all applications here
          </p>
        </div>

        <div className="overflow-x-auto mt-4">
          <div className="min-w-full border border-[#EAEBF0] rounded-[10px]">
            <table className="min-w-full rounded-[10px]">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    S/N
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Permit Type
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Application ID
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Application Time
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Amount
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Payment Status
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={transaction.id}>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.permitType}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.applicationId}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.applicationTime}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.amount}
                    </td>
                    <td className="px-4 py-3 border-b text-left">
                      <span
                        className={`px-2 py-1 rounded-full font-Inter text-xs font-normal ${getStatusClasses(
                          transaction.status
                        )}`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b text-left">
                      <button
                        onClick={() => handleClick("viewApplication")}
                        className="text-[#01903C] font-Inter text-xs flex items-center space-x-4 font-medium"
                      >
                        View Application
                        <img src={btnn} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
            className="px-3 py-1 text-sm flex font-Inter font-medium text-[#5F6D7E] border border-gray-300 rounded-md"
          >
            <img src={left} className="h-5 w-5 mr-2" alt="Left Arrow" />
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
            className="px-3 py-1 text-sm flex font-Inter font-medium items-center text-[#5F6D7E] border border-gray-300 rounded-md"
          >
            Next
            <img src={right} className="h-5 ml-2 w-5" alt="Right Arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Application;
