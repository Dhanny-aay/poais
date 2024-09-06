import { useContext, useEffect, useState } from "react";
import fileplus from "./assets/FilePlus.svg";
import xclose from "./assets/XClose button.svg";
import { handleGetCategory } from "../../controllers/permitControllers";
import SubCategoryPrompt from "./subCategoryPrompt";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ApplicationTypeContext } from "../context/applicationContext";

const InitialPrompt = ({ setMakeInitialPromptVisible }) => {
  const [option, setOption] = useState("");
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { applicationType, setApplicationType } = useContext(
    ApplicationTypeContext
  );
  const [categoryID, setCategoryID] = useState(null);

  const [isSubCategoryPromptVisible, setSubCategoryPromptVisible] =
    useState(false);

  const options = [
    {
      name: "Apply for a Permit",
      info: "Start a new application for the required permit.",
    },
    {
      name: "Pay Penalty Fee",
      info: "Settle penalties or fines related to your permits.",
    },
  ];

  const handleOptionSelection = (selectedOption) => {
    setOption((prevOption) =>
      prevOption === selectedOption.name ? "" : selectedOption.name
    );

    setApplicationType(selectedOption.name);

    setCategoryID((prevCategoryID) =>
      prevCategoryID === selectedOption.id ? null : selectedOption.id
    );
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await handleGetCategory();
        if (data) {
          const firstTwoItems = data.data;
          setCategory(firstTwoItems);
        } else {
          // enqueueSnackbar("Failed to fetch profile data", { variant: "error" });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  // console.log(categoryID);

  return (
    <>
      <div className=" w-full md:w-[120%] h-full bg-[#1212128d] z-[99999] fixed top-0 md:-left-[20%] p-6 flex justify-center items-center">
        <div className=" md:ml-[20%] bg-[#FFFFFF] p-6 rounded-[15px]  2xl:h-[700px] w-[600px]">
          <div className=" w-full h-full overflow-auto ">
            <span className=" w-full flex items-start justify-between">
              <img src={fileplus} className="" alt="" />
              <img
                onClick={() => {
                  setMakeInitialPromptVisible(false);
                }}
                src={xclose}
                className=" "
                alt=""
              />
            </span>
            {isSubCategoryPromptVisible ? (
              <SubCategoryPrompt
                setSubCategoryPromptVisible={setSubCategoryPromptVisible}
                categoryID={categoryID}
              />
            ) : (
              <>
                <p className="font-Cabin font-semibold text-lg text-[#272D37]">
                  Permits & Payments
                </p>
                <p className="text-[#5F6D7E] font-Inter font-normal text-sm mt-1">
                  Select an Option to Continue
                </p>

                {loading ? (
                  <div className="mt-6">
                    {[...Array(2)].map((_, index) => (
                      <div
                        key={index}
                        className="p-4 mb-3 rounded-lg flex flex-row justify-between cursor-pointer border-[#EAEBF0] border"
                      >
                        <span>
                          <Skeleton height={20} width={200} />
                          <Skeleton
                            height={16}
                            width={150}
                            style={{ marginTop: 8 }}
                          />
                        </span>
                        <div className="round">
                          <Skeleton circle height={20} width={20} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6">
                    {category.map((item) => (
                      <div
                        key={item.id}
                        className={`p-4 mb-3 rounded-lg flex flex-row justify-between cursor-pointer ${
                          option === item.name
                            ? "border-[#01903C] border-2"
                            : "border-[#EAEBF0] border"
                        }`}
                        onClick={() => handleOptionSelection(item)}
                      >
                        <span>
                          <p
                            className={`font-Inter text-base font-medium ${
                              option === item.name
                                ? "text-[#01903C]"
                                : "text-[#344054]"
                            }`}
                          >
                            {item.name}
                          </p>
                          <p
                            className={`font-Inter font-normal text-sm ${
                              option === item.name
                                ? "text-[#01903C]"
                                : "text-[#667085]"
                            }`}
                          >
                            {item.description}
                          </p>
                        </span>
                        <div className="round">
                          <input
                            type="checkbox"
                            id={item.name}
                            checked={option === item.name}
                            readOnly
                          />
                          <label htmlFor={item.name}></label>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="w-full mt-4 grid grid-cols-2 gap-4">
                  <button
                    onClick={() => {
                      setMakeInitialPromptVisible(false);
                    }}
                    className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => {
                      if (categoryID) {
                        setSubCategoryPromptVisible(true);
                      }
                    }}
                    className="w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InitialPrompt;
