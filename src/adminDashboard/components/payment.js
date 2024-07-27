import { useContext, useState } from "react";
import left from "./assets/left.svg";
import right from "./assets/right.svg";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";

const Payment = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);
  const [currentPage, setCurrentPage] = useState(5);

  const transactions = [
    {
      id: 1,
      title: "Club House Permit",
      transactionId: "DFT1CA4",
      time: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Processing",
    },
    {
      id: 2,
      title: "Club House Permit",
      transactionId: "DFT1CA4",
      time: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Failed",
    },
    {
      id: 3,
      title: "Club House Permit",
      transactionId: "DFT1CA4",
      time: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Successful",
    },
    {
      id: 4,
      title: "Club House Permit",
      transactionId: "DFT1CA4",
      time: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Successful",
    },
    {
      id: 5,
      title: "Club House Permit",
      transactionId: "DFT1CA4",
      time: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Successful",
    },
    {
      id: 6,
      title: "Club House Permit",
      transactionId: "DFT1CA4",
      time: "2021-05-21 12:39",
      amount: "₦11500",
      status: "Successful",
    },
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
        <div className=" flex flex-col md:flex-row space-y-3 md:space-y-0 items-start justify-between w-full">
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
          <div className="min-w-full border border-[#EAEBF0] overflow-x-auto rounded-[10px]">
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
                {transactions.map((transaction, index) => (
                  <tr key={transaction.id}>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.title}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.transactionId}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.time}
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

export default Payment;
