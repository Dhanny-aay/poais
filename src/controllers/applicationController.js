import api from "../index/api";

// Helper function to convert params object to query string
const buildQueryString = (params) => {
  return new URLSearchParams(params).toString();
};

// Function to get permit applications with parameters
export const handleGetPermitApplications = async (params = {}) => {
  try {
    // Construct the query string from params
    const queryString = buildQueryString(params);

    const response = await api("GET", `/user/application?${queryString}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// Function to handle application creation
export const handleCreatePermitApplication = async (
  userData,
  onSuccess,
  onError
) => {
  try {
    const response = await api("POST", "/user/application", userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};

// Function to get application by ID
export const handleGetApplicationByID = async (id) => {
  try {
    const response = await api("GET", `/user/application/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // rethrow the error to handle it in the calling function
  }
};

// Function to handle application update
export const handleUpdateApplication = async (
  id,
  userData,
  onSuccess,
  onError
) => {
  try {
    const response = await api("PUT", `/user/application/${id}`, userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};
