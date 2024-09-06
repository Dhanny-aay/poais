import { useState } from "react";
import load from "./assets/load.gif";
import { handlePermitVerify } from "../../../controllers/verificationController";

const Manual = () => {
  const [loading, setLoading] = useState(false);
  const [application_id, setApplication_Id] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = await handlePermitVerify(application_id);
      if (data) {
        const recievedItems = data;
        console.log(recievedItems);
      } else {
        // enqueueSnackbar("Failed to fetch profile data", { variant: "error" });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <label
        htmlFor=""
        className=" flex w-full flex-col font-Inter text-sm font-medium text-[#272D37]"
      >
        Permit ID
        <input
          type="text"
          name="application_id"
          id="application_id"
          value={application_id}
          onChange={(e) => setApplication_Id(e.target.value)}
          className=" mt-3 w-full py-3 px-4 border border-[#DAE0E6] rounded-[6px] text-sm font-normal font-Inter text-[#919BA7]"
          placeholder="Enter Permit ID"
        />
        <button
          onClick={handleSubmit}
          className=" w-full mt-6 bg-[#01903C] py-3 rounded-[6px] font-Inter font-semibold text-base text-white flex items-center justify-center"
        >
          {loading ? (
            <img src={load} className=" w-6" alt="" />
          ) : (
            "Validate Permit"
          )}
        </button>
      </label>
    </>
  );
};

export default Manual;
