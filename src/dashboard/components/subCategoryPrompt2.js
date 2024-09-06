import { useContext, useState } from "react";
import { handleCreatePermitApplication } from "../../controllers/applicationController";
import load from "./assets/load.gif";
import {
  ApplyModalContext,
  CategoryIDContext,
  IdentifierContext,
  InitialPromptContext,
} from "../context/applicationContext";

const SubCategoryPrompt2 = ({ selectedType, setSubCategoryPromptVisible2 }) => {
  const [category_id, setCategory_id] = useState(null);
  const [loading, setLoading] = useState(false);
  const { cateID, setCateID } = useContext(CategoryIDContext);
  const { identifier, setIdentifier } = useContext(IdentifierContext);
  const { makeInitialPromptVisible, setMakeInitialPromptVisible } =
    useContext(InitialPromptContext);

  const { makeModalVisible, setMakeModalVisible } =
    useContext(ApplyModalContext);

  const handleSelectChange = (e) => {
    setCategory_id(e.target.value);
    setCateID(e.target.value);
  };

  // console.log(cateID);
  // console.log(selectedType);

  const onSuccess = (response) => {
    setLoading(false);
    const recievedData = response.data;
    setIdentifier(recievedData.identifier);

    setMakeInitialPromptVisible(!makeInitialPromptVisible);
    setMakeModalVisible(!makeModalVisible);
  };
  const onError = () => {
    setLoading(false);
    // navigate("/studentlogin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = { category_id };
    handleCreatePermitApplication(userData, onSuccess, onError);
  };

  //   console.log(cateID);
  return (
    <>
      <p className=" font-Cabin font-semibold text-lg text-[#272D37]">
        Choose Sub Category
      </p>
      <p className=" text-[#5F6D7E] font-Inter font-normal text-sm mt-1 ">
        Select an Option to Continue
      </p>

      <label
        htmlFor="permitType"
        className="w-full mt-4 flex flex-col text-[#272D37] font-Inter font-medium text-xs"
      >
        Please Choose
        <span className="w-full mt-2 border border-[#DAE0E6] rounded-[6px] px-4 py-3">
          <select
            id="permitType"
            className="w-full text-[#919BA7] font-normal font-Inter text-sm"
            onChange={handleSelectChange}
          >
            <option value="">Choose sub category</option>
            {selectedType && Array.isArray(selectedType.sub_categories) ? (
              selectedType.sub_categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))
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
            setSubCategoryPromptVisible2(false);
          }}
          className="w-full py-3 font-Inter rounded-md text-[#272D37] font-semibold border border-[#DAE0E6] text-base"
        >
          Back
        </button>

        <button
          onClick={(e) => {
            if (category_id) {
              handleSubmit(e); // Pass the event to handleSubmit
            }
          }}
          className="w-full py-3 font-Inter rounded-md text-[#fff] bg-[#01903C] font-semibold flex justify-center items-center text-base"
        >
          {loading ? <img src={load} className=" w-6" alt="" /> : "Next"}
        </button>
      </div>
    </>
  );
};

export default SubCategoryPrompt2;
