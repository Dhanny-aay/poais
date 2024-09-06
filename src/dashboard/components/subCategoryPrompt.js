import { useContext, useEffect, useState } from "react";
import { handleGetCategoryByID } from "../../controllers/permitControllers";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubCategoryPrompt1 from "./subCategoryPrompt1";
import { CategoryContext } from "../context/ActivePageContext";
// import { EntityTypeContext } from "../context/applicationContext";

const SubCategoryPrompt = ({ categoryID, setSubCategoryPromptVisible }) => {
  const { categoryType, setCategoryType } = useContext(CategoryContext);
  // const { entityType, setEntityType } = useContext(EntityTypeContext);

  const [option, setOption] = useState("");
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subCategoryID, setSubCategoryID] = useState(null);
  const [isSubCategoryPromptVisible1, setSubCategoryPromptVisible1] =
    useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await handleGetCategoryByID(categoryID);
        if (data) {
          const firstTwoItems = data.data.sub_categories;
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

  const handleOptionSelection = (selectedOption) => {
    const selectedSubCategory = category.find(
      (item) => item.id === selectedOption.id
    );

    setOption((prevOption) =>
      prevOption === selectedOption.name ? "" : selectedOption.name
    );

    setCategoryType(selectedOption.name);
    setSubCategoryID((prevCategoryID) =>
      prevCategoryID === selectedOption.id ? null : selectedOption.id
    );

    setSelectedSubCategory((prevSubCategory) =>
      prevSubCategory && prevSubCategory.id === selectedOption.id
        ? null
        : selectedSubCategory.sub_categories
    );
  };

  // console.log(categoryType);

  return (
    <>
      {isSubCategoryPromptVisible1 ? (
        <SubCategoryPrompt1
          setSubCategoryPromptVisible1={setSubCategoryPromptVisible1}
          selectedSubCategory={selectedSubCategory}
        />
      ) : (
        <>
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
            <>
              <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
                Choose Category
              </p>
              <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
                Select an Option to Continue
              </p>

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
            </>
          )}

          <div className="w-full mt-4 grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setSubCategoryID(null);
                setSubCategoryPromptVisible(false);
              }}
              className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
            >
              Back
            </button>

            <button
              onClick={() => {
                if (subCategoryID) {
                  setSubCategoryPromptVisible1(true);
                }
              }}
              className="w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SubCategoryPrompt;
