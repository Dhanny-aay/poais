import { useContext } from "react";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";

import pend from "./assets/pend.svg";
import prove from "./assets/proved.svg";
import reject from "./assets/reject.svg";
import btnn from "./assets/Button.svg";

const Home = () => {
  const { activePage, setActivePage } = useContext(AdminActivePageContext);
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);

  const handleClick = (page) => {
    setActivePage(page);
  };

  const applicate = [
    { tag: "Pending Request", number: "03", icon: pend },
    { tag: "Approved Request ", number: "04", icon: prove },
    { tag: "Rejected Request", number: "03", icon: reject },
  ];

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

  return (
    <>
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <p className=" font-Cabin font-bold text-xl text-black">Analysis</p>

        <div className=" grid grid-cols-3 gap-4 mt-4">
          {applicate.map((item, index) => (
            <div
              key={index}
              className=" border border-[#EAEBF0] rounded-[10px] p-5 relative"
            >
              <p className=" font-Inter text-[#272D37] font-medium text-sm">
                {item.tag}
              </p>
              <p className=" mt-3 text-[#272D37] font-Cabin text-2xl font-semibold">
                {item.number}
              </p>
              <p className=" mt-3 font-Inter font-medium text-xs text-[#606060]">
                Updated 1min ago
              </p>
              <img src={item.icon} className=" absolute top-5 right-5" alt="" />
            </div>
          ))}
        </div>

        <div className=" w-full flex items-center justify-between mt-6">
          <p className=" font-Cabin font-bold text-xl text-black ">
            Application
          </p>
          <button
            onClick={() => handleClick("Application")}
            className=" py-2 px-3 text-center text-[#01903C] font-semibold text-xs font-Inter"
          >
            View All
          </button>
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
                      <button className="text-[#01903C] font-Inter text-xs flex items-center space-x-4 font-medium">
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
      </div>
    </>
  );
};

export default Home;
