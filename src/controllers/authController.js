import api from "../index/api";

// Function to handle user registration and verification
export const handleUserRegister = async (userData, onSuccess, onError) => {
  try {
    const response = await api(
      "POST",
      "/user/auth/register-verification-identity",
      userData
    );
    localStorage.setItem("poais_email", userData.email);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};

// Function to handle user login OTP request
export const handleUserLoginOTP = async (userData, onSuccess, onError) => {
  try {
    const response = await api("POST", "/user/auth/login", userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};
// Function to handle login OTP verification
export const handleUserOTPVerify = async (userData, onSuccess, onError) => {
  try {
    const response = await api("POST", "/user/auth/verify-otp", userData);
    onSuccess(response);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
};
