import { useFetchApplicationContext } from "../../../UtilFunctions/FetchApplications";
import { ActivePageContext } from "../../context/ActivePageContext";
import { CurrentIdentifierContext } from "../../context/applicationContext";
import LoadingTable from "../loadingTable";
import dropdown from "./assets/Dropdown button.svg";
import left from "./assets/left.svg";
import right from "./assets/right.svg";
import { useContext, useEffect, useState } from "react";

const PendingApp = () => {
  const { activePage, setActivePage } = useContext(ActivePageContext);
  const [currentPage, setCurrentPage] = useState(5);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { currIdentifier, setCurrIdentifier } = useContext(
    CurrentIdentifierContext
  );
  const { fetchPermitApplications, applications, loading } =
    useFetchApplicationContext();

  useEffect(() => {
    const params = {
      status: "Pending",
      // Add other query parameters as needed
    };
    fetchPermitApplications(params);
  }, [activePage]); // Fetch applications on component mount

  console.log(applications);

  const totalPages = 6;

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleDropdown = (index, identifier) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(index); // Open dropdown for this row
      setCurrIdentifier(identifier); // Set the current identifier
    }
  };

  const handleClick = (page) => {
    setActivePage(page);
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Pending":
        return "text-[#EFC131] bg-[#EFC1311A]";
      case "Reviewing":
        return "text-[#EFC131] bg-[#EFC1311A]";
      default:
        return "";
    }
  };

  console.log(currIdentifier);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="">
        <div className="min-w-full border border-[#EAEBF0] rounded-[10px] overflow-x-auto overflow-y-hidden">
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
                  Application ID
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Date Submitted
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Status
                </th>
                <th className="px-4 py-2 border-b text-left font-Cabin text-xs font-semibold text-black">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="6">
                    <LoadingTable />
                  </td>
                </tr>
              ) : applications.length === 0 ? (
                // Display message if applications array is empty
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-3 text-center text-sm font-Inter text-[#5F6D7E]"
                  >
                    There are no applications yet.
                  </td>
                </tr>
              ) : (
                // Map through applications array to display actual data
                applications.map((application, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {application.category}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {application.identifier}
                    </td>
                    <td className="px-4 py-3 border-b text-left font-Inter text-[#5F6D7E] text-sm font-medium">
                      {formatDate(application.created_at)}
                    </td>
                    <td className="px-4 py-3 border-b text-left">
                      <span
                        className={`px-2 py-1 rounded-full font-Inter text-xs font-normal ${getStatusClasses(
                          application.status
                        )}`}
                      >
                        {application.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b text-left relative font-Inter text-[#5F6D7E] text-sm font-medium">
                      <img
                        src={dropdown}
                        alt="Dropdown"
                        onClick={() =>
                          toggleDropdown(index, application.identifier)
                        }
                        className="cursor-pointer"
                      />
                      {openDropdown === index && (
                        <div className="border border-[#DAE0E6] rounded-[5px] absolute right-24 top-8 w-[192px] z-[99] bg-white">
                          <button
                            onClick={() => handleClick("editApplication")}
                            className="py-2 px-4 text-[#272D37] font-Inter font-normal text-sm"
                          >
                            Edit Application
                          </button>
                          <button className="py-2 px-4 text-[#ED3237] font-Inter font-normal text-sm">
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!loading && applications.length > 0 && (
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

export default PendingApp;
