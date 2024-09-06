import api from "../index/api";

// Function to update transaction
export const handleTransactionUpdate = async (
  id,
  userData,
  onSuccess,
  onError
) => {
  try {
    const response = await api(
      "PATCH",
      `/user/user-transactions/${id}`,
      userData
    );
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};

// Function to get user transactions
export const handleGetUserTransactions = async () => {
  try {
    const response = await api("GET", "/user/user-transactions");
    return response;
  } catch (error) {
    console.log(error);
  }
};
