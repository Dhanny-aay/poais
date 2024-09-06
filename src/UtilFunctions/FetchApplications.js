import { createContext, useContext, useState } from "react";
import { handleGetPermitApplications } from "../controllers/applicationController";

const FetchApplicationContext = createContext();

export const useFetchApplicationContext = () =>
  useContext(FetchApplicationContext);

export const FetchApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPermitApplications = async (params = {}) => {
    setLoading(true);
    try {
      const data = await handleGetPermitApplications(params);

      if (data) {
        setApplications(data.data);
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
    <FetchApplicationContext.Provider
      value={{ applications, fetchPermitApplications, loading }}
    >
      {children}
    </FetchApplicationContext.Provider>
  );
};
