import { createContext, useState, useContext } from "react";

// Create Validation Context
const ValidationContext = createContext();

export const ValidationProvider = ({ children }) => {
  const [isValid, setIsValid] = useState(false);

  return (
    <ValidationContext.Provider value={{ isValid, setIsValid }}>
      {children}
    </ValidationContext.Provider>
  );
};

// Custom hook for using ValidationContext
export const useValidationContext = () => useContext(ValidationContext);
