import { createContext, useState } from "react";

export const PaymentMethodContext = createContext();

const PaymentResponseProvider = (props) => {
  const [paymentResponse, setPaymentResponse] = useState("");

  return (
    <>
      <PaymentMethodContext.Provider
        value={{ paymentResponse, setPaymentResponse }}
      >
        {props.children}
      </PaymentMethodContext.Provider>
    </>
  );
};

export default PaymentResponseProvider;
