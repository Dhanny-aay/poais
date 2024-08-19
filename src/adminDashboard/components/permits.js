import { useContext, useState } from "react";
import {
  AdminActivePageContext,
  AdminSidebarContext,
} from "../contexts/AdminActivePageContext";
import left from "./assets/left.svg";
import right from "./assets/right.svg";
import btnn from "./assets/Button.svg";
import AddPermitModal from "./addPermitModal";
import EditPermitModal from "./editPermitModal";

const Permits = () => {
  const { sidebarVisible, setSidebarVisible } = useContext(AdminSidebarContext);
  const { activePage, setActivePage } = useContext(AdminActivePageContext);
  const [makeVisible, setMakeVisible] = useState(false);
  const [makeVisible1, setMakeVisible1] = useState(false);

  const handleClick = (page) => {
    setActivePage(page);
  };

  const [currentPage, setCurrentPage] = useState(5);

  const transactions = [
    {
      id: 1,
      title: "Motor Permit",
      price: "₦11500",
      duration: "30 Days",
    },
    {
      id: 2,
      title: "Event Permit",
      price: "₦11500",
      duration: "30 Days",
    },
    {
      id: 3,
      title: "Club Permit",
      price: "₦11500",
      duration: "30 Days",
    },
    // ... more transactions
  ];

  const totalPages = 6;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {makeVisible && <AddPermitModal setMakeVisible={setMakeVisible} />}
      {makeVisible1 && <EditPermitModal setMakeVisible1={setMakeVisible1} />}
      <div
        onClick={() => {
          setSidebarVisible(false);
        }}
        className=" absolute lg:left-[20%] top-[72px] w-full lg:w-[80%] p-6"
      >
        <div className=" flex items-start justify-between w-full">
          <div>
            <p className=" font-Cabin font-bold text-xl text-[#101828]">
              Permits
            </p>
            <p className=" text-[#475467] font-Inter font-normal text-sm mt-1">
              Add new permits, view details, and edit prices.
            </p>
          </div>
          <button
            onClick={() => {
              setMakeVisible(true);
            }}
            className=" bg-[#01903C] px-12 py-3 text-white font-Inter text-base font-medium rounded-[10px]"
          >
            Add New Permit
          </button>
        </div>

        <div className="mt-6">
          <div className="min-w-full border border-[#EAEBF0] overflow-x-auto rounded-[10px]">
            <table className="min-w-full rounded-[10px]">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    S/N
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Permit Title
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Price
                  </th>
                  <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                    Duration
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
                      {transaction.title}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.price}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {transaction.duration}
                    </td>

                    <td className="px-4 py-3 border-b text-left">
                      <button
                        onClick={() => setMakeVisible1(true)}
                        className="text-[#01903C] font-Inter text-xs flex items-center space-x-4 font-medium"
                      >
                        Edit
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

export default Permits;
