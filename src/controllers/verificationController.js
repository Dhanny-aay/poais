import api from "../index/api";

// Function to verify company
export const handleCompanyVerify = async (userData, onSuccess, onError) => {
  try {
    const response = await api("POST", "/user/verify-company", userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};

// Function to verify National
export const handleNationalVerify = async (userData, onSuccess, onError) => {
  try {
    const response = await api("POST", "/user/verify-id", userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};

// Function to verify Permit
export const handlePermitVerify = async (id) => {
  try {
    const response = await api("GET", `/user/verify-certificate/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error; // rethrow the error to handle it in the calling function
  }
};

// Function to submit vehicle
export const handleVehicleSubmit = async (id, userData, onSuccess, onError) => {
  try {
    const response = await api("PATCH", `/user/vehicle-permit/${id}`, userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};

// Function to submit event
export const handleEventSubmit = async (id, userData, onSuccess, onError) => {
  try {
    const response = await api("PATCH", `/user/event-permit/${id}`, userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};
