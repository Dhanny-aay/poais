import { useContext, useEffect, useState } from "react";
import SubCategoryPrompt2 from "./subCategoryPrompt2";
import { TypeContext } from "../context/ActivePageContext";
import { ApplicationDependencyContext } from "../context/verifyContext";

const SubCategoryPrompt1 = ({
  setSubCategoryPromptVisible1,
  selectedSubCategory,
}) => {
  const [selectedType, setSelectedType] = useState(null);
  const { type, setType } = useContext(TypeContext);
  const { applicationDependency, setApplicationDependency } = useContext(
    ApplicationDependencyContext
  );
  const [isSubCategoryPromptVisible2, setSubCategoryPromptVisible2] =
    useState(false);

  const handleSelectChange = (event) => {
    const selectedID = parseInt(event.target.value, 10);

    const selectedSubCategoryItem = selectedSubCategory.find(
      (item) => item.id === selectedID
    );

    setType(selectedSubCategoryItem.name.toLowerCase());
    setSelectedType(selectedSubCategoryItem || null);
    setApplicationDependency(selectedSubCategoryItem.dependencies);
  };

  console.log(applicationDependency);

  return (
    <>
      {isSubCategoryPromptVisible2 ? (
        <SubCategoryPrompt2
          setSubCategoryPromptVisible2={setSubCategoryPromptVisible2}
          selectedType={selectedType}
        />
      ) : (
        <>
          <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
            Choose Type
          </p>
          <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
            Select an Option to Continue
          </p>

          <label
            htmlFor="permitType"
            className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
          >
            Choose type
            <span className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
              <select
                id="permitType"
                className="w-full text-[#919BA7] font-normal font-Inter text-sm"
                onChange={handleSelectChange}
              >
                <option value="">Choose Type</option>
                {selectedSubCategory ? (
                  <>
                    {selectedSubCategory.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <>
                    <option value="">Loading...</option>
                  </>
                )}
              </select>
            </span>
          </label>

          <div className="w-full mt-4 grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setSubCategoryPromptVisible1(false);
              }}
              className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
            >
              Back
            </button>

            <button
              onClick={() => {
                if (selectedType) {
                  setSubCategoryPromptVisible2(true);
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

export default SubCategoryPrompt1;
