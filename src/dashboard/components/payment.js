import { useContext, useState } from "react";
import { SidebarContext } from "../context/ActivePageContext";
import left from "./assets/left.svg";
import right from "./assets/right.svg";
import LoadingTable from "./loadingTable";

const Payment = ({ loadingTransactions, transactions }) => {
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);
  const [currentPage, setCurrentPage] = useState(5);

  const getStatusClasses = (status) => {
    switch (status) {
      case "Pending":
        return "text-[#EFC131] bg-[#EFC1311A]";
      case "Failed":
        return "text-[#FF4E3E] bg-[#FF4E3E1A]";
      case "Paid":
        return "text-[#17BD8D] bg-[#17BD8D1A]";
      case "Incomplete":
        return "text-[#FF9100] bg-[#FF91001A]"; // Orange for Incomplete
      default:
        return "text-[#A0AEC0] bg-[#A0AEC01A]"; // Light Gray for Default
    }
  };

  const totalPages = 6;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <div className=" flex flex-col space-y-6 md:space-y-0 md:flex-row items-start justify-between w-full">
          <div className="">
            <p className=" font-Cabin font-bold text-xl text-[#101828]">
              Payment History
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-sm mt-1">
              View all payment transactions here
            </p>
          </div>
          <label
            htmlFor=""
            className="text-[#272D37] font-medium text-sm font-Inter flex flex-col"
          >
            Sort by
            <span className=" border border-[#DAE0E6] rounded-[5px] py-3 px-4 mt-2 w-[230px]">
              <select
                name=""
                id=""
                className=" w-full font-normal text-sm text-[#272D37] font-Inter"
              >
                <option value="">All Payments</option>
              </select>
            </span>
          </label>
        </div>

        <div className="mt-6">
          <div className="min-w-full border border-[#EAEBF0] rounded-[10px] overflow-x-auto">
            <table className="min-w-full rounded-[10px]">
              <thead>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  S/N
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Transaction Title
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Transaction ID
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Time
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Amount
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Status
                </th>
              </thead>
              <tbody>
                {loadingTransactions ? (
                  <tr>
                    <td colSpan="6">
                      <LoadingTable />
                    </td>
                  </tr>
                ) : transactions.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="py-4 text-center text-sm font-Inter text-[#5F6D7E]"
                    >
                      There are no transactions.
                    </td>
                  </tr>
                ) : (
                  transactions.map((transaction, index) => (
                    <tr key={transaction.id}>
                      <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </td>
                      <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                        {transaction.title}
                      </td>
                      <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                        {transaction.identifier}
                      </td>
                      <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                        {formatDateTime(transaction.created_at)}
                      </td>
                      <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                        {"₦" + transaction.total}
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
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {!loadingTransactions && transactions.length > 0 && (
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
        )}
      </div>
    </>
  );
};

export default Payment;
