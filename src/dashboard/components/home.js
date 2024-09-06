import { useContext } from "react";
import {
  ActivePageContext,
  SidebarContext,
} from "../context/ActivePageContext";
import pend from "./assets/pend.svg";
import prove from "./assets/proved.svg";
import reject from "./assets/reject.svg";
import LoadingTable from "./loadingTable";

const Home = ({ transactions, loadingTransactions }) => {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const { sidebarVisible, setSidebarVisible } = useContext(SidebarContext);

  const handleClick = (page) => {
    setActivePage(page);
  };

  const applicate = [
    { tag: "Pending", number: "03", icon: pend },
    { tag: "Approved ", number: "04", icon: prove },
    { tag: "Rejected", number: "03", icon: reject },
  ];

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

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);

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
        <p className=" font-Cabin font-bold text-xl text-black">
          My Applications
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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

        <p className=" font-Cabin font-bold text-xl text-black mt-6 ">
          Quick Actions
        </p>
        <div className=" grid grid-cols-2 md:grid-cols-4 w-full gap-3 mt-3">
          <button className=" w-full bg-[#3B82F6] rounded-[8px] py-4 text-center font-Inter font-semibold text-white text-sm">
            New Application
          </button>
          <button className=" w-full bg-[#22C55E] rounded-[8px] py-4 text-center font-Inter font-semibold text-white text-sm">
            Scan QR Code
          </button>
          <button className=" w-full bg-[#EAB308] rounded-[8px] py-4 text-center font-Inter font-semibold text-white text-sm">
            View Resources
          </button>
          <button className=" w-full bg-[#A855F7] rounded-[8px] py-4 text-center font-Inter font-semibold text-white text-sm">
            Contact Support
          </button>
        </div>

        <div className=" w-full flex items-center justify-between mt-6">
          <p className=" font-Cabin font-bold text-xl text-black ">Payments</p>
          <button
            onClick={() => handleClick("Payments")}
            className=" py-2 px-3 text-center text-[#01903C] font-semibold text-xs font-Inter"
          >
            View All
          </button>
        </div>

        <div className="mt-4">
          <div className="min-w-full border border-[#EAEBF0] overflow-x-auto  rounded-[10px]">
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
      </div>
    </>
  );
};

export default Home;
