import { createContext, useContext, useState } from "react";
import { handleGetUserTransactions } from "../controllers/transactionController";

const FetchTransactionContext = createContext();

export const useFetchTransactionContext = () =>
  useContext(FetchTransactionContext);

export const FetchTransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(true);

  const fetchPermitTransactions = async () => {
    try {
      const data = await handleGetUserTransactions();
      if (data) {
        setTransactions(data.data);
      } else {
        // enqueueSnackbar("Failed to fetch profile data", { variant: "error" });
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoadingTransactions(false);
    }
  };

  return (
    <FetchTransactionContext.Provider
      value={{ transactions, fetchPermitTransactions, loadingTransactions }}
    >
      {children}
    </FetchTransactionContext.Provider>
  );
};
